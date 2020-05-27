'use strict'

const { src, dest } = require('gulp'),
	RENAME = require('gulp-rename'),
	HANDLEBARS = require('gulp-hb'),
	{ PATHS } = require('../core/core-paths'),
	{ TEMPLATES } = require('../core/core-templates')

const FILES_TO_PARSE = [
	`!${PATHS.dir.variants.source}/${PATHS.dir.variants.textPrefix}*${PATHS.file.template}`,
	`${PATHS.dir.variants.source}/*${PATHS.file.template}`
]

async function prepareVariants() {
	let variants,
		wrapInIEConditional = options =>
			options.fn ? `<!--[if mso]>${options.fn()}<![endif]-->` : options,
		tplOptions = {
			ignorePartials: true,
			batch: [`${PATHS.dir.variants.partials}`],
			helpers: { wrapInIEConditional }
		},
		renderEntry = function(_entry) {
			console.log(`\trendering ${_entry.name}…`)

			return src(FILES_TO_PARSE)
				.pipe(HANDLEBARS(_entry, tplOptions))
				.pipe(
					RENAME({
						prefix: 'email-',
						basename: _entry.name,
						extname: PATHS.file.variant
					})
				)
				.pipe(dest(`${PATHS.dir.variants.variants}`))
		}

	console.log(
		'\n\u001b[38;5;120;1m> TPL \u001b[0m\u001b[38;5;115m Preparing all variants…\u001b[0m'
	)

	await TEMPLATES.data.map(renderEntry)
}

exports.VARIANTS_PREPARE = prepareVariants
