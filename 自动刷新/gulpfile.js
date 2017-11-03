var gulp = require('gulp'),
livereload = require('gulp-livereload');

gulp.task('watch', function() {
livereload.listen();
// Home/Tpl*.*的意思是 Home/Tpl下 任何文件夹 的 任何文件
gulp.watch('src/*.*', function(file) {
gulp.src(file.path)
.pipe(livereload());
});
});