var gulp = require('gulp');

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('hello', function() {
  console.log('hola vida');
});


gulp.task('sass', function() {
  return gulp.src('styles/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('styles'))
})

gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', ['sass']); 
  // Other watchers
})