module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            },
        },
        react: {
            version: "18.2",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb",
        "airbnb-typescript",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["tsconfig.json"],
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["state"] }],
    },
};
