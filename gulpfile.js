const gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('css', function() {
    return gulp.src('./index.scss')
        .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
    gulp.watch(['./*.scss'], ['css']);
});

gulp.task('default', ['css', 'watch']);