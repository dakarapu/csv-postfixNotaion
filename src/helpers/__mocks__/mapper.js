//jest.mock("../../src/helpers/mapper");
//import { mapping, trimExpressions } from "../../src/helpers/mapper";

const trimExpressionsResponse = [
  ["b1 b2 +", "2 b2 3 * -", "3 ", "+"],
  ["a1     ", "5         ", "  ", "7 2 /"],
  ["c2 3 * ", "1 2       ", "  ", "5 1 2 + 4 * + 3 -"]
];

const mappingResponse = [
  [-8, -13, 3, "#ERR"],
  [-8, 5, "#ERR", 3.5],
  ["#ERR", 2, "#ERR", 14]
];

export const trimExpressions = trimExpressionsRequest => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      trimExpressionsResponse
        ? resolve(trimExpressionsResponse)
        : trimExpressionsRequest && reject("No data received for mapping")
    );
  });
};

export const mapping = mappingRequest => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      mappingResponse
        ? resolve(mappingResponse)
        : mappingRequest && reject("No data received for mapping")
    );
  });
};
