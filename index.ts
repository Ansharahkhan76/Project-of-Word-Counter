#! /usr/bin/env node 

// importing inquirer and chalk packages

import inquirer from "inquirer";
import chalk from "chalk";

// To Display name

console.log(chalk.bold.italic.cyanBright("\n \t\t Welcome To My Project of Word Counter "))
console.log(chalk.italic.green("\n \t \t\t---ANSHARAH KHAN--- \n"))

// Prompt the user to enter a Sentence

let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence : "
    }
]);

// trim use

let words = answers.sentence.trim().split(" ");

//Analysis Of User Input Sentence

console.log(chalk.red("-----------------------------------------"));
console.log(chalk.bold.italic.greenBright(chalk.bold.italic.red(`- Sentence Words: `)));
console.log(words);
console.log((`\n- Word Counts: ${chalk.bold.redBright(words.length)}`));
console.log(chalk.red("-----------------------------------------"));
