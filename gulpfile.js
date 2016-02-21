var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var mocha = require('mocha');

var buildDir = './build/';
var sourceFiles = './src/**/*.ts';
var testFiles = './build/tests/**/*.spec.ts';

gulp.task('lint', function() {
  return gulp
    .src(sourceFiles)
    .pipe(tslint())
    .pipe(tslint.report('verbose'))
});

gulp.task('compile', ['lint'], function() {

  var tsProject = ts.createProject('tsconfig.json');

  var tsResult = tsProject.src()
    .pipe(ts(tsProject));

  return tsResult.js.pipe(gulp.dest(buildDir));

});

gulp.task('test', ['compile'], function() {

  var xunitOptions = {
    ui: 'exports',
    reporter: 'mocha-jenkins-reporter',
    reporterOptions: {
      'junit_report_name': 'Tests',
      'junit_report_path': buildDir + 'test-output.xml',
      'junit_report_stack': 1
    }
  };

  return gulp
    .src(testFiles)
    .pipe(mocha(xunitOptions));

});

gulp.task('default', ['compile', 'test']);
