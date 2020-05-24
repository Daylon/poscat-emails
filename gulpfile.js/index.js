const { series, parallel } = require('gulp'),
	{ CORE_CLEAN } = require('./core/core-clean'),
	{ VARIANTS_PREPARE } = require('./variants/variants-prepare'),
	{ VARIANTS_BUILD } = require('./variants/variants-build'),
	{ VARIANTS_TEXT } = require('./variants/variants-text'),
	{ STYLE_COMPILE } = require('./style/style-compile'),
	{ STYLE_INJECT } = require('./style/style-inject')

exports.default = series(
	CORE_CLEAN,
	VARIANTS_PREPARE,
	STYLE_COMPILE,
	STYLE_INJECT,
	VARIANTS_BUILD,
	VARIANTS_TEXT
)

/*
core-watch
core-clean',
'core-watch-notification',
*/
