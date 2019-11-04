
const gulp = require('gulp'),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
sourcemaps = require('gulp-sourcemaps'),
cleanCss = require('gulp-clean-css'),
rename = require('gulp-rename'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');

    const style = () => {
        return gulp.src('./sass/**/*.scss')
           .pipe(sourcemaps.init())
           .pipe(sass().on('error', sass.logError))
           .pipe(gulp.dest('./css'))
           .pipe(postcss([ autoprefixer({ browsers: [
            'Chrome >= 35',
            'Firefox >= 38',
            'Edge >= 12',
            'Explorer >= 10',
            'iOS >= 8',
            'Safari >= 8',
            'Android 2.3',
            'Android >= 4',
            'Opera >= 12']})]))
            .pipe(cleanCss())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./css'))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('./css'))
            .pipe(browserSync.stream());
    }; 

    const watch = () => {
        browserSync.init({
            server: {
                baseDir: './'
            }
        });
        gulp.watch('./sass/**/*.scss', style);
        gulp.watch('./*.html').on('change', browserSync.reload);
        gulp.watch('./scripts/**/*.js').on('change', browserSync.reload);
    }

exports.style = style;
exports.watch = watch;
