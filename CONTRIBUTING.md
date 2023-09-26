# Contributing to Finastra Design System

Contribution to Finastra Design System is now based on a community support model. This means everybody's welcome to:
- submit and discuss ideas and questions
- deliver new features and bug fixes 
- review and comment on pull requests created by other community members
The Finastra FFDC UX Services team will no longer develop features or fix bugs raised by other teams. However, we'll review and comment on newly committed code to ensure good practices and coding standards are in place. Therefore, if you're willing to contribute, please have a look at the below guidelines.

  - [ Asking Questions](#-asking-questions)
  - [ Issues and Bugs](#-issues-and-bugs)
  - [ Feature Requests](#-feature-requests)
  - [ Submission Guidelines](#-submission-guidelines)

## <a name="questions"></a> Asking Questions

Should you have any questions or concerns, just submit a new GitHub [Discussion](https://github.com/Finastra/finastra-design-system/discussions) to allow the community to give their feedback. If you feel like answering others' questions, that's more than welcome! Please bear in mind that before submitting a new discussion, you should review the already answered topics to minimize duplicates. 

## <a name="issues"></a> Issues and Bugs

If you discover a bug along your way, start by filing a GitHub Issue. This way you ensure transparency to other community members and make it easier to track the progress of the fix. Before submitting a bug, please consider the following steps:

- Check you are using the latest version of the repository
- Make sure the bug is not already covered in the list of open issues
- Reproduce the issue in a live editor like [StackBlitz](https://stackblitz.com/) or [CodePen](https://codepen.io/)
- Take screenshots if it's a UI issue
- Provide the information requested in the [bug report template](https://github.com/finastra/finastra-design-system/issues/new?template=bug_report.md)
- Once you have the fix ready, create a PR so that the community members can provide their feedback

## <a name="features"></a> Feature Requests

Have you encountered a feature gap in the Finastra Design System? Do you have ideas on how to make the components more functional and user friendly?
Open a GitHub [feature request](https://github.com/finastra/finastra-design-system/issues/new?template=feature_request.md) for tracking purposes and follow Submission Guidelines below to enrich the repository with your code.

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

- fix the presented errors or problems if any
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
