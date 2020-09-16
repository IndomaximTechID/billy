# Contributing to billy

First off, thanks for taking the time to contribute!
We appreciate contributions in forms of:

- issues
- help answering questions in [issues](https://github.com/IndomaximTechID/billy/issues)
- fixing bugs via [pull-requests](https://github.com/IndomaximTechID/billy/pulls)
- promoting billy
- sharing ideas

#### Table Of Contents

1. [Commit Message Guidelines](#1)
   1.1 [Commit Message Format](#1.1)
   1.2 [Revert](#1.2)
   1.3 [Type](#1.3)
2. [Developing](#2)
3. [Build](#3)
4. [Test](#4)
   4.1 [Commit Message Format](#4.1)
   4.2 [Revert](#4.2)
5. [Code Scafolding](#5)
6. [Further help](#6)

# <a name="1"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

### <a name="1.1"></a> Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/IndomaximTechID/billy/commits/master))

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest rxjs

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### <a name="1.2"></a> Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### <a name="1.3"></a> Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests

# <a name="2"></a> Developing

#### This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.1, with additional [NGXS](https://www.ngxs.io/) version 3.3.2, and also [Claity Design](https://clarity.design/) version 4.0.1.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# <a name="3"></a> Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

# <a name="4"></a> Test

### <a name="4.1"></a> Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### <a name="4.2"></a> Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# <a name="5"></a> Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

# <a name="6"></a> Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md), [NGXS Docs](https://www.ngxs.io/), and also, see [Clarity Docs](https://clarity.design/documentation)
