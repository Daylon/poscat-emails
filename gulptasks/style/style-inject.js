'use strict'

const GULP = require('gulp'),
	SMOOSHER = require('gulp-smoosher'),
	INLINE_CSS = require('gulp-inline-css'),
	MJML_DICTIONARY = require('../core/core-mjml'),
	PATHS = require('../core/core-paths')

let injectStyleInVariants = function() {
	console.log(
		'\n\u001b[38;5;120;1m> INJECTION \u001b[0m\u001b[38;5;115m Embedding rules…\u001b[0m'
	)
	return GULP.src(`${PATHS.dir.variants.variants}*${PATHS.file.variant}`)
		.pipe(SMOOSHER())
		.pipe(
			INLINE_CSS({
				applyWidthAttributes: true,
				preserveMediaQueries: true,
				removeStyleTags: true,
				removeLinkTags: false,
				applyAttributesTo: MJML_DICTIONARY,
				skipRemoteStylesheets: true
			})
		)
		.pipe(GULP.dest(PATHS.dir.variants.variants))
}

GULP.task('style-inject', injectStyleInVariants)

module.exports = injectStyleInVariants
