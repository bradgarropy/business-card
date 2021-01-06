#!/usr/bin/env node

const {info, links, style} = require("../config.json")
const {
    getTopBorder,
    getBottomBorder,
    getDividerLine,
    getBlankLine,
    getLink,
    getName,
    getTitle,
    getCommand,
} = require("./constructors")

const card = [
    "",
    getTopBorder(style.corners),
    getBlankLine(),
    getName(info.name, info.handle),
    getTitle(info.title, info.company),
    getBlankLine(),
    ...links.map(link => getLink(link.name, link.url)),
    getBlankLine(),
    getDividerLine(style.divider),
    getCommand(info.handle),
    getBottomBorder(style.corners),
    "",
].join("\n")

console.log(card)
