/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
    printWidth: 80,
    tabWidth: 4,
    trailingComma: "all",
    semi: true,
    singleQuote: false,
    jsxSingleQuote: false,
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "always",
    plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
