import { Operation } from "fast-json-patch";
import { observable, intercept } from "mobx";

type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject {
    [key: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

type DataObject = JSONObject;

const data: DataObject = observable({
    user: {
        name: "John",
        age: 30
    }
});

const userPatches: Operation[] = [];

export function trackChanges(data: DataObject, patches: Operation[], path: string = "") {
    intercept(data, change => {
        const fullPath = path ? `${path}/${String(change.name)}` : `/${String(change.name)}`;
        const oldValue = change.object[change.name];

        if (change.type === "update" && typeof oldValue !== typeof change.newValue) {
            console.warn(`Type mismatch: Cannot change type of ${fullPath} from ${typeof oldValue} to ${typeof change.newValue}`);
            return null; // Prevent the change
        }

        if (change.type === "update") {
            patches.push({ op: "replace", path: fullPath, value: change.newValue });
        } else if (change.type === "remove") {
            patches.push({ op: "remove", path: fullPath });
        }

        return change;
    });

    for (const key in data) {
        if (typeof data[key] === "object" && data[key] !== null) {
            trackChanges(data[key] as DataObject, patches, `${path}/${key}`);
        }
    }
}

trackChanges(data, userPatches);
