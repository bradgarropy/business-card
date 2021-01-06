const fs = require("fs")
const inquirer = require("inquirer")

const infoQuestions = [
    {
        type: "input",
        name: "name",
        message: "name",
    },
    {
        type: "input",
        name: "handle",
        message: "handle",
    },
    {
        type: "input",
        name: "company",
        message: "company",
    },
    {
        type: "input",
        name: "title",
        message: "title",
    },
]

const linkQuestions = [
    {
        type: "input",
        name: "name",
        message: "name",
    },
    {
        type: "input",
        name: "url",
        message: "url",
    },
    {
        type: "confirm",
        name: "more",
        message: "more?",
    },
]

const styleQuestions = [
    {
        type: "list",
        name: "corners",
        message: "corners",
        choices: [
            "normal",
            "rounded",
            "heavy",
            "double",
            "doubleTop",
            "doubleSide",
        ],
    },
    {
        type: "list",
        name: "divider",
        message: "divider",
        choices: ["normal", "triple", "quadruple"],
    },
    {
        type: "list",
        name: "baseColor",
        message: "baseColor",
        choices: [
            "black",
            "red",
            "green",
            "yellow",
            "blue",
            "magenta",
            "cyan",
            "white",
            "gray",
        ],
    },
    {
        type: "list",
        name: "accentColor",
        message: "accentColor",
        choices: [
            "black",
            "red",
            "green",
            "yellow",
            "blue",
            "magenta",
            "cyan",
            "white",
            "gray",
        ],
    },
]

const inquire = async () => {
    const config = {
        info: {},
        links: [],
        style: {},
    }

    const infoAnswers = await inquirer.prompt(infoQuestions)
    config.info = infoAnswers

    let shouldContinue = true

    while (shouldContinue) {
        const {name} = await inquirer.prompt(linkQuestions[0])
        const {url} = await inquirer.prompt(linkQuestions[1])
        config.links.push({name, url})

        const {more} = await inquirer.prompt(linkQuestions[2])
        shouldContinue = more
    }

    const styleAnswers = await inquirer.prompt(styleQuestions)
    config.style = styleAnswers

    fs.writeFileSync("config.json", JSON.stringify(config, null, 4))
}

inquire()
