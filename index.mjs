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

// https://cli.github.com/manual/gh_repo_clone
await $`mkdir repos && cd "$_" && gh repo clone ${gitUrl}`;

// TODO maybe fork directly and clone that? https://cli.github.com/manual/gh_repo_fork
