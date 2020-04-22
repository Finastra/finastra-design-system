import { BuilderOutput, createBuilder, BuilderContext } from '@angular-devkit/architect';
import { renderSync } from 'node-sass';
import { readFile, writeFile, mkdirp, copy, remove } from 'fs-extra';
import { join, relative } from 'path';
import { sync as globby } from 'globby';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import importer from 'node-sass-tilde-importer';
import { Schema } from './schema';

async function themeBuilder(options: Schema, context: BuilderContext): Promise<BuilderOutput> {
  const logger = context.logger;
  const printInfo = !options.silent;

  try {
    const src = options.inputPath;
    const dest = options.outputPath;
    context.reportProgress(0, 1);

    const data = await readFile(join(src, 'package.json'));
    const pkg = JSON.parse(data.toString());

    // cleanup
    await remove(dest);
    await mkdirp(dest);

    options.assets = [...options.assets, `${src}/LICENSE`, `${src}/README.md`];

    if (!pkg.sass) {
      if (printInfo)
        logger.error('Cannot find theme entry file. Please define the sass entry point in your package.json file');
      return { success: false };
    }

    const from = join(dest, pkg.sass);
    const to = join(dest, pkg.css || pkg.sass.replace('.scss', '.css'));
    logger.info(`Compiling "${from}" to "${to}"...`);

    const result = renderSync({
      file: join(src, pkg.sass),
      outFile: to,
      outputStyle: options.outputStyle || 'expanded',
      sourceMap: true,
      sourceMapRoot: dest,
      sourceMapEmbed: true,
      importer
    });

    const finalCss = await postcss([autoprefixer]).process(result.css, {
      from,
      to,
      map: {
        inline: false
      }
    });

    await writeFile(to, finalCss.css);
    if (options.sourceMap === true) {
      await writeFile(to.replace('.css', '.map'), finalCss.map);
    }

    await writeFile(join(dest, 'package.json'), JSON.stringify(pkg, null, 4));

    for (const asset of globby(options.assets)) {
      await copy(join(src, relative(src, asset)), join(dest, relative(src, asset)), { recursive: true });
    }
    context.reportProgress(1, 1);

    return { success: true };
  } catch (err) {
    if (printInfo) logger.error(err.message, err);
    return { success: false };
  }
}

export default createBuilder(themeBuilder);
