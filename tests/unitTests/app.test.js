jest.mock("../../src/app"); // this happens automatically with automocking
import app from "../../src/app";

describe("app - Unit Test", () => {
  it("Successfull app function", () => {
    const data = app();
    expect(app.mock.calls.length).toBe(1);
  });
});
