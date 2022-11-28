#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const rainbowTime = () => {
  return new Promise((res) => {
    setTimeout(res, 3000);
  });
};
async function welcome() {
  let rainbowTitle = chalkAnimation.rainbow("Let start calculation");
  await rainbowTime();
  rainbowTitle.stop();
  console.log(`_____________________
  |  _________________  |
  | | JO           0. | |
  | |_________________| |
  |  ___ ___ ___   ___  |
  | | 7 | 8 | 9 | | + | |
  | |___|___|___| |___| |
  | | 4 | 5 | 6 | | - | |
  | |___|___|___| |___| |
  | | 1 | 2 | 3 | | x | |
  | |___|___|___| |___| |
  | | . | 0 | = | | / | |
  | |___|___|___| |___| |
  |_____________________|`);
}

await welcome();

async function questions() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "operator",
      message: "Which operation you want? \n",
      choices: ["Addition", "Subtraction", "Multipication", "Division"],
    },
    {
      type: "number",
      name: "num1",
      message: "Enter first number: ",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter second number: ",
    },
  ]);

  if (answers.operator == "Addition") {
    console.log(
      chalk.red(
        `${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`
      )
    );
  } else if (answers.operator == "Subtraction") {
    console.log(
      chalk.red(
        `${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`
      )
    );
  } else if (answers.operator == "Multipication") {
    console.log(
      chalk.red(
        `${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`
      )
    );
  } else if (answers.operator == "Division") {
    console.log(
      chalk.red(
        `${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`
      )
    );
  }
}

// questions();

async function restart() {
  do {
    await questions();
    var againStart = await inquirer.prompt({
      type: "input",
      name: "restart",
      message: "Do you want to restart? y or n:",
    });
  } while (
    againStart.restart == "y" ||
    againStart.restart == "Y" ||
    againStart.restart == "yes" ||
    againStart.restart == "YES"
  );
}

restart();
