// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const prettierPlugin = require('eslint-plugin-prettier');
const unusedImportsPlugin = require('eslint-plugin-unused-imports');
const simpleImportSortPlugin = require('eslint-plugin-simple-import-sort');

module.exports = defineConfig([
    expoConfig,
    {
        ignores: ['dist/*'],
        plugins: {
            prettier: prettierPlugin,
            'unused-imports': unusedImportsPlugin,
            'simple-import-sort': simpleImportSortPlugin,
        },
        rules: {
            'prettier/prettier': 'error',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
            'simple-import-sort/imports': [
                'error',
                {
                    groups: [
                        // React & packages
                        ['^react', '^@?\\w'],
                        // “@/…” path aliases (adjust to your tsconfig)
                        ['^@/(?:components|screens|utils|hooks)(/.*|$)'],
                        // Parent imports
                        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                        // Same-folder imports
                        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                        // Assets
                        ['^.+\\.(css|scss|png|jpg|svg)$'],
                    ],
                },
            ],
            'simple-import-sort/exports': 'error',
        },
    },
]);
