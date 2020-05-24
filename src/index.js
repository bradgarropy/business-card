const me = require("../data/me.json")
const style = require("../data/style.json")
const corners = require("./corners")
const divider = require("./divider")

const {topLeft, topRight, bottomLeft, bottomRight} = corners[style.corners]

const width = 57
const topBorder = `${topLeft}${"─".repeat(width)}${topRight}`
const bottomBorder = `${bottomLeft}${"─".repeat(width)}${bottomRight}`
const dividerLine = `├${divider[style.divider].repeat(width)}┤`
const blankLine = `│${" ".repeat(width)}│`

const card = `
    ${topBorder}
    ${blankLine}
    │    ${me.name} / ${me.handle}                           │
    │    ${me.title} @ ${me.company}                           │
    ${blankLine}
    │     Website: ${me.website}                    │
    │      Twitch: ${me.twitch}              │
    │      GitHub: ${me.github}             │
    │     Twitter: ${me.twitter}            │
    │     YouTube: ${me.youtube}            │
    │    LinkedIn: ${me.linkedin}        │
    ${blankLine}
    ${dividerLine}
    │                                        npx ${me.handle}  │
    ${bottomBorder}
`

console.log(card)
