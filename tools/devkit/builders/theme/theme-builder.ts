import { BuilderOutput, createBuilder, BuilderContext } from '@angular-devkit/architect';
import { renderSync, Importer } from 'sass';
import { writeFile, ensureFileSync, mkdirp, copy, remove, write } from 'fs-extra';
import { join, relative } from 'path';
import { sync as globby } from 'globby';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import { Schema } from './schema';
import importer from 'node-sass-tilde-importer';

async function themeBuilder(options: Schema, context: BuilderContext): Promise<BuilderOutput> {
  const logger = context.logger;
  const printInfo = !options.silent;

  try {
    const src = options.inputPath;
    const dest = options.outputPath;
    context.reportProgress(0, 1);

    // cleanup
    await remove(dest);
    await mkdirp(dest);

    // compile prebuilt
    const prebuiltThemes = globby(join(src, 'prebuilt-theme', '*.scss'));
    for (const theme of prebuiltThemes) {
      const outFile = theme.replace(join(src, 'prebuilt-theme'), dest).replace('.scss', '.css');
      logger.info(`Compiling "${theme}" to "${outFile}"...`);

      const result = renderSync({
        file: theme,
        outFile: outFile,
        outputStyle: options.outputStyle || 'expanded',
        sourceMap: true,
        sourceMapRoot: dest,
        sourceMapEmbed: true,
        importer: importer as Importer
      });
      const finalCss = await postcss([autoprefixer]).process(result.css, {
        from: theme,
        to: outFile,
        map: {
          inline: false
        }
      });

      ensureFileSync(outFile);
      await writeFile(outFile, finalCss.css);
      if (options.sourceMap === true) {
        await writeFile(outFile.replace('.css', '.map'), finalCss.map.toString());
      }
    }

    context.reportProgress(1, 1);
    return { success: true };
  } catch (err) {
    if (printInfo) logger.error(err.message, err);
    return { success: false };
  }
}

export default createBuilder(themeBuilder);
