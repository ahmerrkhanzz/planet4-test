//here we initialize the node packages to our variables so that we can use them insidde the gulp file

// here "require" search for "gulp" package in "node_modules" and assign all its content to variable "gulp"
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var inject = require('gulp-inject');
var es = require('event-stream');
var series = require('stream-series');
var wiredep = require('wiredep').stream;
var jslint = require('gulp-jslint');


gulp.task('demo', function() {
  console.log('Ahmer Demo Console');
});

gulp.task('sass', function() {
  return gulp.src('app/assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});



gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
});


// injecting custom css an js files

gulp.task('index', function() {
  // concate vendor (bower files) scripts
  // var bowerStream = gulp.src(['bower_components/**/*.js', 'bower_components/angular ui-router/release/*.js', '!bower_components/**/*.min.js', '!bower_components/**/index.js', '!bower_components/bootstrap', '!bower_components/jquery'], { read: false })
  //   .pipe(gulp.dest('bower_components'));

  var appSream = gulp.src(['app/**/*.js'], { read: false })
    .pipe(gulp.dest('./app'));

  // var bowerStream = gulp.src(['bower_components/angular/**/*.js', 'bower_components/angular-ui-router/**/*.js', '!bower_components/**/*.min.js'], { read: false })
  // .pipe(gulp.dest('bower_components'));

  var bowerStylesStream = gulp.src(['bower_components/bootstrap/**/*.css', '!bower_components/**/*.min.css'], { read: false })
    .pipe(gulp.dest('bower_components/bootstrap'));

  var appStyleSream = gulp.src('app/assets/css/**/*.css', { read: false })
    .pipe(gulp.dest('app/assets/css'));

  return gulp.src('./index.html')
    .pipe(inject(series(appSream)))
    .pipe(gulp.dest('./'))
    .pipe(inject(series(bowerStylesStream, appStyleSream)))
    .pipe(gulp.dest('./'));

  // return gulp.src('./index.html')
  //   .pipe(inject(
  //     gulp.src('app/**/*.js', { read: false }), { relative: true }))
  //   .pipe(gulp.dest('./'))
  //   .pipe(inject(series(bowerStylesStream, appStyleSream)))
  //   .pipe(gulp.dest('./'))
});

// injecting bower dependenciies
gulp.task('bower', function() {
  gulp.src('./index.html')
    .pipe(wiredep({
      optional: 'configuration',
      goes: 'here'
    }))
    .pipe(gulp.dest('./'));
});

// gulp task for jslint
gulp.task('test', function() {
  return gulp.src(['app/**/*.js'])
    .pipe(jslint())
    .pipe(jslint.reporter('default', errorsOnly))
    .pipe(jslint.reporter('stylish', options));
});

gulp.task('watch', ['browserSync', 'sass', 'bower', 'index'], function() {
  gulp.watch('app/assets/sass/**/*.scss', ['sass']);
  gulp.watch('**/*.html', browserSync.reload);
  gulp.watch('app/**/*.js', browserSync.reload);
});
