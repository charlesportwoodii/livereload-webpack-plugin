# Live Reload Webpack Plugin

Integrate LiveReload with webpack for those days when hot reload just doesn't cut it.

## Installation

1. Install the package

```
yarn add --dev @charlesportwoodii/livereload-webpack-plugin
```

2. Add the plugin to your webpack configuration file

```js
const LiveReloadWebpackPlugin = require('livereload-webpack-plugin');

module.exports = [
    plugins: [
        new LiveReloadWebpackPlugin({
            files: [],
            livereload: {}
        }),
    ]
];
```

3. Add the livereload script tag to your page

```html
<script src="http://127.0.0.1:35729/livereload.js"></script>
```

## Options

This plugin supports 2 options: a array of files you want livereload to watch (`files`), and any custom livereload configuration (`livereload`). For a full list of options, view the [API Options](https://www.npmjs.com/package/livereload#api-options) supported by the LiveReload NPM module.

## Examples

Watch twig files outside of webpack source directory, with debugging & polling enabled.

```js
new LiveReloadWebpackPlugin({
    files: [
        '/path/to/views'
    ],
    livereload: {
        debug: true,
        port: 35729,
        host: '127.0.0.1',
        exts: ['twig'],
        applyCSSLive: false,
        applyImgLive: false,
        usePolling: true
    }
}),
```

# LICENSE

BSD-3 Clause: See [LICENSE](LICENSE) for more information.