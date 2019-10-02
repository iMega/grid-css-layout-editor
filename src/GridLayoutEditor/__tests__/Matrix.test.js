import Matrix from "../Matrix";

describe("make matrix 3x3", () => {
    const matrix = Matrix({ template: [". . .", ". . .", ". . ."] });

    it("matrix from config", () => {
        const expected = `". . ." ". . ." ". . ."`;

        expect(matrix.toCss()).toEqual(expected);
    });
});
