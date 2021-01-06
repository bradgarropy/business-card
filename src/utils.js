const colors = require("./colors")
const {paddingLeft, indent, paddingRight} = require("./constants")
const dividers = require("./dividers")
const {info, links, style} = require("../config.json")

const space = count => {
    return " ".repeat(count)
}

const divider = count => {
    return dividers[style.divider].repeat(count)
}

const verticalBorder = count => {
    return colors.base("│").repeat(count)
}

const horizontalBorder = count => {
    return colors.base("─").repeat(count)
}

const getLinkLength = link => {
    const length = `${link.name}: ${link.url}`.length
    return length
}

const getLongestLink = () => {
    const lengths = links.map(link => getLinkLength(link))
    const longestLink = Math.max(...lengths)
    return longestLink
}

const getLongestLinkName = () => {
    const lengths = links.map(link => link.name.length)
    const longestLinkName = Math.max(...lengths)
    return longestLinkName
}

const getWidth = () => {
    const longestLink = getLongestLink()
    const width = paddingLeft + indent + longestLink + paddingRight
    return width
}

const getFill = content => {
    const width = getWidth(links)
    const fill = width - paddingLeft - paddingRight - content.length
    return fill
}

const getShift = name => {
    const longestLinkName = getLongestLinkName()
    const shift = longestLinkName - name.length

    return shift
}

module.exports = {
    space,
    divider,
    verticalBorder,
    horizontalBorder,
    getLinkLength,
    getLongestLink,
    getWidth,
    getFill,
    getShift,
}
