'use strict'

const PATHS = {
	dir: {
		base: './',
		variants: {
			source: './__templates/',
			partials: './__templates/partials/**/*.hbs',
			variants: './__templates/variants/',
			dist: '../views/emailing/',
			textPrefix: 'text-'
		},
		styles: {
			source: './__styles/',
			dist: './styles/'
		}
	},
	file: {
		template: '.+(tpl|hbs)',
		variant: '.mjml',
		lessStylesheets: '.less',
		sassStylesheets: '.scss',
		stylesheet: '.css',
		production: '.html',
		text: '.txt'
	}
}

exports.PATHS = PATHS
