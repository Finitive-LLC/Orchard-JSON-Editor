const gulp = require('gulp');
const del = require('del');
const scss = require('../../Utilities/Lombiq.Gulp.Extensions/Tasks/scss-targets');
const copyAssets = require('../../Utilities/Lombiq.Gulp.Extensions/Tasks/copy-assets');

const assets = [
    {
        name: 'jsoneditor',
        path: './node_modules/jsoneditor/dist/**',
    },
];

gulp.task('build:styles', scss.build('./Assets/Styles/', './wwwroot/css'));
gulp.task('copy:assets', () => copyAssets(assets, './wwwroot/vendors/'));

gulp.task('default', gulp.parallel('build:styles', 'copy:assets'));


gulp.task('clean:styles', () => del('./wwwroot/css/'));
gulp.task('clean:assets', () => del('./wwwroot/vendors/'));

gulp.task('clean', gulp.parallel('clean:styles', 'clean:assets'));
