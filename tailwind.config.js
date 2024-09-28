const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
    /*
     * We allow all files to be discovered by default, but you can limit it
     * to .vue files to speed up the execution, considering you use vue alone.
     */
    content: [
        '../*/src/**/*.{js,vue}',
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['"Figtree"', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                base: ['16px', '150%'],
            },
            boxShadow: {
                'skeumorphism': 'rgba(16, 24, 40, 0.025) 0 -1px 0 0 inset',
                'xs': 'rgba(16, 24, 40, 0.05) 0px 1px 2px 0px',
            },
            colors: {

                /*
                 * This is our brand colour! malachite-600
                 * is our exact logomark colour.
                 */
                malachite: {
                    '50': '#eefff3',
                    '100': '#d7ffe5',
                    '200': '#b2ffce',
                    '300': '#76ffa9',
                    '400': '#33f57c',
                    '500': '#09de59',
                    '600': '#00c84c',
                    '700': '#04913b',
                    '800': '#0a7132',
                    '900': '#0a5d2c',
                    '950': '#003416',
                },

                /*
                 * This colour group is taken from Untitled UI,
                 * specifically the "gray cool" group.
                 *
                 * https://www.untitledui.com/components/color-styles
                 */
                flint: {
                    '25': '#FCFCFD',
                    '50': '#F9F9FB',
                    '100': '#EFF1F5',
                    '200': '#DCDFEA',
                    '300': '#B9C0D4',
                    '400': '#7D89B0',
                    '500': '#5D6B98',
                    '600': '#4A5578',
                    '700': '#404968',
                    '800': '#30374F',
                    '900': '#111322',
                    '950': '#0E101B',
                },
            },
        },
    },
    plugins: [],
}

