# replacify

> String replace for browserify

This was made to match an old version of [`grunt-replace`](https://github.com/outaTiME/grunt-replace) to be able to take advantage of watchify.
Currently, the API is very limited to match the base use case of `grunt-replace`.

## Getting Started

```shell
  npm install replacify --save
```

## Configuration

`replacify` takes a configuration object

``js
  
  {
    variables: {
      assets: "http://assets.example.com/"
    }

  }

``

This will replace all instance of `@@assets` in the code by `http://assets.example.com/`.

## Todos

- Testing
- Options for prefix

## Release History
* 2015-01-30   0.1.0   First release