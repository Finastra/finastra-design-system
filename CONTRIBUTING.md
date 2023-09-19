# Contributing to Finastra Design System

Contribution to Finastra Design System is based on a community support model. This means you’re welcome not only to submit and discuss ideas but also deliver new features and bug fixes. If you’re willing to contribute, please have a look at the below guidelines.

  - [ Asking Questions](#-asking-questions)
  - [ Issues and Bugs](#-issues-and-bugs)
  - [ Feature Requests](#-feature-requests)
  - [ Submission Guidelines](#-submission-guidelines)

## <a name="questions"></a> Asking Questions

Should you have any questions or concerns, just submit a new GitHub Discussion. Before doing so, review the already answered topics to minimize duplicates.

## <a name="issues"></a> Issues and Bugs

If you discover a bug along your way, start by filling a GitHub Issue. Before submitting it, please consider the following steps:

- Check you are using the latest version of the repository
- Make sure the bug is not already covered in the list of open issues
- Reproduce the issue in a live editor like [StackBlitz](https://stackblitz.com/) or [CodePen](https://codepen.io/)
- Take screenshots if it's a UI issue
- Provide the informations requested in the [bug report template](https://github.com/finastra/finastra-design-system/issues/new?template=bug_report.md)

## <a name="features"></a> Feature Requests

Have you experienced frustration when trying to achieve a design using the theme? Have you identified components that could help other developers?
Open a GitHub [feature request](https://github.com/finastra/finastra-design-system/issues/new?template=feature_request.md)

## <a name="submit"></a> Submission Guidelines

All code submissions require review, this is done through GitHub Pull Requests. Before creating a new pull request please make sure there is no related ongoing work by searching the [GitHub issues](https://github.com/finastra/finastra-design-system/issues) and [Github PRs](https://github.com/finastra/finastra-design-system/pulls) as well. If you find something similar, join the discussion and consider contributing to it.

- Fork the repository by clicking the Fork button in the top right corner.
- Go to your repository and clone your fork

```sh
> git clone git@github.com:[your_github_username]/finastra-design-system.git
```

- Add upstream remote for later updates

```sh
> git remote add upstream git@github.com:finastra/finastra-design-system.git
```

- Create a feature or bugfix branch according to your needs

```sh
> git checkout -b bugfix/meaningful-name
```

- Install dependencies

```sh
> npm install
```

- In case you are adding a new feature as a component, use our generator:

```sh
> npm run generate:component
```

- Write your code
- Test your code, run linter

```sh
> npm run format
> npm run lint
> npm run stylelint
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

- In GitHub send a pull request to main

That's it, thank you for your contribution!
