module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",

        "plugin:vue/vue3-recommended",
        // "plugin:@typescript-eslint/eslint-plugin",
        // "plugin:@vue/cli-plugin-eslint",
        // "plugin:@vue/eslint-config-typescript",
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    overrides: [],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: [
        "vue",
        // "@vue/eslint-config-typescript",
        // "@typescript-eslint/eslint-plugin",
        // "@vue/cli-plugin-eslint",
        "prettier",
        "@typescript-eslint",
    ],
    rules: {
        "prettier/prettier": [
            "off",
            {
                tabWidth: 4,
            },
        ],
        "vue/multi-word-component-names":[
            "off"
        ]
    },
};
