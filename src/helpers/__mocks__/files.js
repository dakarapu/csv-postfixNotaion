//jest.mock("../../src/helpers/files");
//import { readFile, writeFile } from "../../src/helpers/files";

const str = `b1 b2 +,2 b2 3 * -,3 ,+
a1     ,5         ,  ,7 2 /
c2 3 * ,1 2       ,  ,5 1 2 + 4 * + 3 -`;
const readFileResponse = Buffer.from(str, "utf8");

const writeFileResponse = `-8,-13,3,#ERR
-8,5,#ERR,3.5
#ERR,2,#ERR,14`;

export const readFile = inputFile => {
  console.log("************* Read File Mocks ***********");
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      readFileResponse
        ? resolve(readFileResponse)
        : inputFile && reject("Unable to readfile")
    );
  });
};

export const writeFile = (outputFile, writeFileRequest) => {
  return new Promise((resolve, reject) => {
    process.nextTick(() =>
      writeFileResponse
        ? resolve(writeFileResponse)
        : outputFile &&
          writeFileRequest &&
          reject("No data received for mapping")
    );
  });
};
