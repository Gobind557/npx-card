import chalk from 'chalk'
import open from 'open'
import download from 'download'
import CLI from 'clui'
import { Answers, QuestionCollection } from 'inquirer'

const mailToMe = () => {
  open('mailto:gpbindjeet78@gmail.com')
  console.log(`I'll try my best to get back to you.`)
}

const downloadResume = () => {
  const spinner = new CLI.Spinner('Downloading your file..!', [
    '⣾',
    '⣽',
    '⣻',
    '⢿',
    '⡿',
    '⣟',
    '⣯',
    '⣷',
  ])
  spinner.start()
  const resumeUrl =
    'https://docs.google.com/uc?id=1LH6V9TOEJwgFkZcjVGLjMx4sXqcpkk05X2At7YKXY7E&export=download'
  const fileDir = process.cwd()
  download(resumeUrl, fileDir).then(() => {
    spinner.stop()
    console.log('File downloaded successfully!')
    open(`${fileDir}Final_CV.doc`)
  })
}

const exitCLI = () => {
  console.log(chalk.green.bold('Hope to see you again.'))
}

const choices: Answers[] = [
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
]

/**
  Array for questions specified.
*/
const questions: QuestionCollection = [
  {
    type: 'list',
    name: 'action',
    message: 'What do you wanna do..?',
    choices,
  },
]

export default questions
