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
    "linebreak-style": [
      "error",
      process.platform === "win32" ? "windows" : "unix",
    ],
    "ban-ts-comment": 0,
    "react/react-in-jsx-scope": 0,
    "react/function-component-definition": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-param-reassign": 0,
    "react/require-default-props": 0,
  },
};
