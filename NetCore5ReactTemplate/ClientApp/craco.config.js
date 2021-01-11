const path = require('path');
const tsNameof = require("ts-nameof");

module.exports = {
    webpack: {
        alias: {
            '@app': path.resolve(__dirname, "src/app/"),
        },
        configure: {
            module: {
                rules: [
                    {
                        test: /\.(ts|tsx)$/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: require.resolve('ts-loader'),
                                options: {
                                    transpileOnly: true,
                                    getCustomTransformers: () => ({ before: [tsNameof] }),
                                },
                            },
                        ],
                    },
                ],
            },
        },
    }
}