const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const globby = require('globby');
const READ_WRITE_OPTS = { encoding: 'utf-8' };

async function main() {
  const paths = await getPaths('../libs/web-components/*/src/*.ts');
  paths.forEach((path) => {
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
  const tsPaths = await globby(eatThat);
  const filteredPaths = tsPaths.filter((path) => !path.includes('.css.ts'));
  const rootFolders = filteredPaths.map((path) => path.split('/').slice(0, -2).join('/'));
  const uniqueFolders = [...new Set(rootFolders)];
  const customElementsPaths = uniqueFolders.map((path) => join(path, 'stories/custom-element.json'));
  return customElementsPaths;
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
      prev[next.name] = {
        table: { category: 'slot' },
        ...(next.description ? { description: next.description } : {})
      };
      return prev;
    }, {});
  }
  if (attributes) {
    attr = attributes.reduce((prev, next) => {
      prev[next.name] = {
        control: sanitizeControl(next.type)
      };
      if (next.hasOwnProperty('description')) {
        prev[next.name].description = next.description;
      }
      if (next.hasOwnProperty('default')) {
        prev[next.name].table = {
          defaultValue: { summary: sanitizeDefaultValue(next.default) }
        };
        prev[next.name].defaultValue = sanitizeDefaultValue(next.default);
      } else {
        prev[next.name].type = {
          required: true
        };
      }
      if (next.type && next.type.includes('|')) {
        prev[next.name].options = next.type.split('|').map(sanitizeValue);
      }
      return prev;
    }, {});
  }

  return { ...attr, ...sl };
}

function mapCssProps(cssProperties) {
  if (!cssProperties) return {};
  return cssProperties.reduce((prev, next) => {
    prev[sanitizeCssPropName(next.name)] = {
      ...(next.description ? { description: next.description } : {}),
      ...(next.default ? { value: sanitizeValue(next.default) } : {}),
      control: next.type || 'text'
    };
    return prev;
  }, {});
}

function sanitizeControl(control) {
  if (control && control.includes('|')) {
    const nbOptions = control.split('|').length;
    if (nbOptions < 4) {
      return {
        type: 'radio'
      };
    } else {
      return {
        type: 'select'
      };
    }
  } else {
    if (control === 'string') control = 'text';
    return control || 'text';
  }
}

function sanitizeValue(value) {
  return value.replace(/^\"(.*)\"$/g, '$1');
}

function sanitizeCssPropName(name) {
  return name.replace(/^--(.*)/g, '$1');
}

function sanitizeDefaultValue(defaultValue) {
  if (defaultValue === 'false') {
    defaultValue = false;
  } else {
    defaultValue = defaultValue.replace(/^\"(.*)\"$/g, '$1');
  }
  return defaultValue;
}
