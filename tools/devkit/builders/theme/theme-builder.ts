import { BuilderOutput, createBuilder, BuilderContext } from '@angular-devkit/architect';
import { renderSync } from 'node-sass';
import { readFile, writeFile, mkdirp, copy, remove } from 'fs-extra';
import { join, relative } from 'path';
import { sync as globby } from 'globby';
import importer from 'node-sass-tilde-importer';

import { Schema } from './schema';

async function themeBuilder(options: Schema, context: BuilderContext): Promise<BuilderOutput> {
  const logger = context.logger;
  const printInfo = !options.silent;

  context.reportStatus(`Compiling "${options.inputPath}" to "${options.outputPath}"...`);
  if (printInfo) logger.info(`Compiling "${options.inputPath}" to "${options.outputPath}"...`);

  try {
    const dest = join(process.cwd(), options.outputPath);
    const src = join(process.cwd(), options.inputPath);
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

    const result = renderSync({
      file: join(src, pkg.sass),
      outFile: join(dest, pkg.sass.replace('.scss', '.css')),
      outputStyle: options.outputStyle || 'expanded',
      sourceMap: true,
      sourceMapRoot: src,
      importer
    });

    await writeFile(join(dest, pkg.css), result.css.toString());
    if (options.sourceMap === true) {
      await writeFile(join(dest, pkg.sass.replace('.scss', '.map')), result.map.toString());
    }

    await writeFile(join(dest, 'package.json'), JSON.stringify(pkg, null, 4));

    for (const asset of globby(options.assets)) {
      const from = join(src, relative(src, asset));
      const to = join(dest, relative(src, asset));

      await copy(from, to, { recursive: true });
    }
    context.reportProgress(1, 1);

    return { success: true };
  } catch (err) {
    if (printInfo) logger.error(err.message, err);
    return { success: false };
  }
}

export default createBuilder(themeBuilder);
