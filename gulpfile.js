var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('hello', async function() {
  console.log('Hello Vatsal');
});

// compile scss into css
function style(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  });
  gulp.watch('app/scss/**/*.scss', style);
  gulp.watch('app/*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// // Start browserSync server
// gulp.task('browserSync', function() {
//   browserSync({
//     server: {
//       baseDir: 'app'
//     }
//   })
// })

// gulp.task('sass', async function() {
//   return gulp.src('app/scss/main.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('app/css'))
//     .pipe(browserSync.stream());
// });

// // Watchers
// gulp.task('watch', function() {
//   gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
//   gulp.watch('app/*.html').on('change', browserSync.reload);
//   gulp.watch('app/js/**/*.js', browserSync.reload);
// })

// // Optimizing CSS and JavaScript 
// gulp.task('useref', function() {

//   return gulp.src('app/*.html')
//     .pipe(useref())
//     .pipe(gulpIf('*.js', uglify()))
//     .pipe(gulpIf('*.css', cssnano()))
//     .pipe(gulp.dest('dist'));
// });

// // Optimizing Images 
// gulp.task('images', function() {
//   return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
//     .pipe(cache(imagemin({
//       interlaced: true,
//     })))
//     .pipe(gulp.dest('dist/images'))
// });

// // Fonts
// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//   .pipe(gulp.dest('dist/fonts'))
// })

// gulp.task('clean:dist', async function() {
//   return del.sync('dist');
// })

// // Combining task
// gulp.task('main', gulp.series('useref', 'images' , 'fonts', function (done) {
//   done();
// }));
