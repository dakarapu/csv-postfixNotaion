import "@babel/polyfill";
import app from "../../src/app";

beforeAll(() => {
  let a = __dirname + "/input_test.csv";
  let b = __dirname + "/output_test.csv";
  process.argv = ["", "", a, b];
});

afterEach(() => {
  process.argv = [];
});

describe("App - Unit Test - 1", () => {
  it("Testing successful path", async () => {
    await app();
  });
});

describe("App - Unit Test - 2", () => {
  it("Testing error catch with process exit", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    try {
      await app();
    } catch (e) {
      expect(e).toThrow();
      expect(mockExit).toHaveBeenCalled();
    }
  });
});
