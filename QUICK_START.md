# typescript-react-library-package-template

> Template to kickstart creating a React module using TypeScript

Fork from [typescript-npm-package-template](https://github.com/kainstar/typescript-npm-package-template).

## Features

- React 18 Supports
- Typescript
- css-in-js
- Jest
- ESLint
- prettier
- commitlint
- semantic-release
- docs
- vite

## Changes

- Newer dependencies version
- ESLint version and rules
- remove prepare-commit-msg hooks, use [commitlint](https://github.com/conventional-changelog/commitlint) instead
- Configuration File Location
- Windows and linux compatible
- Private customization

## Getting started

### Create your repository

**Click the "Use this template" button.**

Alternatively, use [tiged](https://github.com/tiged/tiged) downloading repo to your local computer.

```
degit kainstar/typescript-react-library-package-template my-new-project
```

### Initialize your repository

Replace `REPO_NAME` in the script below with your own details to personalize your new package:

Linux or MacOS:

```bash
NPM_PKG_NAME="pkg-name"
REPO_NAME="repo-name"

sed -i "s/@kainstar\/typescript-react-library-package-template|my-package-name/$NPM_PKG_NAME/g; s/typescript-react-library-package-template/$REPO_NAME/g" package.json README.md
```

Windows:

```powershell
$NPM_PKG_NAME="pkg-name"
$REPO_NAME="repo-name"

foreach ($File in @("package.json", "README.md")) {
  (Get-Content $File) | %{$_ -replace "@kainstar/typescript-react-library-package-template|my-package-name", $NPM_PKG_NAME} | %{$_ -replace "typescript-react-library-package-template", $REPO_NAME} | Set-Content $File
}
```

### Add NPM Token

Add your npm token to your GitHub repository secrets as `NPM_TOKEN`.

### Add Codecov integration

Enable the Codecov GitHub App [here](https://github.com/apps/codecov).

**Remove everything from here and above**

---
