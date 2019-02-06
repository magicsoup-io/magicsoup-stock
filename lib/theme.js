const fontSizes = [
  10, 12, 14, 18, 22, 30, 44, 60,
]
const space = [
  0, 4, 8, 16, 32, 64, 128, 256,
]

export default {
  ...fontSizes,
  ...space,
  Container: {
    maxWidth: 1200,
  },
  breakpoints: ['40em', '52em', '64em'],
  colors: {
    red: '#cb2431',
    primary: 'purple',
    lightgray: '#f6f6ff',
  },
  fonts: {
    sans: 'Arial, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  headings: {
    hero: {
      fontSize: fontSizes[7],
    },
    h1: {
      fontSize: fontSizes[6],
    },
    h2: {
      fontSize: fontSizes[5],
    },
  },
}
