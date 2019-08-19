module.exports = {
    preset: 'ts-jest',
    moduleDirectories: ['node_modules', 'utils'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    verbose: true,
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
        },
    },
};
