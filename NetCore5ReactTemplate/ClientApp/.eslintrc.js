module.exports = {
    ignorePatterns: [".eslintrc.js"],
    env: {
        es6: true,
        browser: true,
        amd: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        "import/resolver": {
            typescript: {},
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            }
            ,
            alias: {
                map: [
                    ['app', './src/app']
                ],
                extensions: ['.ts', '.js', '.jsx', '.json']
            }
        },
        react: {
            version: "detect",
        },
    },
    plugins: ["react", "@typescript-eslint", "react-hooks", "import", "material-ui"],
    extends: [
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "import/extensions": "off",
        "@typescript-eslint/array-type": ["error", { default: "generic" }],
        "prefer-const": [
            "error",
            {
                destructuring: "any",
                ignoreReadBeforeAssign: false,
            },
        ],
        quotes: ["error", "double"],
        "no-trailing-spaces": "error",
        "semi-style": ["error", "last"],
        "object-curly-spacing": ["error", "always"],
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "react/prop-types": [0],
        "max-len": [
            "error",
            {
                code: 144,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreTrailingComments: true,
                ignoreStrings: true,
                ignoreRegExpLiterals: true,
            },
        ],
    },
};