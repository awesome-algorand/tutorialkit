import type { ConfigBase } from 'unocss';

const BASE_COLORS = {
  white: '#ffffff',
  black: '#040407',
  primary: {
    DEFAULT: '#2ba6ff',
    50: '#eef9ff',
    100: '#d8f1ff',
    200: '#bae7ff',
    300: '#8adaff',
    400: '#53c4ff',
    500: '#2ba6ff',
    600: '#1488fc',
    700: '#0d6fe8',
    800: '#1259bb',
    900: '#154e93',
    950: '#122f59',
  },
  gray: {
    DEFAULT: '#6C737F',
    25: '#fcfcfd',
    50: '#f5f6f6',
    100: '#e4e6e9',
    200: '#cdd0d4',
    300: '#aaafb6',
    400: '#7f8591',
    500: '#6c737f',
    600: '#565a64',
    700: '#494c55',
    800: '#414349',
    900: '#393b40',
    950: '#232429',
  },
};

export const theme: ConfigBase['theme'] = {
  colors: {
    ...BASE_COLORS,
    markdown: {
      table: {
        header: {
          fontWeight: '500',
          textSize: '1em',
        },
      },
      code: {
        text: BASE_COLORS.primary[700],
        background: '#f5f6f6',
      },
    },
    nav: {
      background: BASE_COLORS.white,
      textActive: BASE_COLORS.primary[700],
    },
    panelBorder: BASE_COLORS.gray[200],
    editor: {
      light: {
        background: BASE_COLORS.white,
        cursor: {
          background: BASE_COLORS.black,
          width: '2px',
        },
        activeLine: 'rgb(222 222 222 / 40%)',
        selection: '#42b4ff',
        gutter: {
          foreground: '#237893',
        },
      },
      dark: {
        // TODO
      },
    },
    callout: {
      tip: {
        border: '#bb3df5',
        bg: '#ebc5fc',
        text: '#660891',
      },
      info: {
        border: BASE_COLORS.primary.DEFAULT,
        bg: BASE_COLORS.primary[100],
        text: BASE_COLORS.primary[900],
      },
      warn: {
        border: '#f5bb3d',
        bg: '#fceac5',
        text: '#73520d',
      },
      danger: {
        border: '#ce2c31',
        bg: '#ffe2e6',
        text: '#ce2c31',
      },
    },
  },
};