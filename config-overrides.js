module.exports = function override(config, env) {
  config.module.rules[2].oneOf[1].options.plugins.push([
    "babel-plugin-zent",
    {
      libraryName: "zent",
      noModuleRewrite: false,
      automaticStyleImport: true,
      useRawStyle: false
    }
  ]);
  if (env === "production") {
    config.output.publicPath = "/json-form/build";
  }
  return config;
};
