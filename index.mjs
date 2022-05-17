#! /usr/bin/env node
import { $, argv, chalk } from 'zx';

function exitWithError(errorMessage) {
    console.error(chalk.red(errorMessage));
    process.exit(1);
}

const gitUrl = argv.url;
if (!gitUrl) {
    exitWithError('Error: You must specify the --url argument');
}

// TODO check for gh being available

// https://cli.github.com/manual/gh_repo_clone
await $`mkdir repos && cd "$_" && gh repo clone ${gitUrl}`;

// TODO maybe fork directly and clone that? https://cli.github.com/manual/gh_repo_fork
// nah, https://cli.github.com/manual/gh_pr_create autoforks

// https://stackoverflow.com/questions/21253019/change-a-file-using-node-js

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

// open in the browser: https://cli.github.com/manual/gh_pr_view
