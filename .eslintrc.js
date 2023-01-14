module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint", "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "no-case-declarations": "off",
        "no-constant-condition": "off",
        "@typescript-eslint/ban-ts-comment": "off"
    }
}
