import { day2_input } from "./assets/day2.js";

// The Elf would first like to know which games would have been possible if the bag contained only 12 red cubes, 13 green cubes, and 14 blue cubes?

const limits = {
  red: 12,
  green: 13,
  blue: 14,
};

// part 1
const part1Solution = day2_input.split("\n").reduce((sum, game) => {
  let [id, rounds] = game.split(":");
  id = parseInt(id.match(/\d+/)[0]);
  rounds = rounds.split(";");
  // console.log(rounds);
  let pulls = [];
  rounds.forEach((round) =>
    round.split(",").forEach((pull) => pulls.push(pull))
  );
  // const pulls = [...rounds.map((round) => round.split(","))];
  // console.log(pulls);
  const gameNotPossible = !pulls.every((pull) => {
    return Object.keys(limits).every((key) => {
      if (pull.match(key) && parseInt(pull.match(/\d+/)) > limits[key]) {
        console.log("game not possible");
        return false;
      }
      // console.log("GOOD TO GO");
      return true;
    });
  });

  if (gameNotPossible) return sum;

  return (sum += id);
}, 0);

// part 2
const part2Solution = day2_input.split("\n").reduce((sum, game) => {
  const minCubes = {
    red: 0,
    green: 0,
    blue: 0,
  };
  let [id, rounds] = game.split(":");
  id = parseInt(id.match(/\d+/)[0]);
  rounds = rounds.split(";");
  let pulls = [];
  rounds.forEach((round) =>
    round.split(",").forEach((pull) => pulls.push(pull))
  );
  pulls.forEach((pull) => {
    Object.keys(minCubes).forEach((key) => {
      if (
        pull.includes(key) &&
        parseInt(pull.match(/\d+/)[0]) > minCubes[key]
      ) {
        minCubes[key] = parseInt(pull.match(/\d+/)[0]);
      }
    });
  });
  let power = minCubes.red * minCubes.green * minCubes.blue;
  return (sum += power);
}, 0);

console.log(part1Solution);
console.log(part2Solution);
