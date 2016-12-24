import config from '../config';
import gulp   from 'gulp';
import watch from 'gulp-watch';

gulp.task('watch', ['browserSync'], function() {

  global.isWatching = true;

  // Scripts are automatically watched and rebundled by Watchify inside Browserify task
  
  gulp.watch(config.styles.src,  ['styles']);
  gulp.watch(config.images.src,  ['images']);
  gulp.watch(config.fonts.src,   ['fonts']);
  gulp.watch(config.views.watch, ['views']);
  watch(config.scripts.src).pipe(gulp.watch(config.scripts.src, ['eslint']));

});