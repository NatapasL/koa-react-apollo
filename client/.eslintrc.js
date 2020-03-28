module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb"],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "modules": true
    }
  },
  "env": {
    "browser": true
  },
  "rules": {
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "semi": [2, "never"],
    "quotes": [2, "single"],
    "max-len": [2, 120, 2],
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "comma-dangle": [2, "always-multiline", { "functions": "never" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
  }
}
