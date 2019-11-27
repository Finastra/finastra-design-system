# Contributing to Finastra Design System

Want to file a bug, contribute some code, or improve documentation? Excellent! 🤗❤️
Here are some guidelines to make the most out of your help.

- [Asking Questions](#questions)
- [Issues and Bugs](#issues)
- [Feature Requests](#features)
- [Submission Guidelines](#submit)

## <a name="questions"></a> Asking Questions

At the moment we only have a Microsoft Teams' channel dedicated to questions. If you're not part of the organization, you can still send your questions by mail to [UXG - Questions](206630c8.finastra.com@emea.teams.ms).

## <a name="issues"></a> Issues and Bugs

If you discover a bug along your way, you can help by filling a Github issue.
Before submitting it, please consider the following steps:

- Check you are using the latest version
- Make sure the bug is not already covered in the list of open issues
- Reproduce the issue in a live editor like [StackBlitz](https://stackblitz.com/) or [CodePen](https://codepen.io/)
- Take screenshots if it's a UI issue
- Provide the informations requested in the [bug report template](https://github.com/fusionfabric/finastra-design-system/issues/new?template=bug_report.md)

Then the process of reviewing, planning and hopefully fixing your issue will start.

## <a name="features"></a> Feature Requests

You experienced frustation when trying to achieve some design using the theme?
You identified some components that could help other developpers?
Open a GitHub [feature request](https://github.com/fusionfabric/finastra-design-system/issues/new?template=feature_request.md)

You will be requested to fill a form, describing clearly and concisely your problem. We will discuss your suggestion to understand the need and optimize the solution.

## <a name="submit"></a> Submission Guidelines

Before creating a new pull request please make sure there is no related ongoing work by searching the [GitHub issues](https://github.com/fusionfabric/finastra-design-system/issues) and [Github PRs](https://github.com/fusionfabric/finastra-design-system/pulls) as well.
If you find something similar, join the discussion and consider contributing to it.
If nothing match your search, then create a new issue accordingly ([Issues and Bugs](#issues), [Feature Requests](#features)).
When your issue is validated and you are assigned to it, you can start with those simple steps:

- Fork the repository by cliking the Fork button in the top right corner.
- Go to your repository and clone your fork

```sh
> git clone git@github.com:[your_github_username]/finastra-design-system.git
```

- Add upstream remote for later updates

```sh
> git remote add upstream git@github.com:fusionfabric/finastra-design-system.git
```

- Create a feature or bugfix branch according to your needs

```sh
> git checkout -b bugfix/meaningful-name
```

- Install dependencies and build:devkit

```sh
> npm install
> npm run build:devkit
```

- Write your code
- Test your code, run linter

```sh
> npm run format:check
> npm run affected:test
> npm run affected:e2e
```

- fix the presented errors / problems if any
- Commit your code, add a commit message following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/) guidelines

```sh
> git commit -m <type>[scope]: <description>
```

- Push your branch to GitHub

```sh
> git push -u origin bugfix/meaningful-name
```

- In GitHub send a pull request to master

That's it, thank you for your contribution!
