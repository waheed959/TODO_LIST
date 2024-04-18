#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    const todoQuestion = await inquirer.prompt([
        {
            name: "Question",
            message: "Manage your tasks",
            type: "list",
            choices: ["READ", "ADD", "UPDATE", "DELETE", "TERMINATE_PROGRAM"],
        },
    ]);
    if (todoQuestion.Question === "ADD") {
        const SecondQuestion = await inquirer.prompt([
            {
                name: "SecondQuestion",
                message: "ENTER SOMETHING IN YOUR TODO_LIST",
                type: "input",
            },
        ]);
        if (SecondQuestion.SecondQuestion === "") {
            console.log("YOU DIDN'T ADD ANYTHING IN YOUR LIST");
            if (todos.length == 0) {
                console.log("AND YOUR LIST IS ALSO EMPTY");
            }
        }
        else {
            todos.push(SecondQuestion.SecondQuestion);
            console.log(todos.join("\n"));
        }
    }
    else if (todoQuestion.Question === "READ") {
        if (todos.length == 0) {
            console.log("YOUR LIST IS EMPTY");
        }
        else {
            console.log("CURRENTLY YOUR LIST CONTAINS ");
            console.log(todos.join("\n"));
        }
    }
    else if (todoQuestion.Question === "TERMINATE_PROGRAM") {
        console.log("PROGRAM ENDS");
        break;
    }
    else if (todoQuestion.Question === "UPDATE")
        if (todos.length == 0) {
            console.log("YOU CAN NOT PERFORM THIS OPERATION BECAUSE YOUR LIST IS EMPTY");
        }
        else {
            const SecondQuestion = await inquirer.prompt([
                {
                    name: "SecondQuestion",
                    message: "ENTER THE INDEX OF THE LIST YOU WANT TO UPDATE",
                    type: "input",
                },
            ]);
            if (SecondQuestion.SecondQuestion == "") {
                console.log("YOU DIDN'T WRITE THE INDEX TO UPDATE");
                if (todos.length == 0) {
                    console.log(" AND YOU HAVE NOTHING TO UPDATE IN YOUR LIST");
                }
            }
            else if (SecondQuestion.SecondQuestion >= todos.length) {
                console.log("YOU HAVE ENTERED A WRONG INDEX");
            }
            else if (isNaN(parseInt(SecondQuestion.SecondQuestion))) {
                console.log("Invalid input. Please enter a valid number.");
            }
            else {
                const UPDATED_ITEM = await inquirer.prompt([
                    {
                        name: "UPDATED_ITEM",
                        message: "Enter the new value:",
                        type: "input",
                    },
                ]);
                if (UPDATED_ITEM.UPDATED_ITEM == "") {
                    console.log("YOU DIDN'T WRITE ANYTHING TO UPDATE");
                }
                else {
                    const indexToUpdate = UPDATED_ITEM.UPDATED_ITEM;
                    todos[parseInt(SecondQuestion.SecondQuestion)] = indexToUpdate;
                    console.log(`YOU HAVE UPDATED YOUR LIST`);
                }
            }
        }
    else {
        if (todos.length == 0) {
            console.log("YOU CAN NOT PERFORM THIS OPERATION BECAUSE YOUR LIST IS EMPTY");
        }
        else {
            const DELETED_ITEM = await inquirer.prompt([
                {
                    name: "DELETED_ITEM",
                    message: "ENTER THE INDEX OF THE LIST YOU WANT TO DELETE",
                    type: "input",
                },
            ]);
            if (DELETED_ITEM.DELETED_ITEM == "") {
                console.log("YOU DID NOT WRITE THE INDEX TO DELETE");
                if (todos.length == 0) {
                    console.log("AND YOU HAVE NOTHING TO DELETE");
                }
            }
            else if (DELETED_ITEM.DELETED_ITEM >= todos.length) {
                console.log("YOU HAVE ENTERED A WRONG INDEX");
            }
            else if (isNaN(parseInt(DELETED_ITEM.DELETED_ITEM))) {
                console.log("Invalid input. Please enter a valid number.");
            }
            else {
                const indexToDelete = parseInt(DELETED_ITEM.DELETED_ITEM);
                todos.splice(indexToDelete, 1);
                console.log(`YOU HAVE DELETED SOMETHING FROM YOUR LIST`);
            }
        }
    }
}
