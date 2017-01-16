import config   from '../config';
import path     from 'path';
import gulp     from 'gulp';
import {Server} from 'karma';

gulp.task('unit', ['views'], function(cb) {

  new Server({
    configFile: path.resolve(__dirname, '../..', config.test.karma),
    singleRun: true,
    autoWatch: false,
  }, cb).start();

});

gulp.task('unit-live', ['views'], function(cb) {

  new Server({
    configFile: path.resolve(__dirname, '../..', config.test.karma),
    singleRun: false,
    autoWatch: true,
  }, cb).start();

});
