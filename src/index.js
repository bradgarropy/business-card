const chalk = require("chalk")
const corners = require("./corners")
const me = require("../data/me.json")
const dividers = require("./dividers")
const style = require("../data/style.json")

const link = url => chalk.blue(url)

const platform = name => chalk.white(`${name}: `)

const command = handle => chalk.blue(`npx ${handle}`)

const width = 61
const divider = dividers[style.divider]
const {topLeft, topRight, bottomLeft, bottomRight} = corners[style.corners]

const topBorder = [
    chalk.white(topLeft),
    chalk.white("─".repeat(width)),
    chalk.white(topRight),
].join("")

const bottomBorder = [
    chalk.white(bottomLeft),
    chalk.white("─".repeat(width)),
    chalk.white(bottomRight),
].join("")

const dividerLine = [
    chalk.white("├"),
    chalk.white(divider.repeat(width)),
    chalk.white("┤"),
].join("")

const border = chalk.white("│")
const blankLine = `${border}${" ".repeat(width)}${border}`

const card = `
    ${topBorder}
    ${blankLine}
    ${border}    ${chalk.blue(me.name)} ${chalk.white("/")} ${chalk.blue(
    me.handle,
)}                               ${border}
    ${border}    ${me.title} @ ${
    me.company
}                               ${border}
    ${blankLine}
    ${border}         ${platform("Website")}${link(
    me.website,
)}                    ${border}
    ${border}          ${platform("Twitch")}${link(
    me.twitch,
)}              ${border}
    ${border}          ${platform("GitHub")}${link(
    me.github,
)}             ${border}
    ${border}         ${platform("Twitter")}${link(
    me.twitter,
)}            ${border}
    ${border}         ${platform("YouTube")}${link(
    me.youtube,
)}            ${border}
    ${border}        ${platform("LinkedIn")}${link(
    me.linkedin,
)}        ${border}
    ${blankLine}
    ${dividerLine}
    ${border}                                            ${command(
    me.handle,
)}  ${border}
    ${bottomBorder}
`

console.log(card)
