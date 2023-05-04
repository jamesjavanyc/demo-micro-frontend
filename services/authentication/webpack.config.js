const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "skytravel",
    projectName: "authentication",
    webpackConfigEnv,
    argv,
    externals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
