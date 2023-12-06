import { input } from "./assets/day1.js";

const lines = input.split("\n");

// part 1
const total_1 = lines.reduce((sum, line) => {
  const digits = line.match(/\d/g);
  const allDigits = digits.join("");
  const firstAndLast = parseInt(allDigits[0] + allDigits[allDigits.length - 1]);
  sum += firstAndLast;
  return sum;
}, 0);

// part 2
const integers = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const total_2 = lines.reduce((sum, line) => {
  const matchArray = [];
  for (let i = 0; i < line.length; i++) {
    const match = line
      .substring(i)
      .match(/\d|one|two|three|four|five|six|seven|eight|nine/);
    if (match && matchArray[matchArray.length - 1] !== match[0]) {
      matchArray.push(
        integers.hasOwnProperty(match[0]) ? integers[match[0]] : match[0]
      );
    }
  }
  const firstAndLast = [matchArray[0], matchArray[matchArray.length - 1]];
  const intervalSum = firstAndLast.join("");

  sum += parseInt(intervalSum);
  return sum;
}, 0);
console.log(total_1);
console.log(total_2);
