/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        low: '0 0 4px 0 rgba(0, 0, 0, 0.15)',
        high: '0 0 10px 0 rgba(0, 0, 0, 0.15)'
      },
      colors: {
        primary: {
          purple: {
            '5': '#4B1979',
            '4': '#7126B5',
            '3': '#A06ECE',
            '2': '#D0B7E6',
            '1': '#E2D4F0'
          },
          cream: {
            '5':'#AA9B87',
            '4':'#D4C2A8',
            '3':'#FFE9CA',
            '2':'#FFF0DC',
            '1':'#FFF8ED'
          }
        },
        alert: {
          danger: '#FF0000',
          warning: '#F9CC00',
          success: '#73CA5C' 
        },
        neutral: {
          '5':'#151515',
          '4':'#3C3C3C',
          '3':'#8A8A8A',
          '2':'#D0D0D0',
          '1':'#FFFFFF',
        }
      },
    },
  },
  plugins: [],
}
