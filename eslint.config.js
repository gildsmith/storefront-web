import jsPlugin from '@eslint/js'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'
import vueParser from 'vue-eslint-parser'

export default [
    // Common configuration for all supported types of file: JS, TS, Vue.
    {
        files: ['**/*.js', '**/*.ts', '**/*.vue'],
        languageOptions: {
            globals: {
                ...globals.browser,
                axios: 'readonly',
            },
        },
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'quotes': ['warn', 'single'],
            'semi': ['warn', 'never'],
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
        },
    },
    // Configuration specifically for JS
    {
        files: ['**/*.js'],
        languageOptions: {
        },
        plugins: {
            'js': jsPlugin,
        },
    },
    // Configuration specifically for TS
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
        },
        plugins: {
            'ts': tsPlugin,
        },
    },
    // Configuration specifically for Vue
    {
        files: ['**/*.vue'],
        languageOptions: {
            parser: vueParser,
        },
        plugins: {
            'vue': vuePlugin
        },
    },
]