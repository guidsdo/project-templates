import { assert } from "chai";

describe("Math", () => {
    describe("floor", () => {
        it("should floor a number", () => {
            assert.strictEqual(Math.floor(2), 3);
        });

        it("should floor a number correctly", () => {
            assert.strictEqual(Math.floor(2), 2);
        });
    });
});
