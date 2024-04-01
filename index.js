#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todolist = [];
let conditions = true;
console.log(chalk.magenta.bold("\n\tWELCOME TO SYEDA AYESHA - TODO LIST APPLICATION\n\t"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.blue("Enter Your New Task:")
        }
    ]);
    todolist.push(addTask.task);
    console.log(chalk.grey(`${addTask.task} Task Added In TODO List Successfully`));
    let addmoreTask = await inquirer.prompt([
        {
            name: 'addmore',
            type: "confirm",
            message: chalk.blue("Do You Want To Add To Task?"),
            default: "false"
        }
    ]);
    conditions = addmoreTask.addmore;
}
console.log(chalk.magentaBright.bold("Your Updated TODO-List:", todolist));
