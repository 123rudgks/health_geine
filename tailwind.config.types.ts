export const COLORS = {
  'primary-400': '#4B76F4',
  'primary-300': '#7596FA',
  'primary-200': '#A6BCFF',
  'primary-100': '#D1DDFF',
} as const;
export type KeyofColors = keyof typeof COLORS;
export const FONT_FAMILY = {
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
  noto: [
    'Noto Sans KR',
    'YuGothic',
    '游ゴシック体',
    'Yu Gothic',
    'メイリオ',
    'Meiryo',
    'ＭＳ Ｐゴシック',
    'MS PGothic',
    'sans-serif',
  ],
} as const;
