import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      font:{
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        }
      },
      colors: {
        green: {
          50: '#f0fdf4',
        },
        blue: {
          50: '#eff6ff',
        },
      },
    },
  },
  plugins: [],
}

export default config