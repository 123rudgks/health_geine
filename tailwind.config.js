/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        hiragino: [
          'ヒラギノ角ゴシック',
          'Hiragino Sans',
          'ヒラギノ角ゴ ProN',
          'Hiragino Kaku Gothic ProN',
          'メイリオ',
          'Meiryo',
          'ＭＳ Ｐゴシック',
          'MS PGothic',
          'sans-serif',
        ],
      },
      colors: {
        MainColor: '#4B76F4',
        SubColor1: '#A6BCFF',
        SubColor2: '#7596FA',
      },
    },
  },
  plugins: [],
};
