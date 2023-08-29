import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "kindly enter your first number:"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "kindly enter your second number:"
    },
    {
        type: "list",
        name: "operator",
        choices: ["*", "+", "-", "/"],
        message: "select operators:"
    },
]);
const { numberOne, numberTwo, operator } = answer;
if (numberOne && numberTwo && operator) {
    let result;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("Kindly enter valid input");
}
