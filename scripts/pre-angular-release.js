const { exec } = require('child_process');
const chalk = require('chalk');

const forbiddenBranches = ['master'];

const main = async () => {
  const branchName = await getGitBranch();
  if (forbiddenBranches.includes(branchName)) {
    console.error(`✋ Cannot launch release on branch ${chalk.blue(branchName)}. Please create a release branch beforehand !`);
    console.log(`
    git checkout -b release/angular-${chalk.red('VERSION')}
    `);
    process.exit(1);
  }
};

main();

function getGitBranch() {
  return new Promise((resolve, reject) => {
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout, stderr) => {
      if (err) reject(`getGitBranch Error: ${err}`);
      else if (typeof stdout === 'string') resolve(stdout.trim());
    });
  });
}
