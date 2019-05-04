import fs from "fs";
import "@babel/polyfill";

export const readFile = filename => {
  return new Promise((resolve, reject) => {
    fs.readFile(`${filename}`, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
};

export const writeFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`${filename}`, data, err => {
      if (err) reject(err);
      resolve(data);
    });
  });
};
