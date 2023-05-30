module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  plugins: ["react", "prettier"],
  rules: {
    "ban-ts-comment": 0,
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-param-reassign": 0,
    "react/require-default-props": 0,
    "linebreak-style": ["error", "windows"],
    "import/prefer-default-export": "off",
  },
};
