#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clear_1 = __importDefault(require("clear"));
const boxen_1 = __importDefault(require("boxen"));
const inquirer_1 = __importDefault(require("inquirer"));
const content_1 = require("./content");
(0, clear_1.default)();
const nameBox = (0, boxen_1.default)(content_1.dataString, content_1.boxenOptions);
console.log(nameBox);
const prompt = inquirer_1.default.createPromptModule();
prompt(content_1.questions).then(answer => answer.action());
//# sourceMappingURL=index.js.map