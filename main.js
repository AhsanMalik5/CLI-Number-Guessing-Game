#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        massage: "please guess a Number between 1-10",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congrotulation! you guessed right Number.");
}
else {
    console.log("you guessed wrong Number.");
}
