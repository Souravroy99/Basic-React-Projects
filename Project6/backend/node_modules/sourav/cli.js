#!/usr/bin/env node

const minimist = require("minimist");
const pkg = require(".");
const chalk = require("chalk");
const boxen = require("boxen");
const clear = require("clear");
clear();
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
  backgroundColor: "#555555",
};

const options = {
  alias: { json: "j" },
};
const argv = minimist(process.argv.slice(2), options);

const greeting = chalk.white.bold(pkg(argv));
const msgBox = boxen(greeting, boxenOptions);

console.log(msgBox);
