'use strict'

const { src, dest } = require('gulp'),
	//IGNORE = require('gulp-ignore'),
	RENAME = require('gulp-rename'),
	HANDLEBARS = require('gulp-hb'),
	PATHS = require('../core/core-paths'),
	{ TEMPLATES } = require('../core/core-templates')

async function variantsText() {
	let textVariants = [],
		tplOptions = {
			ignorePartials: true,
			batch: [`${PATHS.dir.variants.partials}`],
			helpers: {}
		},
		renderTextEntry = function(_textEntry) {
			return src(
				`${PATHS.dir.variants.source}/${PATHS.dir.variants.textPrefix}*${PATHS.file.template}`
			)
				.pipe(IGNORE(() => _textEntry.isDark))
				.pipe(HANDLEBARS(_textEntry, tplOptions))
				.pipe(
					RENAME({
						prefix: 'email-',
						basename: _textEntry.name,
						extname: PATHS.file.text
					})
				)
				.pipe(dest(`${PATHS.dir.variants.dist}`))
		}

	console.log(
		'\n\u001b[38;5;120;1m> TPL \u001b[0m\u001b[38;5;115m Text versions…\u001b[0m'
	)

	await TEMPLATES.data.map(renderTextEntry)
	/*EVENT_STREAM.merge
		.apply(null, textVariants)
		.pipe(dest(`${PATHS.dir.variants.dist}`))*/
}

exports.VARIANTS_TEXT = variantsText
