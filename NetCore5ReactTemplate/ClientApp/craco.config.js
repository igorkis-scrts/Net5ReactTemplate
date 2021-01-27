const path = require('path');
const tsNameof = require("ts-nameof");

module.exports = {
    webpack: {
        alias: {
            ...this.alias,
            '@api': path.resolve(__dirname, "src/api/"),
            '@app': path.resolve(__dirname, "src/app/"),
            '@utils': path.resolve(__dirname, "src/utils/"),
            '@models': path.resolve(__dirname, "src/app/models/"),
            '@config': path.resolve(__dirname, "src/config/"),
            '@shared': path.resolve(__dirname, "src/app/shared/"),
            '@State': path.resolve(__dirname, "src/config/redux/State")
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
                                    getCustomTransformers: () => ({before: [tsNameof]}),
                                },
                            },
                        ],
                    },
                ],
            },
        },
    }
}