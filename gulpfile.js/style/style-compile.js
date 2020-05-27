'use strict'

const { src, dest } = require('gulp'),
	SASS = require('gulp-sass'),
	STYLE_LINT = require('gulp-stylelint'),
	AUTOPREFIXER = require('gulp-autoprefixer'),
	CSSO = require('gulp-csso'),
	{ PATHS } = require('../core/core-paths')

let lintOptionsSass = {
	failAfterError: false,
	reportOutputDir: '/.reports/lint',
	reporters: [
		{
			formatter: 'string',
			console: true
		}
	],
	syntax: 'scss'
}

let compileStylesheets = function() {
	console.log(
		'\n\u001b[38;5;120;1m> STYLESHEET \u001b[0m\u001b[38;5;115m Compiling CSS\u001b[0m'
	)

	return src(`${PATHS.dir.styles.source}*${PATHS.file.sassStylesheets}`)
		.pipe(STYLE_LINT(lintOptionsSass))
		.pipe(SASS())
		.pipe(AUTOPREFIXER())
		.pipe(CSSO())
		.pipe(dest(`${PATHS.dir.styles.dist}`))
}

exports.STYLE_COMPILE = compileStylesheets
