export const theme = {
  canvasShadow:
    '3px 4px 5px rgba(0, 0, 0, 0.4), 0px  4px 5px rgba(0, 0, 0, 0.32)',
  canvasShadowFilter:
    'drop-shadow(rgba(0, 0, 0, 0.5) 19.6883px 18.3596px 10.3744px)',
  size: {
    xs: '480px',
    sm: '768px',
    md: '964px',
    lg: '1200px',
    xl: '1600px',
  },
  color: {
    white: '#fff',
    gray000: '#f8f9fa',
    gray100: '#f1f4f5',
    gray200: '#e9edef',
    gray300: '#dee4e6',
    gray400: '#ced7da',
    gray500: '#adb8bd',
    gray600: '#869196',
    gray700: '#495357',
    gray800: '#343d40',
    gray900: '#212729',
    black: '#000',

    primary: '#ee6f57',
    secondary: '#1f3c88',
    secondarydark: '#070d59',
    secondarybg: '#f6f5f5',

    blue: '#499edc',
    red: '#d2423c',
    yellow: '#f0af41',
    cyan: '#47b3c9',
  },
} as const;

export type ThemeType = typeof theme