typescript-nodejs-atom
======================

Introduction
------------

This is simply a skeleton project - you can copy it to bootstrap a NodeJS TypeScript project.

I've found that the documentation for [tsconfig.json](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json),
[tslint.json](http://palantir.github.io/tslint/usage/tslint-json/),
how to build TypeScript with gulp, how to integrate with Atom, and how to test, is spread over multiple sources.
So this project aims to bring everything together in one place.

I recommend installing the following Atom package:

* [atom-typescript](https://atom.io/packages/atom-typescript)

This skeleton project shows the following:

* How to set up a gulp build process to lint, compile, and run tests;
* How both project- and global- references are handled in TypeScript;
* How to set up Atom so that the compile-on-save feature matches the gulp compile;
* How to run unit tests and generate xUnit output suitable for a Jenkins task;
* How linting may be configured.


Getting started
---------------

1. Copy the project
2. Edit `package.json` to include your details
3. Run `npm install` to install dependencies
4. Run `gulp` to lint, compile, and test.
5. Run `node build/src/index.js` to run the very simple example application.
6. Start writing tests and code!
