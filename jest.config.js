/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
	preset: 'ts-jest',
	testEnvironment: 'node',
	transform: {},
	globals: {
		'ts-jest': {
			useESM: true,
		},
	},
	extensionsToTreatAsEsm: ['.ts'],
	modulePathIgnorePatterns: ['.*/(.dist|.static|.verdaccio|node_modules)/.*'],
	testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
};
