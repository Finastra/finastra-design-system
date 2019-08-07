import { BuilderOutput, createBuilder, BuilderContext } from '@angular-devkit/architect';
import stylelint from 'stylelint';
import formatter from 'stylelint-formatter-pretty';

import { Schema } from './schema';
import { join } from 'path';

async function themeLinter(
  options: Schema,
  context: BuilderContext,
): Promise<BuilderOutput> {
  return new Promise(async (resolve) => {
    const logger = context.logger;

    const result = await stylelint.lint({
      files: join(options.project, '/**/*.scss'),
      configFile: join(options.project, './.stylelintrc.json'),
      formatter
    });

    logger.info(result.output);
    resolve({ success: !result.errored });
  })
}

export default createBuilder(themeLinter);
