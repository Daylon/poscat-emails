'use strict'

const GULP = require( 'gulp' )
, EVENT_STREAM = require( 'event-stream' )
, IGNORE = require( 'gulp-ignore' )
, RENAME = require( 'gulp-rename' )
, HANDLEBARS = require( 'gulp-compile-handlebars' )
, PATHS = require( '../core/core-paths' )
, TEMPLATES = require( '../core/core-templates' )

let variantsTextVersions = function(){

	let textVariants = []
	, tplOptions = {
		ignorePartials: true
		, batch: [ `${PATHS.dir.variants.partials}` ]
		, helpers: {}
	}
	, renderTextEntry = function( _textEntry ){
		return GULP.src( `${PATHS.dir.variants.source}**/${PATHS.dir.variants.textPrefix}*${PATHS.file.template}` )
		.pipe( IGNORE( () => !_textEntry.isDark ) )
		.pipe( HANDLEBARS(
			_textEntry
			, tplOptions
		))
		.pipe( RENAME({
			prefix : 'email-'
			, basename : _textEntry.name
			, extname : PATHS.file.text
		}) )
		.pipe( GULP.dest( `${PATHS.dir.variants.dist}` ) )
	}

	console.log( '\n\u001b[38;5;120;1m> TPL \u001b[0m\u001b[38;5;115m Text versions…\u001b[0m')

	textVariants = TEMPLATES.data.map( renderTextEntry )
	return EVENT_STREAM.merge.apply( null, textVariants )
}

GULP.task( 'variants-text-versions', variantsTextVersions )

module.exports = variantsTextVersions
