import inquirer from 'inquirer';
import fs from 'fs';
import os from 'os';
import { execSync } from "child_process";

const PROJECT_PATH = process.cwd();
const PACKAGE_JSON_PATH = `${PROJECT_PATH}/package.json`;
const PROJECT_SRC_PATH = `${PROJECT_PATH}/src`

const OPTIONAL_LIBRARIES: Record<string, string> = {
  'react-native-ui-lib': '^6.21.2',
  'detox': '^19.12.5',
  'react-native-vector-icons': '^9.2.0',
  'react-native-async-storage': '^0.0.1',
  'react-native-device-info': '^10.2.1',
  'react-native-config': '^1.4.11',
  'react-native-community/hooks': '^2.8.1',
  'react-i18next': '^11.18.6',
  'react-hook-form': '^7.37.0',
  'yup': '^0.32.11',
  'axios': '^1.1.2',
  'react-query': '^3.39.2',
  'orval': '^6.10.2',
};

const QUESTIONS: inquirer.QuestionCollection<{ libraries: string[] }> = [
  {
    name: "libraries",
    "type": "checkbox",
    default: ['react-native-ui-lib', 'detox', 'react-native-vector-icons', 'axios'],
    "message": "Select libraries to install",
    "choices": Object.keys(OPTIONAL_LIBRARIES)
  }
];

const optionalFolders: { name: string; condition: (libs: string[]) => boolean }[] = [
  { name: "api", condition: (libs) => libs.includes("orval") || libs.includes("react-query") },
  { name: "i18n", condition: (libs) => libs.includes('react-i18next') }
];

const inquire = (callback: (value: unknown) => void) => inquirer.prompt(QUESTIONS)
  .then((answers) => {
    let newPackageJson;
    try {
      const projectPackageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, { encoding: 'utf8' }));
      newPackageJson = {
        ...projectPackageJson,
        dependencies: {
          ...projectPackageJson.dependencies,
          ...answers.libraries.reduce((acc, it) => ({ ...acc, [it]: OPTIONAL_LIBRARIES[it] }), {})
        }
      };
    } catch (error) {
      throw new Error(`Unable to parse package.json: ${PACKAGE_JSON_PATH}`);
    }

    // add folders in src for selected optional libs
    optionalFolders.forEach(({ name, condition }) => {
      if (condition(answers.libraries)) {
        const newDir = `${PROJECT_SRC_PATH}/${name}`
        fs.mkdirSync(newDir);
        fs.writeFileSync(`${newDir}/.gitkeep`, "");
      }
    })

    // add new libs to dependencies
    fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(newPackageJson, null, 2) + os.EOL);

    // init git repo to install hooks with husky
    execSync(`git init "${PROJECT_PATH}"`);

    callback(true);
  });

export {
  inquire
}