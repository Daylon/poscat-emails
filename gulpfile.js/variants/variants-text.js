'use strict'

const { src, dest } = require('gulp'),
	RENAME = require('gulp-rename'),
	HANDLEBARS = require('gulp-hb'),
	{ PATHS } = require('../core/core-paths'),
	{ TEMPLATES } = require('../core/core-templates')

async function variantsText() {
	let textVariants = [],
		renderTextEntry = function(_textEntry) {
			if (!_textEntry.isDark) {
				return src(
					`${PATHS.dir.variants.source}/${PATHS.dir.variants.textPrefix}*${PATHS.file.template}`
				)
					.pipe(
						HANDLEBARS()
							.partials(`${PATHS.dir.variants.partials}`)
							.data(_textEntry)
					)
					.pipe(
						RENAME({
							prefix: 'email-',
							basename: _textEntry.name,
							extname: PATHS.file.text
						})
					)
					.pipe(dest(`${PATHS.dir.variants.dist}`))
			} else {
				return null
			}
		}

	console.log(
		'\n\u001b[38;5;120;1m> TPL \u001b[0m\u001b[38;5;115m Text versions…\u001b[0m'
	)

	await TEMPLATES.data.map(renderTextEntry)
}

exports.VARIANTS_TEXT = variantsText
