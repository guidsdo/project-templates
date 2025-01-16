import { Operation } from "fast-json-patch";
import { observable } from "mobx";
import { describe, it, expect } from "vitest";

import { trackChanges } from "../deltas";

type JSONValue = string | number | boolean | null | JSONObject | JSONArray | undefined;
interface JSONObject {
    [key: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

type User = {
    name: string;
    age?: number;
};

describe("trackChanges", () => {
    it("should track changes and generate patches", () => {
        const data: { user: User } = observable({
            user: {
                name: "John",
                age: 30
            }
        });

        const userPatches: Operation[] = [];

        trackChanges(data, userPatches);

        // Example user modifications
        data.user.name = "Alice";
        delete data.user.age;

        expect(userPatches).toEqual([
            { op: "replace", path: "/user/name", value: "Alice" },
            { op: "remove", path: "/user/age" }
        ]);
    });

    it("should prevent type changes", () => {
        const data: { user: User } = observable({
            user: {
                name: "John",
                age: 30
            }
        });

        const userPatches: Operation[] = [];

        trackChanges(data, userPatches);

        // Attempt to change the type of age
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.user.age = "thirty" as any;

        expect(userPatches).toEqual([]);
        expect(data.user.age).toBe(30);
    });
});
