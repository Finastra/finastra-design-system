const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const globby = require('globby');
const READ_WRITE_OPTS = {encoding: 'utf-8'};

async function main() {
    const paths = await getPaths('../libs/web-components/*/stories/custom-element.json');
    paths.forEach(path => {
      const { attributes, slots, cssProperties } = getContent(path);
      const argTypes = mapArgTypes(attributes, slots);
      const cssprops = mapCssProps(cssProperties);
      const newFile = JSON.stringify({ argTypes, cssprops }, null, 2);
      writeFileSync(path, newFile, READ_WRITE_OPTS);
    });
}

main();

async function getPaths(paths) {
    const eatThat = join(__dirname, paths);
    return await globby(eatThat);
}

function getContent(path) {
    const wcaOutput = readFileSync(path, READ_WRITE_OPTS);
    return JSON.parse(wcaOutput).tags[0];
}

function mapArgTypes(attributes, slots) {
  let attr = {};
  let sl = {};

  if (slots) {
    sl = slots.reduce((prev, next) => {
      prev[next.name] = { table: { category: 'slot' }, description: sanitizeControl(next.description) };
      return prev;
    }, {});
  }
  if (attributes) {
    attr = attributes.reduce((prev, next) => {
      prev[next.name] = { control: sanitizeControl(next.type) };
        return prev;
    }, {});
}

  return {
    ...attr,
    ...sl
  };
}

function mapCssProps(cssProperties) {
    if (!cssProperties) return {};
    return cssProperties.reduce((prev, next) => {
        prev[sanitizeCssPropName(next.name)] = {
            ...(next.description ? {description: next.description} : {}),
            ...(next.default ? {value: sanitizeValue(next.default)} : {}),
            control: next.type || 'text'
        };
        return prev;
    }, {});
}

function sanitizeControl(control) {
    if (control === 'string') control = 'text';
    return control || 'text';
}

function sanitizeValue(value) {
    return value.replace(/^\"(.*)\"$/g, "$1");
}

function sanitizeCssPropName(name) {
    return name.replace(/^--(.*)/g, "$1");
}