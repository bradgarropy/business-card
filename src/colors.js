const chalk = require("chalk")
const {style} = require("../config.json")

const colors = {
    base: chalk[style.baseColor],
    accent: chalk[style.accentColor],
}

module.exports = colors
