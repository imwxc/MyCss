module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/eslint-plugin",
        "plugin:@vue/cli-plugin-eslint",
        "plugin:@vue/eslint-config-typescript",
        'plugin:prettier/recommended'
    ],
    "overrides": [
    ],
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@vue/eslint-config-typescript",
        "@typescript-eslint/eslint-plugin",
        "@vue/cli-plugin-eslint",
        "pritter"
    ],
    "rules": {
    }
}
