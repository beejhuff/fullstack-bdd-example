module.exports = {
  dev: {
    framework: 'mocha',
    // List of files to attach
    src: [
      'node_modules/chai/chai.js',
      'node_modules/chai-as-promised/**/*.js',
      'node_modules/sinon/pkg/**/*.js',
      'node_modules/sinon-chai/lib/*.js',
      'test/globals.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/restangular/dist/restangular.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'public/js/application.js',
      'public/js/models/catalogue.js',
      'test/**/*Spec.js'
    ],
    // Options that will be passed to Testem
    options: {
      parallel: 8,
      reporter: 'tap',
      launch_in_ci: ['PhantomJS'],
      launch_in_dev: ['Chrome Canary']
    }
  }
};
