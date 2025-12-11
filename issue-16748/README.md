# Reproduction for oxc issue #16748

https://github.com/oxc-project/oxc/issues/16748

## Issue

The user want to be able to type check generated files, while skipping linting on those same files.

## Solution

When code is being generated, add the comment `/* oxlint-disable */` at the top of the file. This will disable linting for the file, while still allowing type checking to occur.
