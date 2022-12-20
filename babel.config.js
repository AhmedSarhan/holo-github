module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "babel-plugin-styled-components",
      {
        displayName: false,
        meaninglessFileNames: ["index", "styles"],
        pure: true,
      },
    ],
  ],
};
