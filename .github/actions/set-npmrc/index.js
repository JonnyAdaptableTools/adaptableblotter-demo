const core = require('@actions/core');
const fs = require('fs');

async function run() {
  try {
    if (!process.env.NPM_TOKEN) {
      throw `Env variable NPM_TOKEN not defined!`;
    }
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
