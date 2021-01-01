# 🃏 business card

<a href="https://www.npmjs.com/package/bradgarropy">
    <img alt="npm" src="https://img.shields.io/npm/v/bradgarropy.svg?style=flat-square">
</a>

<a href="https://www.npmjs.com/package/bradgarropy">
    <img alt="npm" src="https://img.shields.io/npm/dt/bradgarropy?style=flat-square">
</a>

_Digital business card._

![business card][card]

### 📦 Installation

Installation is not required!, as you can run this package with [`npx`][npx].

### 🥑 Usage

```
npx bradgarropy
```

### 🕺🏼 Create Your Own

First, [fork][fork] this repository.

Then edit the [`config.json`][config] file. Here's an example.

```json
{
    "info": {
        "name": "Brad Garropy",
        "handle": "bradgarropy",
        "company": "Adobe",
        "title": "Senior Frontend Developer",
        "links": [
            {
                "name": "Website",
                "url": "https://bradgarropy.com"
            }
        ]
    },
    "style": {
        "corners": "double",
        "divider": "triple",
        "baseColor": "white",
        "accentColor": "blue"
    }
}
```

The `info` section is all about you. The `handle` should describe your primary online username. `links` are displayed on the business card in the order specified.

The `style` section controls different visual elements of the business card. More information is provided in the [Style Configuration](#-style-configuration) section.

### 🎨 Style Configuration

You can customize certain visual aspects of the business card. Each one comes with preset values for you to choose from.

#### `corners`

| Name         | Example |
| ------------ | ------- |
| `normal`     | `┌┐`    |
| `rounded`    | `╭╮`    |
| `heavy`      | `┏┓`    |
| `double`     | `╔╗`    |
| `doubleTop`  | `╒╕`    |
| `doubleSide` | `╓╖`    |

Special characters used for the corners of the business card.

```json
{
    "style": {"corners": "heavy"}
}
```

#### `dividers`

| Name        | Example |
| ----------- | ------- |
| `normal`    | `─────` |
| `triple`    | `┄┄┄┄┄` |
| `quadruple` | `┈┈┈┈┈` |

Special characters used for the horizontal rule above the footer.

```json
{
    "style": {"dividers": "triple"}
}
```

#### `baseColor`

| Name            |
| --------------- |
| `black`         |
| `red`           |
| `green`         |
| `yellow`        |
| `blue`          |
| `magenta`       |
| `cyan`          |
| `white`         |
| `blackBright`   |
| `redBright`     |
| `greenBright`   |
| `yellowBright`  |
| `blueBright`    |
| `magentaBright` |
| `cyanBright`    |
| `whiteBright`   |

The color of the borders, job line, and link labels. You can use any [`chalk`][chalk] color value.

```json
{
    "style": {"baseColor": "white"}
}
```

#### `accentColor`

| Name            |
| --------------- |
| `black`         |
| `red`           |
| `green`         |
| `yellow`        |
| `blue`          |
| `magenta`       |
| `cyan`          |
| `white`         |
| `blackBright`   |
| `redBright`     |
| `greenBright`   |
| `yellowBright`  |
| `blueBright`    |
| `magentaBright` |
| `cyanBright`    |
| `whiteBright`   |

    The color of the name link, link urls, and footer text. You can use any [`chalk`][chalk] color value.

```json
{
    "style": {"accentColor": "blue"}
}
```

### 🎞 Credit

Inspired by [J.C. Hiatt][jc].  
Accomplished with the help of this [article][article].

[chalk]: https://github.com/chalk/chalk#readme
[config]: https://github.com/bradgarropy/business-card/blob/master/config.json
[fork]: https://github.com/bradgarropy/business-card/fork
[card]: images/business-card.png
[npx]: https://npmjs.com/package/npx
[jc]: https://twitter.com/jchiatt/status/1251700185840918531
[article]: https://medium.com/@natterstefan/how-to-create-your-personal-npm-business-card-816dfc66ca8
