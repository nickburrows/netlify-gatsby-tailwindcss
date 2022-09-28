module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["plugin:prettier/recommended"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
}
