const gulp = require('gulp');
const ghpages = require('gulp-gh-pages');

gulp.task('ghPages', ()=> {
    return gulp.src('./src/dist/**/*')
    .pipe(ghpages())
})