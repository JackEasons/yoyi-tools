#!/usr/bin/env node

'use strict';

require('colorful').colorful();
const gulp = require('gulp');
const program = require('commander');

program.on('--help', () => {
    console.log('  Usage:'.to.bold.blue.color);
    console.log();
    console.log('    $', 'yoyi-tools run start|server'.to.magenta.color, 'start server');
    console.log('    $', 'yoyi-tools run build'.to.magenta.color, 'publish component');
    console.log('    $', 'yoyi-tools run server'.to.magenta.color, 'start server');
    console.log('    $', 'yoyi-tools run esLint'.to.magenta.color, 'run eslint');
    console.log();
});

program.parse(process.argv);

const task = program.args[0];

if (!task) {
    program.help();
} else {
    // console.log('yoyi-tools run', task);

    require('../gulpfile');

    gulp.start(task);
}