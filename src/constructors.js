const colors = require("./colors")
const corners = require("./corners")
const {
    space,
    divider,
    verticalBorder,
    getWidth,
    getFill,
    getShift,
    horizontalBorder,
} = require("./utils")
const {info} = require("../config.json")
const {
    marginLeft,
    marginRight,
    paddingLeft,
    paddingRight,
    indent,
} = require("./constants")

const getTopBorder = cornerStyle => {
    const width = getWidth(info.links)
    const {topLeft, topRight} = corners[cornerStyle]

    const topBorder = [
        space(marginLeft),
        colors.base(topLeft),
        colors.base(horizontalBorder(width)),
        colors.base(topRight),
        space(marginRight),
    ].join("")

    return topBorder
}

const getBottomBorder = cornerStyle => {
    const width = getWidth(info.links)
    const {bottomLeft, bottomRight} = corners[cornerStyle]

    const bottomBorder = [
        space(marginLeft),
        colors.base(bottomLeft),
        colors.base(horizontalBorder(width)),
        colors.base(bottomRight),
        space(marginRight),
    ].join("")

    return bottomBorder
}

const getDividerLine = () => {
    const width = getWidth(info.links)

    const dividerLine = [
        space(marginLeft),
        colors.base("├"),
        colors.base(divider(width)),
        colors.base("┤"),
        space(marginRight),
    ].join("")

    return dividerLine
}

const getBlankLine = () => {
    const width = getWidth(info.links)

    const blankLine = [
        space(marginLeft),
        colors.base(verticalBorder(1)),
        space(width),
        colors.base(verticalBorder(1)),
        space(marginRight),
    ].join("")

    return blankLine
}

const getLine = content => {
    const line = [
        space(marginLeft),
        colors.base(verticalBorder(1)),
        space(paddingLeft),
        content,
        space(paddingRight),
        colors.base(verticalBorder(1)),
        space(marginRight),
    ].join("")

    return line
}

const getName = (name, handle) => {
    const content = [name, " / ", handle].join("")
    const fill = getFill(content)

    const formattedContent = [
        colors.accent(name),
        colors.base(" / "),
        colors.accent(handle),
        space(fill),
    ].join("")

    const line = getLine(formattedContent)
    return line
}

const getTitle = (title, company) => {
    const content = [title, " @ ", company].join("")
    const fill = getFill(content)

    const formattedContent = [
        colors.base(title),
        colors.base(" @ "),
        colors.base(company),
        space(fill),
    ].join("")

    const line = getLine(formattedContent)
    return line
}

const getLink = (name, url) => {
    const shift = getShift(name)
    const content = [space(shift + indent), name, ": ", url].join("")
    const fill = getFill(content)

    const formattedContent = [
        space(shift + indent),
        colors.base(name),
        colors.base(": "),
        colors.accent(url),
        space(fill),
    ].join("")

    const line = getLine(formattedContent)
    return line
}

const getCommand = handle => {
    const content = ["npx ", handle].join("")
    const formattedContent = colors.accent(`npx ${handle}`)

    const width = getWidth(info.links)

    const line = [
        space(marginLeft),
        colors.base(verticalBorder(1)),
        space(width - content.length - 2),
        formattedContent,
        space(2),
        colors.base(verticalBorder(1)),
        space(marginRight),
    ].join("")

    return line
}

module.exports = {
    getTopBorder,
    getBottomBorder,
    getDividerLine,
    getBlankLine,
    getLine,
    getLink,
    getName,
    getTitle,
    getCommand,
}
