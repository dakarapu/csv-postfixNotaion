import readline from "readline";

const test = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

test.question("Are you testing this application?", function(res) {
  console.log(`Thanks for your response: ${res}`);
  test.close();
});

export default test;
