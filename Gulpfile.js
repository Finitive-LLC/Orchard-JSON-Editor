const gulp = require('gulp');
const scss = require('../../Utilities/Lombiq.Gulp.Extensions/Tasks/scss-targets');
const copyAssets = require('../../Utilities/Lombiq.Gulp.Extensions/Tasks/copy-assets');

const assets = [
    {
        name: 'jsoneditor',
        path: './node_modules/jsoneditor/dist/**',
    },
];

gulp.task('build:styles', scss.build('./Assets/Styles/', './wwwroot/css'));
gulp.task('copy:vendor-assets', () => copyAssets(assets, './wwwroot/vendors/'));

gulp.task('default', gulp.parallel('build:styles', 'copy:vendor-assets'));
