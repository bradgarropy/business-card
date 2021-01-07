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

Installation is not required, as you can run this package with [`npx`][npx].

### 🥑 Usage

```
npx bradgarropy
```

### 🕺🏼 Create Your Own

First, [fork][fork] this repository, clone it your machine, and install the dependencies.

```bash
git clone https://github.com/bradgarropy/business-card.git
cd business-card
npm install
```

Next, use the `generator` to create your configuration.

```bash
npm run generate
```

Finally, update the `name` field in the [`package.json`][package] and publish to `npm`! I highly recommend that the `name` field matches your primary online username (ex: `bradgarropy`). Now anyone with `npm` installed can see your business card!

### 🎞 Credit

Inspired by [J.C. Hiatt][jc].  
Accomplished with the help of this [article][article].

[package]: https://github.com/bradgarropy/business-card/blob/master/package.json
[fork]: https://github.com/bradgarropy/business-card/fork
[card]: images/business-card.png
[npx]: https://npmjs.com/package/npx
[jc]: https://twitter.com/jchiatt/status/1251700185840918531
[article]: https://medium.com/@natterstefan/how-to-create-your-personal-npm-business-card-816dfc66ca8
