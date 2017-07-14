'use strict'

const GULP = require('gulp'),
	EVENT_STREAM = require('event-stream'),
	SASS = require('gulp-sass'),
	LESS = require('gulp-less'),
	GROUP_MEDIA_QUERIES = require('gulp-group-css-media-queries'),
	STYLE_LINT = require('gulp-stylelint'),
	AUTOPREFIXER = require('gulp-autoprefixer'),
	CSSO = require('gulp-csso'),
	PURIFY = require('gulp-purifycss'),
	PATHS = require('../core/core-paths'),
	ON_ERROR = require('../core/core-errors')

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
},
	lintOptionsLess = Object.assign({}, lintOptionsSass, { syntax: 'less' }),
	autoprefixerOptions = {
		browsers: ['>4%', 'last 3 versions'],
		cascade: false
	}

let compileStylesheets = function() {
	let compileAllStylesheets = function() {
		let lessStream = GULP.src(
			`${PATHS.dir.styles.source}*${PATHS.file.lessStylesheets}`
		)
			.pipe(STYLE_LINT(lintOptionsLess))
			.pipe(LESS())

		let sassStream = GULP.src(
			`${PATHS.dir.styles.source}*${PATHS.file.sassStylesheets}`
		)
			.pipe(STYLE_LINT(lintOptionsSass))
			.pipe(SASS())

		return EVENT_STREAM.merge.apply(null, [lessStream, sassStream])
	}

	console.log(
		'\n\u001b[38;5;120;1m> STYLESHEET \u001b[0m\u001b[38;5;115m Compiling CSS\u001b[0m'
	)

	return compileAllStylesheets()
		.pipe(GROUP_MEDIA_QUERIES())
		.pipe(AUTOPREFIXER(autoprefixerOptions))
		.pipe(CSSO())
		.pipe(
			PURIFY([`${PATHS.dir.variants.variants}*${PATHS.file.variant}`], {
				whitelist: ['p']
			})
		)
		.pipe(GULP.dest(`${PATHS.dir.styles.dist}`))
}

GULP.task('style-compile', compileStylesheets)

module.exports = compileStylesheets
