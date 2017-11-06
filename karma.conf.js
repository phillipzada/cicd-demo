// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),,
      require('@angular/cli/plugins/karma'),
      require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-spec-reporter'),
      require('karma-trx-reporter'),
      require('karma-coverage')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      {
        pattern: './src/test.ts',
        watched: false
      },
      {
        pattern: './node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css',
        included: true,
        watched: true
      },
    ],
    preprocessors: {
      './src/test.ts': ['@angular/cli']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary', 'text'],
      fixWebpackSourcePaths: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      },
      thresholds: {
        emitWarning: true, // set to `true` to not fail the test command when thresholds are not met
        global: { // thresholds for all files
          statements: 90,
          lines: 90,
          branches: 90,
          functions: 90
        },
      }
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'trx', 'coverage'],
    specReporter: {
      maxLogLines: 5, // limit number of lines logged per test
      suppressErrorSummary: true, // do not print error summary
      suppressFailed: false, // do not print information about failed tests
      suppressPassed: false, // do not print information about passed tests
      suppressSkipped: true, // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },
    trxReporter: {
      outputFile: 'test-results/unit-test-results.trx',
      shortTestName: false
    },
    coverageReporter: {
      // specify a common output directory
      dir: 'coverage',
      includeAllSources: true,
      reporters: [
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        {
          type: 'cobertura',
          subdir: '.',
          file: 'cobertura.xml'
        }
      ]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }
  });
};
