module.exports = {
	type: 'react-component',
	npm: {
		esModules: true,
		umd: {
			global: 'player',
			externals: {
				react: 'React'
			}
		}
	},
	devServer: {
		disableHostCheck: true
	}
}
