const core = require('@actions/core');
const fs = require('fs');
const { context } = require('@actions/github');

async function run() {
  try {
    if (!process.env.NPM_TOKEN) {
      throw `Env variable NPM_TOKEN not defined!`;
    }

    const { payload } = context;
    const message = payload.commits.map(commit => commit.message).join('. ');

    core.exportVariable('COMMIT_MESSAGE', message);

    const currentBranch = process.env.GITHUB_REF.split('/')
      .slice(2)
      .join('');

    core.exportVariable('CURRENT_BRANCH', currentBranch);

    console.log('comit message', message);

    const contents = `@adaptabletools:registry=https://registry.adaptabletools.com
//registry.adaptabletools.com/:_authToken=${process.env.NPM_TOKEN}
package-lock=false`;

    fs.writeFile(
      '.npmrc',

      contents,
      error => {
        if (error) {
          core.setFailed(error.message);
        }
      }
    );
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
