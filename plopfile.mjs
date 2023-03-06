export default function (plop) {
    plop.setGenerator('web component', {
        description: 'Create a new FDS web component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [{
            type: 'addMany',
            destination: 'packages/fds-components-web/{{name}}',
            templateFiles: 'tools/plop-templates/fds-components-web/**/*',
            base: 'tools/plop-templates/fds-components-web/',
            globOptions: {dot: true}
        }]
    });
};