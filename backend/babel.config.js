module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true,
          node: "current",
        },
      },
    ],
    "@babel/preset-flow",
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          test: "./test",
          underscore: "lodash",
        },
      },
    ],
  ],
};
