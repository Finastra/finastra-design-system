import { BuilderContext, BuilderOutput, createBuilder } from '@angular-devkit/architect';
import { join } from 'path';
import stylelint from 'stylelint';
import formatter from 'stylelint-formatter-pretty';
import { Schema } from './schema';

async function themeLinter(options: Schema, context: BuilderContext): Promise<BuilderOutput> {
  const logger = context.logger;
  const projectName = (context.target && context.target.project) || '<???>';
  const printInfo = !options.silent;

  context.reportStatus(`Linting ${JSON.stringify(projectName)}...`);
  if (printInfo) context.logger.info(`Linting ${JSON.stringify(projectName)}...`);

  context.reportProgress(0, 1);
  const result = await stylelint.lint({
    globbyOptions: { expandDirectories: true, cwd: join(process.cwd(), options.project) },
    files: ['**/*.scss'],
    fix: options.fix,
    formatter
  });
  context.reportProgress(1, 1);

  if (result.output) {
    logger.info(result.output);
  }

  if (!result.errored && printInfo) {
    logger.info('All files pass linting.');
  } else if (printInfo) {
    logger.error('Lint errors found in the listed files.');
  }

  return { success: !result.errored };
}

export default createBuilder(themeLinter);
