const fs = require('fs');

module.exports = function(packagePath, version, scope) {
  let pkg = require(packagePath);

  // If package contains scope then bump it up as well
  if (pkg.name.startsWith(scope)) {
    pkg.version = version;
  }

  // Check if package contains dependencies section and bump it
  if (pkg.dependencies) {
    bumpUpDependencies(pkg.dependencies, version, scope);
  }

  // Check if package contains devDependencies section and bump it
  if (pkg.devDependencies) {
    bumpUpDependencies(pkg.devDependencies, version, scope);
  }

  fs.writeFile(packagePath, JSON.stringify(pkg, null, 2), err => {
    if (err) {
      console.log(err);
    }
  });
};

function bumpUpDependencies(dependencyObject, version, scope) {
  for (var dependency in dependencyObject) {
    if (
      dependencyObject.hasOwnProperty(dependency) &&
      dependency.startsWith(scope) &&
      !dependencyObject[dependency].startsWith('file')
    ) {
      dependencyObject[dependency] = version;
    }
  }
}
