import inquirer from "inquirer";
let convertion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    },
};
let answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        message: "Select Your Currency",
        choices: ["PKR", "GBP", "USD"]
    },
    {
        type: "list",
        name: "TO",
        message: "Select Your conversion Currency",
        choices: ["PKR", "GBP", "USD"]
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Your Amount"
    }
]);
const { From, TO, amount } = answer;
if (From && TO && amount) {
    let result = convertion[From][TO] * amount;
    console.log(`Your conversation from ${From} to ${TO}is ${result}`);
}
else {
    console.log("invalid amount");
}
