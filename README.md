# Webpack Conundrum

## Goals

* Ability to replace JSON file without recompiling
* Copy JSON file as part of build

## Desired directory structure

  dist/
    config.json
    index.html
    main.bundle.js

## Requirements

* `require()` statement must be transformed to new URL
* Result of `require()` statement must be result of `JSON.parse()` of the text of the JSON file
* No loaders should be used in the `require()` statement
