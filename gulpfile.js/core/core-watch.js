'use strict'

const { parallel, watch } = require('gulp'),
	PATHS = require('./core-paths'),
	FILES_FOR_TEXT_VERSIONS = [
		`${PATHS.dir.variants.source}**/${PATHS.dir.variants.textPrefix}*${PATHS.file.template}`
	],
	FILES_TO_WATCH_OUT = [
		`${PATHS.dir.styles.source}**/*+(${PATHS.file.lessStylesheets}|${PATHS.file.sassStylesheets})`,
		`!${FILES_FOR_TEXT_VERSIONS}`,
		`${PATHS.dir.variants.source}**/*${PATHS.file.template}`
	]

exports.WATCH_TEXT_VERSIONS = watch(
	FILES_FOR_TEXT_VERSIONS,
	{ events: ['add', 'change'] },
	['variants-text']
)
exports.WATCH_EMAILS = watch(FILES_TO_WATCH_OUT, { events: ['change'] }, [
	'build'
])
//setWatchers = () => SEQUENCE('watch-text-versions', 'watch-emails')()
