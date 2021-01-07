const fs = require("fs")
const inquirer = require("inquirer")
const {infoQuestions, linkQuestions, styleQuestions} = require("./questions")

const generate = async () => {
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

generate()
