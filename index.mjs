#! /usr/bin/env node
/**
 * Usage, for example:
 * 
 * ```sh
 * node index.mjs --repo nodeca/js-yaml
 * ```
 * 
 * In Codespaces, log out from gh first and log back in to get proper rights.
 * TODO Add commands for that
*/ 
import {
    $, argv, chalk, cd,
} from 'zx';
import * as fs from 'node:fs';

const defaultFile = 'README.md';

function exitWithError(errorMessage) {
    console.error(chalk.red(errorMessage));
    process.exit(1);
}

// https://stackoverflow.com/questions/21253019/change-a-file-using-node-js
function replaceInFileSync(
    file = defaultFile,
    stringToReplace = 'http:',
    stringTarget = 'https:',
) {
    const data = fs.readFileSync(file, 'utf-8');
    const newValue = data.replaceAll(stringToReplace, stringTarget);
    fs.writeFileSync(file, newValue, 'utf-8');
    console.log('readFileSync complete');
}

const githubOwnerRepo = argv.repo;
if (!githubOwnerRepo) {
    exitWithError('Error: You must specify the --repo argument');
}

// TODO check for gh being available

const repoPath = 'repos';
// https://cli.github.com/manual/gh_repo_clone
await $`mkdir -p ${repoPath}`;
cd(repoPath);
await $`gh repo fork ${githubOwnerRepo} --clone`;

const repoName = githubOwnerRepo.split('/')[1]; // e.g. "nodeca/js-yaml" => "js-yaml"
cd(repoName);
replaceInFileSync();

await $`git commit -a -m "TODO test"`;

// TODO maybe fork directly and clone that? https://cli.github.com/manual/gh_repo_fork
// nah, https://cli.github.com/manual/gh_pr_create autoforks

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll

// open in the browser: https://cli.github.com/manual/gh_pr_view
