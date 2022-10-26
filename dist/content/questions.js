"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const open_1 = __importDefault(require("open"));
const download_1 = __importDefault(require("download"));
const clui_1 = __importDefault(require("clui"));
const mailToMe = () => {
    (0, open_1.default)('mailto:gobindjeet78@gmail.com');
    console.log(`I'll try my best to get back to you.`);
};
const downloadResume = () => {
    const spinner = new clui_1.default.Spinner('Downloading your file..!', [
        '⣾',
        '⣽',
        '⣻',
        '⢿',
        '⡿',
        '⣟',
        '⣯',
        '⣷',
    ]);
    spinner.start();
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=19CuW43RxORUHTvDyZyau1tTFmoq7rT57';
    const fileDir = process.cwd();
    (0, download_1.default)(resumeUrl, fileDir).then(() => {
        spinner.stop();
        console.log('File downloaded successfully!');
        (0, open_1.default)(`${fileDir}/Final_CV(1).pdf`);
    });
};
const exitCLI = () => {
    console.log(chalk_1.default.green.bold('Hope to see you again.'));
};
const choices = [
    {
        name: 'Drop an e-mail.',
        value: mailToMe,
    },
    {
        name: 'Download my resume.',
        value: downloadResume,
    },
    {
        name: 'Exit..',
        value: exitCLI,
    },
];
/**
  Array for questions specified.
*/
const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What do you wanna do..?',
        choices,
    },
];
exports.default = questions;
//# sourceMappingURL=questions.js.map