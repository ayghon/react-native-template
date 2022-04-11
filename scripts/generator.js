// TODO use typescript
const inquirer = require('inquirer');
const fs = require('fs');
const os = require('os');
const { execSync } = require("child_process");

const optionalLibraries = {
  'react-native-ui-lib': '6.13.1',
  'detox': '19.6.5',
  'react-native-vector-icons': '9.1.0',
  'react-native-async-storage': '0.0.1',
  'react-native-device-info': '8.7.0',
  'react-native-config': '1.4.5',
  'react-native-community/hooks': '2.8.1',
  'react-i18next': '11.16.5',
  'react-hook-form': '7.29.0',
  'yup': '0.32.11',
  'axios': '0.26.1',
  'react-query': '3.34.19',
  'orval': '6.7.1',
}

const QUESTIONS = [
  {
    name: "libraries",
    "type": "checkbox",
    default: ['react-native-ui-lib', 'detox', 'react-native-vector-icons', 'axios'],
    "message": "Select libraries to install",
    "choices": Object.keys(optionalLibraries)
  }
  // TODO handle name change
  // {
  //   name: 'name',
  //   type: 'input',
  //   default: "MyApp",
  //   message: 'Project name:'
  // }
];

const inquire = (callback) => inquirer.prompt(QUESTIONS)
  .then((answers) => {
    const projectPath = process.cwd();
    const projectPackageJson = JSON.parse(fs.readFileSync(`${projectPath}/package.json`));

    const newPackageJson = {
      ...projectPackageJson,
      // name: answers.name,
      dependencies: {
        ...projectPackageJson.dependencies,
        ...answers.libraries.reduce((acc, it) => ({ ...acc, [it]: optionalLibraries[it] }), {})
      }
    }

    // change app name + add new libs to dependencies
    fs.writeFileSync(`${projectPath}/package.json`, JSON.stringify(newPackageJson, null, 2) + os.EOL);

    // init git repo to install hooks with husky
    execSync(`git init "${projectPath}"`);

    callback();
  });

module.exports = {
  inquire
}