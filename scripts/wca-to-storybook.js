const {readFileSync, writeFileSync} = require('fs');
const { join } = require('path');
const globby = require('globby');
const READ_WRITE_OPTS = {encoding: 'utf-8'};

async function main() {
    const paths = await getPaths('../libs/web-components/*/stories/custom-element.json');
    paths.forEach(path => {
        const {attributes, cssProperties} = getContent(path);
        const argTypes = mapArgTypes(attributes);
        const cssprops = mapCssProps(cssProperties);
        const newFile = JSON.stringify({argTypes, cssprops}, null, 2);
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

function mapArgTypes(attributes) {
    if (!attributes) return {};
    return attributes.reduce((prev, next) => {
        prev[next.name] = {control: sanitizeControl(next.type)}
        return prev;
    }, {});
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