import assertProcessEnv from "./assertProcessEnv";

describe("assertProcessEnv", () => {
    it("Throws error if specified env var doesn't exist", () => {
        const getUnexistingEnvVar = () => assertProcessEnv("");
        expect(getUnexistingEnvVar).toThrow(Error);
    });

    it("Returns value of specified env var if it exists", () => {
        const nodeEnv = assertProcessEnv("NODE_ENV");
        expect(nodeEnv).toEqual("test");
    });
});
