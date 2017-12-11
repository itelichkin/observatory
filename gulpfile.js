const gulp = require('gulp')
const gutil = require('gulp-util')
const shell = require('gulp-shell')

gulp.task('help', () => {
  console.log(`
    *** DEVELOPMENT ***
    gulp build - Build client application for production
    gulp build:stats - Build stats for https://webpack.github.io/analyse/
    gulp start - Start local web server in production mode at http://localhost:3001
    gulp dev - Start client development at http://localhost:4200
    gulp ng:ver - Show environment versions
    gulp e2e - Run E2E test ( see https://github.com/angular/angular-cli/blob/master/docs/documentation/e2e.md )
  `)
})

gulp.task('start', shell.task([`set PORT=3001 & set NODE_ENV=production & node-dev server.js`]));

// https://github.com/angular/angular-cli/blob/master/docs/documentation/serve.md
gulp.task('dev', shell.task(['ng serve --aot --host 0.0.0.0 --port 4200 --poll 3000 --verbose --environment=local']));

gulp.task('ng:lint', shell.task(['npm run-script lint']));
gulp.task('ng:ver', shell.task(['ng --version']));

gulp.task('build', shell.task(['ng build --prod']));

gulp.task('build:cdl', shell.task(['ng build --prod --base-href /CDL/ --aot']));

gulp.task('build:stats', shell.task(['ng build --prod --stats-json']));

gulp.task('build:demo', shell.task(['ng build --prod --env=demo']));

gulp.task('e2e', shell.task(['ng e2e']));

gulp.task('default', ['help']);