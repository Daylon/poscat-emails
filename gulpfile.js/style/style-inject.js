'use strict'

const { src, dest } = require('gulp'),
	SMOOSHER = require('gulp-smoosher'),
	INLINE_CSS = require('gulp-inline-css'),
	THROUGH2 = require('through2'),
	{ JSDOM } = require('jsdom'),
	MJML_DICTIONARY = require('../core/core-mjml'),
	{ PATHS } = require('../core/core-paths')

const MJ_TAG_PREFIX = /^mj-/i

let removeOuterTags = html => {
	html = html.replace('<html><head></head><body>', '')
	html = html.replace('</body></html>', '')
	return html
}

let removeStyleProp = (file, _, cb) => {
	//const DOM = new JSDOM(file.contents),
	const DOM = new JSDOM(file.contents),
		//const DOM = JSDOM.fragment(file.contents),
		HTML_ELEMENT = DOM.window.document.defaultView.HTMLElement
	let tags = DOM.window.document.querySelectorAll('*[style]'),
		element = null
	for (let tag in tags) {
		element = tags[tag]
		if (element instanceof HTML_ELEMENT) {
			if (MJ_TAG_PREFIX.test(element.tagName) === true) {
				// class attribute won't make it in MJML,
				// we need to make to compliant by switching it to css-class
				element.setAttribute('css-class', element.getAttribute('class'))
				element.removeAttribute('class')
			}
			// removing illegal style attribute
			element.removeAttribute('style')
		}
	}
	file.contents = Buffer.from(
		removeOuterTags(DOM.window.document.documentElement.outerHTML)
	)
	//file.contents = Buffer.from(DOM.firstChild.outerHTML)
	cb(null, file)
}

let injectStyleInVariants = function() {
	console.log(
		'\n\u001b[38;5;120;1m> INJECTION \u001b[0m\u001b[38;5;115m Embedding rules…\u001b[0m'
	)
	return src(`${PATHS.dir.variants.variants}*${PATHS.file.variant}`)
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
		.pipe(THROUGH2.obj(removeStyleProp))
		.pipe(dest(PATHS.dir.variants.variants))
}

exports.STYLE_INJECT = injectStyleInVariants
