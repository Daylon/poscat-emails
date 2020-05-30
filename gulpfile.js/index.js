const { series, parallel } = require('gulp'),
	{ CORE_CLEAN } = require('./core/core-clean'),
	{ VARIANTS_PREPARE } = require('./variants/variants-prepare'),
	{ VARIANTS_BUILD } = require('./variants/variants-build'),
	{ VARIANTS_TEXT } = require('./variants/variants-text'),
	{ STYLE_COMPILE } = require('./style/style-compile'),
	{ STYLE_INJECT } = require('./style/style-inject')

exports.default = series(
	CORE_CLEAN, // OK
	VARIANTS_PREPARE, // OK
	STYLE_COMPILE, // OK
	STYLE_INJECT, // OK
	VARIANTS_BUILD, // does it do ANYTHING?
	VARIANTS_TEXT // seems ok
)

/*
https://github.com/mjmlio/mjml/blob/master/packages/mjml-cli/README.md#minify-and-beautify-the-output-html
core-watch
core-clean',
'core-watch-notification',
*/
