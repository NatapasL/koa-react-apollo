module.exports = {
  "extends": ["airbnb"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "semi": [2, "never"],
    "quotes": [2, "single"],
    "max-len": [2, 120, 2],
    "@typescript-eslint/no-unused-vars": 2,
    "import/no-extraneous-dependencies": [2, {"devDependencies": true}]
  }
}
