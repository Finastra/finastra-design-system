const fs = require("fs");
const path = require("path");

function updateFile(version, byUser) {
  const now = new Date();

  fs.appendFileSync(
    path.join(__dirname, "..", ".release_wc.txt"),
    `- [${now.toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })}] Request release v${version} by ${byUser} \r\n`
  );
}

if (require.main === module) {
  const version = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "lerna.json"))
  ).version;
  var actor = process.argv.slice(2);
  updateFile(version, actor);
  console.log(`::set-output name=release-version::${version}`);
}
