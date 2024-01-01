import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("Please input: ", (line) => {
  console.log(`${line} is input!`)
  rl.close();
})
