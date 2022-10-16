module.exports = {
	root: true,
	env: {
		node: true,
		mocha: true,
	},
	parserOptions: {
		ecmaVersion: '2021',
		sourceType: 'module',
	},
	extends: [
		'plugin:prettier/recommended',
		'plugin:mocha/recommended',
		'plugin:chai-friendly/recommended',
	],
	globals: {
		_: 'readonly',
	},
	rules: {
		curly: ['error', 'all'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				exports: 'always-multiline',
				imports: 'always-multiline',
				objects: 'always-multiline',
				functions: 'never',
			},
		],
		'max-len': [
			'error',
			{
				code: 80,
				tabWidth: 2,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignoreComments: true,
				ignoreTrailingComments: true,
			},
		],
	},
}
