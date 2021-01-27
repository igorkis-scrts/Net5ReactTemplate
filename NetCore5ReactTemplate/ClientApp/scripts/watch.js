process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'
process.env.INLINE_RUNTIME_CHUNK = 'false'

const fs = require('fs-extra')
const path = require('path')
const paths = require('../config/paths')
const webpack = require('webpack')
const webpackconfig = require('../node_modules/react-scripts/config/webpack.config')
const config = webpackconfig('development', true)
const tsNameof = require("ts-nameof")

delete config.optimization

console.log("Front-end folder watcher initiated\n")

console.log("Changing webpack config\n")
config.watch = true
config.watchOptions = {
    poll: false,
    ignored: /node_modules/,
    aggregateTimeout: 1000,
};

config.output.path = paths.appBuild

config.resolve.alias = {
    ...config.resolve.alias,
    '@api': path.resolve(__dirname, "../src/api/"),
    '@app': path.resolve(__dirname, "../src/app/"),
    '@utils': path.resolve(__dirname, "../src/utils/"),
    '@models': path.resolve(__dirname, "../src/app/models/"),
    '@config': path.resolve(__dirname, "../src/config/"),
    '@shared': path.resolve(__dirname, "../src/app/shared/"),
    '@State': path.resolve(__dirname, "../src/config/redux/State")
}

config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
        {
            loader: require.resolve('ts-loader'),
            options: {
                transpileOnly: true,
                getCustomTransformers: () => ({before: [tsNameof]}),
            },
        },
    ],
})

console.log("Inititating watcher itself\n");

webpack(config).watch({}, (err, stats) => {
    if (err) {
        console.error(err)
    } else {
        // this just exists to copy the remaining thing from the public folder to build folder ( see build.js)
        copyPublicFolder();
    }
    console.error(
        stats.toString({
            chunks: false,
            colors: true,
        })
    )
})

// copy favicon.ico and robots.txt from public to build folder
function copyPublicFolder() {
    fs.copySync(paths.appPublic, paths.appBuild, {
        dereference: true,
        filter: file => file !== paths.appHtml,
    })
}
