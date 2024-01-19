import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            screens: {},
        },
    },
    darkMode: 'class',
    plugins: [
        nextui({
            themes: {
                light: {
                    colors: {
                        background: '#f6f6f6', // test
                        foreground: '#111111', // test
                        primary: {
                            foreground: '#f6f6f6',
                            DEFAULT: '#f83b3b', // test
                        },
                        focus: '#000000',
                        default: '#888',
                    },
                },
                dark: {
                    colors: {
                        background: '#111111',
                        foreground: '#f6f6f6',
                        primary: {
                            foreground: '#111',
                            DEFAULT: '#525ceb',
                        },
                    },
                },
            },
            addCommonColors: true,
            defaultTheme: 'light',
        }),
    ],
};
export default config;
