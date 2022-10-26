#! /usr/bin/env node
import clear from 'clear'
import boxen from 'boxen'
import inquirer from 'inquirer'
import { dataString, boxenOptions, questions } from './content'

clear()

const nameBox = boxen(dataString, boxenOptions)
console.log(nameBox)
const prompt = inquirer.createPromptModule()

prompt(questions).then(answer => answer.action())
