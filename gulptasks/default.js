'use strict'

const GULP = require( 'gulp' )
, SEQUENCE = require( 'gulp-sequence' ).use( GULP )

let defaultGulpTask = () => SEQUENCE( 'variants-text-versions', 'build', 'core-watch' )()

GULP.task(
  'default'
  , defaultGulpTask
)

GULP.start( 'default' )

module.exports = defaultGulpTask
