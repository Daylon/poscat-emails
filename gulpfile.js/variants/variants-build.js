'use strict'

const { src, dest } = require('gulp'),
	MJML_ENGINE = require('mjml'),
	MJML = require('gulp-mjml'),
	HTML_MIN = require('gulp-html-minifier-terser'),
	{ PATHS } = require('../core/core-paths')

let buildVariant = function() {
	console.log(
		'\n\u001b[38;5;120;1m> MJML \u001b[0m\u001b[38;5;115m Building variant…\u001b[0m'
	)
	return src(`${PATHS.dir.variants.variants}/*${PATHS.file.variant}`)
		.pipe(MJML(MJML_ENGINE, { validationLevel: 'strict' }))
		.pipe(
			HTML_MIN({
				maxLineLength: 960,
				collapseWhitespace: true,
				collapseInlineTagWhitespace: false
			})
		)
		.pipe(dest(PATHS.dir.variants.dist))
}

exports.VARIANTS_BUILD = buildVariant
