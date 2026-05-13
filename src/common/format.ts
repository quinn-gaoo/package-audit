import { readJSON, writeJSON } from "./utils.js";
import path from "path";

export default async function format(auditPath: string) {
    const data = await readJSON(auditPath);

    const map: Record<string, any> = {}
    const bugLibs: Record<string, any[]> = {}
    for (const [key, value] of Object.entries<any>(data.vulnerabilities)) {
        map[key] = value;
        if (value.via.find((i: any) => typeof i === 'object')) {
            bugLibs[key] = { ...value }
        }
    }

    for (const key in map) {
        const item = map[key];
        const deps = []
        for (const via of item.via) {
            if (typeof via === 'string') {
                deps.push(map[via]);
            }
        }
        item.deps = deps;
    }


    const fixCircular = (item: any, cache: any = {}) => {
        cache[item.name] = true;
        if (!item.deps?.length) {
            return [item.name, ["find"]]
        }
        return [item.name, ...item.deps?.map((dep: any) => {
            if (cache[dep.name]) {
                return ["not found"]
            }
            const x = fixCircular(dep, cache);
            return [...x]
        })]
    }

    let deepResult: Record<string, any[]> = {}
    for (const key in map) {
        const item = map[key];
        if (item.isDirect) {
            const depsPath = fixCircular(item);
            const flatPaths = extractPaths(depsPath);
            deepResult[key] = flatPaths
        }
    }

    const result = {
        deepResult,
        bugLibs,
        metadata: data.metadata.vulnerabilities
    }
    await writeJSON(path.join(path.dirname(auditPath), 'format.json'), result);
    return result



}

function extractPaths(data: any[]) {
    const list = deepFlatten(data)
    console.log(typeof list)
    list.forEach(i => {
        console.log(i)
        i.pop()
    })
    return list
}
function deepFlatten(data: any[]) {
    const res: any[] = []
    const [name, ...children] = data;

    if (children.length === 0) return [name]

    children.forEach((child: any) => {
        const childPaths = deepFlatten(child)

        childPaths.forEach((childPath: any) => {
            if (childPath.includes("not found")) return []
            const l = [name, childPath].flat()
            res.push(l)
        })
    })
    return res
}
