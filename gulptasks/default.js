'use strict'

const GULP = require( 'gulp' )
, SEQUENCE = require( 'gulp-sequence' ).use( GULP )

let defaultGulpTask = () => SEQUENCE( 'build', 'core-watch' )()

GULP.task(
  'default'
  , defaultGulpTask
)

GULP.start( 'default' )

module.exports = defaultGulpTask
