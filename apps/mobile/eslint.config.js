/**
 * @type {import("eslint").FlatConfig[]}
 */
module.exports = [
    // 1) ignore build output & deps
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'eslint.config.js',
            'metro.config.js',
            'babel.config.js',
            'app.json',
            'app.config.js',
            'tsconfig.json',
            'jest.config.js',
            'tailwind.config.js',
        ],
    },

    // 2) apply to all JS/TS/JSX/TSX files
    {
        files: ['**/*.{js,jsx,ts,tsx}'],

        // --- language parser & options ---
        languageOptions: {
            parser: require('@typescript-eslint/parser'),
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                ecmaFeatures: { jsx: true },
            },
        },

        // --- plugins ---
        plugins: {
            '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
            react: require('eslint-plugin-react'),
            'react-hooks': require('eslint-plugin-react-hooks'),
            'react-native': require('eslint-plugin-react-native'),
            import: require('eslint-plugin-import'),
            'unused-imports': require('eslint-plugin-unused-imports'),
            'simple-import-sort': require('eslint-plugin-simple-import-sort'),
            prettier: require('eslint-plugin-prettier'),
        },

        // --- shared settings ---
        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                typescript: { project: './tsconfig.json' },
            },
        },

        // --- rules ---
        rules: {
            // Prettier
            'prettier/prettier': 'error',

            // Unused imports & vars
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
            '@typescript-eslint/no-unused-vars': 'off',

            // Import sorting
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
            'import/order': 'off',

            // React & React Native tweaks
            'react/prop-types': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-native/no-inline-styles': 'warn',
            'react-native/no-color-literals': 'warn',
        },
    },
];
