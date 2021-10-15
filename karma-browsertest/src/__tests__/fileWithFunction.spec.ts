import { hello } from "../fileWithFunction";

describe("fileWithFunction", () => {
    describe("hello", () => {
        it("should something", () => {
            expect(hello()).toEqual("z");
        });
    });
});
