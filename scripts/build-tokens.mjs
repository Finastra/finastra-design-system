import globby from 'globby';
import StyleDictionary from 'style-dictionary';

const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

StyleDictionary.registerFormat({
  name: "css/fds-variables",
  formatter({ dictionary, file, options }) {
    const selector = options.selector ? options.selector : `:root`;
    const { outputReferences } = options;
    const regex = /--\w+-/gi;
    return (
      fileHeader({ file }) +
      `${selector} {\n` +
      formattedVariables({
        format: "css",
        dictionary,
        outputReferences,
      }).replace(regex, "--fds-") +
      `\n}\n`
    );
  },
});

StyleDictionary.registerFormat({
  name: "scss/fds-variables",
  formatter({ dictionary, file, options }) {
    const { outputReferences } = options;
    const regex = /\$\w+-/gi;
    return (
      fileHeader({ file, commentStyle: "short" }) +
      `$tokens: (\n` +
      formattedVariables({ format: "sass", dictionary, outputReferences })
        .replace(regex, "")
        .replaceAll(";", ",") +
      `\n)\n`
    );
  },
});

StyleDictionary.registerTransform({
  name: "color/gradient/css",
  transitive: true,
  type: "value",
  matcher: function (token) {
    const isColor = token.attributes?.category === "color";
    const isArray = Array.isArray(token.original.value);
    return isColor && isArray;
  },
  transformer: function (token) {
    return `linear-gradient(${token.original.value.toString()})`;
  },
});

const themes = [
  {
    filename: "light",
    source: ["../../packages/fds-tokens/color/light.json"],
  },
  {
    filename: "dark",
    source: ["../../packages/fds-tokens/color/dark.json"],
  },
];

const getStyleDictionaryConfig = (
  filename,
  source,
  include
) => ({
  source, // build the special formats
  include,
  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "size/px",
        "color/css",
        "color/gradient/css",
      ],
      buildPath: "dist/css/",
      files: [
        {
          destination: `${filename}.css`,
          format: "css/fds-variables",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    scss: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "size/px",
        "color/css",
        "color/gradient/css",
      ],
      buildPath: "dist/scss/",
      files: [
        {
          destination: `${filename}.scss`,
          format: "scss/fds-variables",
        },
      ],
    },
  },
});

// Building themes
for (const { filename, source } of themes) {
  StyleDictionary.extend(
    getStyleDictionaryConfig(filename, source, undefined)
  ).buildAllPlatforms();
}

// Building sizes
const sizeFiles = await globby("../../packages/fds-tokens/size/*");
for (const file of sizeFiles) {
  StyleDictionary.extend(
    getStyleDictionaryConfig("spacing", [file], undefined)
  ).buildAllPlatforms();
}

// Building typography
const typoFiles = await globby("../../packages/fds-tokens/typography/*");
for (const file of typoFiles) {
  StyleDictionary.extend(
    getStyleDictionaryConfig("typography", [file], undefined)
  ).buildAllPlatforms();
}
