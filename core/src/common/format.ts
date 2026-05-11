import { readJSON, writeJSON } from "./utils";
import path from "path";

export default async function format(auditPath: string) {
    const auditJsonData = await readJSON(auditPath);
    const map: Record<string, any> = {}
    const bugMap: Record<string, any> = {}
    const directMap: Record<string, boolean> = {}
    for (const [key, value] of Object.entries<any>(auditJsonData.vulnerabilities)) {
        map[key] = value;
        if (value.isDirect) {
            // directMap[value.name] = { ...value };
        }

        if (value.via.find((via: any) => typeof via === 'object')) {
            bugMap[value.name] = value;
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
            return [fixCircular(dep, cache)]
        })]

    }

    let result: Record<string, any[]> = {}
    for (const key in map) {
        const item = map[key];
        if (item.isDirect) {
            const depsPath = fixCircular(item);
            const flatPaths = extractPaths(depsPath);
            result[key] = flatPaths
        }
    }



    const resultData = {
        result,
        bugMap,
        directMap,
        metadata: auditJsonData.metadata.vulnerabilities
    }
    await writeJSON(path.join(path.dirname(auditPath), 'format.json'), resultData);
    return resultData

}

function extractPaths(data: any[]) {
    const list = deepFlatten(data)
    list.forEach(i => {
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
