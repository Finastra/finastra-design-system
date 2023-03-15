import { readFile } from 'fs/promises';

const packageJson = JSON.parse(
  await readFile(
    new URL('./package.json', import.meta.url)
  )
);

export default function (plop) {
    plop.setGenerator('wc', {
        description: 'Create a new FDS web component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [{
            type: 'addMany',
            destination: 'packages/fds-components-web/{{dashCase name}}',
            templateFiles: 'tools/plop-templates/create-wc/**/*',
            base: 'tools/plop-templates/create-wc/',
            data: { 'version': packageJson.version},
            globOptions: {dot: true}
        }, {
            type: 'append',
            path: 'packages/fds-components-web/tsconfig.json',
            pattern: '"references": [',
            template: '{"path": "{{dashCase name}}"},',
        }]
    });
};