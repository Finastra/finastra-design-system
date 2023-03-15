/**
 * Update all dependencies for web components (Material, Lit)
 */

import { execFileSync } from 'child_process';
import * as fs from 'fs';
import * as glob from 'glob';
import * as path from 'path';

const packagesDir = path.resolve(__dirname, '..', '..', 'libs', 'web-components');

interface PackageJson {
  name: string;
  dependencies?: { [mdcwPkg: string]: string };
  devDependencies?: { [mdcwPkg: string]: string };
}

interface PackageVersions {
  mdc: string;
  mwc: string;
  lit: string;
}

function mapPackageVersion(packageName: string, versions: PackageVersions): string {
  if (packageName.startsWith('@material/mwc-')) {
    return versions.mwc;
  }

  if (packageName.startsWith('@material/')) {
    return versions.mdc;
  }

  // Use ^2.0.0
  // if (packageName === 'lit') {
  //   return versions.lit;
  // }

  return '';
}

function main() {
  const latestVersions: PackageVersions = {
    mdc: getPkgVersion('@material/base@latest'),
    mwc: getPkgVersion('@material/mwc-base@latest'),
    lit: getPkgVersion('lit@latest')
  };
  console.log(`Found latest MDC Web version: ${latestVersions.mdc}\n`);
  console.log(`Found latest MWC Web version: ${latestVersions.mwc}\n`);
  console.log(`Found latest Lit version: ${latestVersions.lit}\n`);

  const packageJsonPaths = glob.sync(path.join('*', 'package.json'), { cwd: packagesDir });
  let anyChanged = false;
  for (const relPath of packageJsonPaths) {
    const absPath = path.join(packagesDir, relPath);
    const pj = JSON.parse(fs.readFileSync(absPath, 'utf8')) as PackageJson;
    if (!pj.dependencies && !pj.devDependencies) {
      continue;
    }
    console.log(`Checking ${pj.name}`);
    let changed = false;

    const updateDependencies = (dependencies: Record<string, string>) => {
      for (const [pkg, oldVersion] of Object.entries(dependencies)) {
        const newVersion = mapPackageVersion(pkg, latestVersions);
        if (newVersion) {
          if (oldVersion !== newVersion.substring(1)) {
            dependencies[pkg] = newVersion.substring(1);
            console.log(`\tUpdating ${pkg} from ${oldVersion} to ${newVersion}`);
            changed = true;
            anyChanged = true;
          }
        }
      }
    };

    if (pj.dependencies) {
      updateDependencies(pj.dependencies);
    }
    if (pj.devDependencies) {
      updateDependencies(pj.devDependencies);
    }
    if (changed) {
      console.log(`\tWriting new package.json`);
      fs.writeFileSync(absPath, JSON.stringify(pj, null, 2) + '\n', 'utf8');
    }
  }
  if (anyChanged) {
    // Set an output value for consumption by a GitHub Action.
    // https://help.github.com/en/articles/development-tools-for-github-actions#set-an-output-parameter-set-output
    console.log(`::set-output name=new-mdc-version::${latestVersions.mdc.substring(1)}`);
    console.log(`::set-output name=new-mwc-version::${latestVersions.mwc.substring(1)}`);
    console.log(`::set-output name=new-lit-version::${latestVersions.lit.substring(1)}`);
    console.log(`\nRemember to run npm install!`);
  }
}

function getPkgVersion(packageName: string): string {
  const packageVersion =
    '=' +
    execFileSync('npm', ['info', packageName, 'version'], {
      encoding: 'utf8'
    }).trim();

  return packageVersion;
}

main();
