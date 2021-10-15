import { assert } from "chai";
import { hello } from "../fileWithFunction";

describe("fileWithFunction", () => {
    describe("hello", () => {
        it("should something", () => {
            assert.strictEqual(hello(), "z");
        });
    });
});
