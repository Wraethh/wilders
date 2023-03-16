import chalk from "chalk";

// const wilders = ["Marco", "François", "Vanessa", "Pierre"];

// function displayWilders() {
//     console.log(`My fellow wilders are :`);
//     for (let i = 0; i < wilders.length; i++) {
//         console.log(`${wilders[i]}`);
//     }
// }

// displayWilders();

console.log(chalk.bgBlack.whiteBright("Marco"));
console.log(chalk.bgCyan.yellowBright("François"));
console.log(chalk.bgRedBright.blue("Vanessa"));
console.log(chalk.bgGreenBright.grey("Pierre"));