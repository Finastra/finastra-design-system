const semver = require('semver');
const keywords = ['major', 'minor', 'patch'];

module.exports = function(version, rootPackageVersion) {
  if (keywords.indexOf(version) > -1) {
    return semver.inc(rootPackageVersion, version);
  } else {
    if (semver.valid(version)) {
      return version;
    } else {
      console.log('Version is not using semantic versioning');
      console.log('Concatenating it with existing version');
      return `${rootPackageVersion}-${version}`;
    }
  }
};
