'use strict'

let templates = function() {
	let createDarkVariant = function(_entry) {
		let _copy = Object.assign({}, _entry)
		_copy.isDark = true
		_copy.name = `${_entry.name}-dark`
		return _copy
	}
	const TEMPLATE_DATA = [
			{
				name: 'sign-up',
				theme: 'as-sign-up',
				_d: {
					isDoubleTitle: true,
					hasPrefooter: true,
					extraFooter: {
						icon: 'icon_helper-cue@3x',
						class: 'icon-help'
					}
				}
			},
			{
				name: 'lost-password',
				theme: 'as-interactive',
				_d: {
					title: 'Did you lost your password?',
					hasPrefooter: true,
					isPrefooterALink: true
				}
			},
			{
				name: 'read--in-progress',
				theme: 'as-reading',
				_d: {
					canBeReadLater: true,
					hasPlayPauseButton: true,
					hasCaret: true,
					hasExtensiveUI: true,
					hasPrefooter: true,
					isPrefooterALink: true,
					extraFooter: {
						icon: 'icon_error-end@3x',
						class: 'icon-close'
					}
				}
			},
			{
				name: 'read--pause',
				theme: 'as-warning',
				_d: {
					hasPrefooter: true,
					isPause: true,
					isPrefooterALink: true,
					extraFooter: {
						icon: 'icon_helper-cue@3x',
						class: 'icon-help'
					}
				}
			},
			{
				name: 'read--autopause',
				theme: 'as-warning',
				_d: {
					hasPrefooter: true,
					isPrefooterALink: true,
					extraFooter: {
						icon: 'icon_helper-cue@3x',
						class: 'icon-help'
					}
				}
			},
			{
				name: 'read--end',
				theme: 'as-finished',
				_d: {}
			},
			{
				name: 'read--re-engage',
				theme: 'as-interactive',
				_d: {
					hasPrefooter: true,
					extraFooter: {
						icon: 'icon_error-end@3x',
						class: 'icon-close'
					}
				}
			},
			{
				name: 'read--unsubscribe',
				theme: 'as-closed-account',
				_d: {
					hasPrefooter: true,
					extraFooter: {
						icon: 'icon_delete@3x',
						class: 'icon-delete'
					}
				}
			},
			{
				name: 'account-deletion',
				theme: 'as-closed-account',
				_d: {}
			}
		],
		TEMPLATE_DATA_DARK_VARIANTS = TEMPLATE_DATA.map(createDarkVariant)

	return {
		data: TEMPLATE_DATA.concat(TEMPLATE_DATA_DARK_VARIANTS)
	}
}

module.exports = templates()
