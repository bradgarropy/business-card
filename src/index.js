const chalk = require("chalk")
const corners = require("./corners")
const me = require("../data/me.json")
const dividers = require("./dividers")
const style = require("../data/style.json")

const width = 61
const divider = dividers[style.divider]
const {topLeft, topRight, bottomLeft, bottomRight} = corners[style.corners]

const topBorder = [
    chalk.yellow(topLeft),
    chalk.gray("─".repeat(width)),
    chalk.yellow(topRight),
].join("")

const bottomBorder = [
    chalk.yellow(bottomLeft),
    chalk.gray("─".repeat(width)),
    chalk.yellow(bottomRight),
].join("")

const dividerLine = [
    chalk.gray("├"),
    chalk.gray(divider.repeat(width)),
    chalk.gray("┤"),
].join("")

const border = chalk.gray("│")
const blankLine = `${border}${" ".repeat(width)}${border}`

const card = `
    ${topBorder}
    ${blankLine}
    ${border}    ${me.name} / ${me.handle}                               ${border}
    ${border}    ${me.title} @ ${me.company}                               ${border}
    ${blankLine}
    ${border}         Website: ${me.website}                    ${border}
    ${border}          Twitch: ${me.twitch}              ${border}
    ${border}          GitHub: ${me.github}             ${border}
    ${border}         Twitter: ${me.twitter}            ${border}
    ${border}         YouTube: ${me.youtube}            ${border}
    ${border}        LinkedIn: ${me.linkedin}        ${border}
    ${blankLine}
    ${dividerLine}
    ${border}                                            npx ${me.handle}  ${border}
    ${bottomBorder}
`

console.log(card)
