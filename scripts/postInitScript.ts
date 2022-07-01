#!/usr/bin/env ts-node
import ora from 'ora';
import { inquire } from './generator';

const spinner = ora('Optional libraries setup');

new Promise((resolve) => {
  // spinner.start();
    console.log("start !!")
  inquire(resolve);
})
  .then(() => {
    // spinner.succeed();
    console.log("hello world !!")
  })
  .catch((error) => {
    // spinner.fail(error);
    console.log("error !!")
    throw new Error(
      'Something went wrong during the post init script execution',
    );
  });
