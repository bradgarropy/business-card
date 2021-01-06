const chalk = require("chalk")

const infoQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "handle",
        message: "What is your online handle?",
    },
    {
        type: "input",
        name: "company",
        message: "What company do you work for?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your job title?",
    },
]

const linkQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter a link name.",
    },
    {
        type: "input",
        name: "url",
        message: "Enter a url.",
    },
    {
        type: "confirm",
        name: "more",
        message: "Do you want to add more links?",
    },
]

const styleQuestions = [
    {
        type: "list",
        name: "corners",
        message: "Choose a corner style.",
        choices: [
            {name: "┌─────┐", value: "normal"},
            {name: "╭─────╮", value: "rounded"},
            {name: "┏─────┓", value: "heavy"},
            {name: "╔─────╗", value: "double"},
            {name: "╒─────╕", value: "doubleTop"},
            {name: "╓─────╖", value: "doubleSide"},
        ],
        pageSize: 6,
    },
    {
        type: "list",
        name: "divider",
        message: "Choose a divider style.",
        choices: [
            {name: "──────────", value: "normal"},
            {name: "┄┄┄┄┄┄┄┄┄┄", value: "triple"},
            {name: "┈┈┈┈┈┈┈┈┈┈", value: "quadruple"},
        ],
        pageSize: 3,
    },
    {
        type: "list",
        name: "baseColor",
        message: "Choose a base color.",
        choices: [
            {name: chalk.white("white"), value: "white"},
            {name: chalk.black("black"), value: "black"},
            {name: chalk.red("red"), value: "red"},
            {name: chalk.green("green"), value: "green"},
            {name: chalk.yellow("yellow"), value: "yellow"},
            {name: chalk.blue("blue"), value: "blue"},
            {name: chalk.magenta("magenta"), value: "magenta"},
            {name: chalk.cyan("cyan"), value: "cyan"},
            {name: chalk.gray("gray"), value: "gray"},
        ],
        default: "white",
        pageSize: 9,
    },
    {
        type: "list",
        name: "accentColor",
        message: "Choose an accent color.",
        choices: [
            {name: chalk.white("white"), value: "white"},
            {name: chalk.black("black"), value: "black"},
            {name: chalk.red("red"), value: "red"},
            {name: chalk.green("green"), value: "green"},
            {name: chalk.yellow("yellow"), value: "yellow"},
            {name: chalk.blue("blue"), value: "blue"},
            {name: chalk.magenta("magenta"), value: "magenta"},
            {name: chalk.cyan("cyan"), value: "cyan"},
            {name: chalk.gray("gray"), value: "gray"},
        ],
        default: "white",
        pageSize: 9,
    },
]

module.exports = {infoQuestions, linkQuestions, styleQuestions}
