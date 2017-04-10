'use strict'

const GULP = require( 'gulp' )
, SEQUENCE = require( 'gulp-sequence' ).use( GULP )
, PATHS = require( './core-paths' )
, FILES_FOR_TEXT_VERSIONS = [
	`${PATHS.dir.variants.source}**/${PATHS.dir.variants.textPrefix}*${PATHS.file.template}`
]
, FILES_TO_WATCH_OUT = [
  `${PATHS.dir.styles.source}**/*+(${PATHS.file.lessStylesheets}|${PATHS.file.sassStylesheets})`
	, `!${FILES_FOR_TEXT_VERSIONS}`
  , `${PATHS.dir.variants.source}**/*${PATHS.file.template}`
]

let watchTextVersions = () => GULP.watch( FILES_FOR_TEXT_VERSIONS, [ 'variants-text-versions' ], [ 'add', 'change' ] )
, watchEmails = () => GULP.watch( FILES_TO_WATCH_OUT, [ 'build' ], [ 'change' ] ) // https://github.com/floatdrop/gulp-watch#api
, setWatchers = () => SEQUENCE( 'watch-text-versions', 'watch-emails' )()

GULP.task( 'watch-text-versions', watchTextVersions )
GULP.task( 'watch-emails', watchEmails )

GULP.task( 'core-watch', setWatchers )

module.export = setWatchers
