describe("Math", () => {
    describe("floor", () => {
        it("should floor a number", () => {
            expect(Math.floor(2)).toEqual(3);
        });

        it("should floor a number correctly", () => {
            expect(Math.floor(2)).toEqual(2);
        });
    });
});
