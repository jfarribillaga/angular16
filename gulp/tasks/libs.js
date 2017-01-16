import config      from '../config';
import changed     from 'gulp-changed';
import gulp        from 'gulp';
import browserSync from 'browser-sync';

gulp.task('libs', function() {

  return gulp.src(config.libs.src)
    .pipe(changed(config.libs.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.libs.dest))
    .pipe(browserSync.stream());

});
