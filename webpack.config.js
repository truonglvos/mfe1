const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");
const dependencies = packageJson.dependencies;

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
    },
    alias: {
      // ...sharedMappings.getAliases(),
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: "remoteEntry.js",
      library: { type: "module" },
      exposes: {
        "./TModule": "./src/app/app.module.ts",
      },
      shared: {
        "@angular/core": {
          eager: false,
          singleton: true,
          requiredVersion: dependencies["@angular/core"],
        },
        "@angular/common": {
          eager: false,
          singleton: true,
          requiredVersion: dependencies["@angular/common"],
        },
        "@angular/router": {
          eager: false,
          singleton: true,
          requiredVersion: dependencies["@angular/router"],
        },
        "@angular/forms": {
          eager: false,
          singleton: true,
          requiredVersion: dependencies["@angular/forms"],
        },
        "@angular/common/http": {
          eager: false,
          singleton: true,
          requiredVersion: dependencies["@angular/common"],
        },
        "@ngx-translate/core": {
          eager: false,
          singleton: true,
          requiredVersion: dependencies["@ngx-translate/core"],
        },
        // ...sharedMappings.getDescriptors(),
      },
    }),
    // sharedMappings.getPlugin(),
  ],
};
