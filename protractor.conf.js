//https://codeburst.io/bdd-with-angular-and-cucumberjs-8cb4c33c2dff
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // require feature files
    specs: [
      './src/specs/*.feature' // accepts a glob
    ],
    cucumberOpts: {
      // require step definitions
      require: [
        './src/steps/*.steps.ts' // accepts a glob
      ]
    }
  };