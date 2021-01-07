# ⚙ configuration

The [configuration][config] file is called `config.json` and is located at the root of the project. There are three main sections.

-   [`info`](#-info-configuration)
-   [`links`](#-link-configuration)
-   [`style`](#-style-configuration)

Here is an example configuration file.

```json
{
    "info": {
        "name": "Brad Garropy",
        "handle": "bradgarropy",
        "company": "Adobe",
        "title": "Senior Frontend Developer"
    },
    "links": [
        {
            "name": "Website",
            "url": "https://bradgarropy.com"
        }
    ],
    "style": {
        "corners": "double",
        "divider": "triple",
        "baseColor": "white",
        "accentColor": "blue"
    }
}
```

## 👤 Info Configuration

The `info` section describes who you are and where you work.

| Name      | Example                     | Description              |
| --------- | --------------------------- | ------------------------ |
| `name`    | `Brad Garropy`              | Full name.               |
| `handle`  | `bradgarropy`               | Primary online username. |
| `company` | `Adobe`                     | Company name.            |
| `title`   | `Senior Frontend Developer` | Job title.               |

Special characters used for the corners of the business card.

```json
{
    "info": {
        "name": "Brad Garropy",
        "handle": "bradgarropy",
        "company": "Adobe",
        "title": "Senior Frontend Developer"
    }
}
```

## 🔗 Link Configuration

The `links` section highlights your best websites or social media accounts.

### `links[link]`

| Name   | Example                           | Description       |
| ------ | --------------------------------- | ----------------- |
| `name` | `Twitter`                         | Name of the link. |
| `url`  | `https://twitter.com/bradgarropy` | URL of the link.  |

It is an array of `link` objects with a `name` and `url`. Order is preserved when printed to the business card.

```json
{
    "links": [{"name": "Twitter", "url": "https://twitter.com/bradgarropy"}]
}
```

## 🎨 Style Configuration

The `style` configuration controls certain visual aspects of the business card. Each one comes with preset values for you to choose from.

### `style.corners`

| Name         | Example   |
| ------------ | --------- |
| `normal`     | `┌─────┐` |
| `rounded`    | `╭─────╮` |
| `heavy`      | `┏─────┓` |
| `double`     | `╔─────╗` |
| `doubleTop`  | `╒─────╕` |
| `doubleSide` | `╓─────╖` |

Special characters used for the corners of the business card.

```json
{
    "style": {"corners": "heavy"}
}
```

### `style.dividers`

| Name        | Example      |
| ----------- | ------------ |
| `normal`    | `──────────` |
| `triple`    | `┄┄┄┄┄┄┄┄┄┄` |
| `quadruple` | `┈┈┈┈┈┈┈┈┈┈` |

Special characters used for the horizontal rule above the footer.

```json
{
    "style": {"dividers": "triple"}
}
```

### `style.baseColor`

| Name      |
| --------- |
| `white`   |
| `black`   |
| `red`     |
| `green`   |
| `yellow`  |
| `blue`    |
| `magenta` |
| `cyan`    |
| `gray`    |

The color of the borders, job line, and link labels. You can use any [`chalk`][chalk] color value.

```json
{
    "style": {"baseColor": "white"}
}
```

### `style.accentColor`

| Name      |
| --------- |
| `white`   |
| `black`   |
| `red`     |
| `green`   |
| `yellow`  |
| `blue`    |
| `magenta` |
| `cyan`    |
| `gray`    |

The color of the name link, link urls, and footer text. You can use any [`chalk`][chalk] color value.

```json
{
    "style": {"accentColor": "blue"}
}
```

[chalk]: https://github.com/chalk/chalk#readme
[config]: https://github.com/bradgarropy/business-card/blob/master/config.json
