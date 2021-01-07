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

Next, use the `generator` to create your configuration. You can also [modify the configuration][configuration] manually if you prefer.

```bash
npm run generate
```

Then, update the `name` field in [`package.json`][package]. I highly recommend that the `name` field matches your primary online username (ex: `bradgarropy`).

Finally, [publish][publish] the package to `npm`. If you are new to this process, I created a [video][video] covering publishing a package.

```bash
npm publish
```

Now anyone with `npm` installed can see your business card!

```bash
npx bradgarropy
```

### ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

### 🎞 Credit

✨ inspired by [J.C. Hiatt][jc]  
📖 accomplished with the help of this [article][article]

[issues]: https://github.com/bradgarropy/business-card/issues
[twitter]: https://twitter.com/bradgarropy
[ama]: https://bradgarropy.com/ama
[package]: https://github.com/bradgarropy/business-card/blob/master/package.json
[fork]: https://github.com/bradgarropy/business-card/fork
[card]: images/business-card.png
[npx]: https://npmjs.com/package/npx
[jc]: https://twitter.com/jchiatt/status/1251700185840918531
[article]: https://medium.com/@natterstefan/how-to-create-your-personal-npm-business-card-816dfc66ca8
[configuration]: docs/configuration.md
[publish]: https://docs.npmjs.com/cli/v6/commands/npm-publish
[video]: https://youtu.be/S_wvHDOrac0
