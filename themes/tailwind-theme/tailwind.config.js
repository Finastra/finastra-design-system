module.exports = {
  theme: {
    fontFamily: {
      body: ['Roboto', 'roboto', 'Helvetica Neue', 'sans-serif'],
      headline: ['Futura EF', 'futura-pt', 'Futura', 'Hind', 'Verdana', 'Arial Black', 'sans-serif']
    },
    fontSize: {
      'display-1': ['72px', '108px'],
      'display-2': ['60px', '90px'],
      'display-3': ['48px', '72px'],
      'display-4': ['44px', '66px'],
      'display-5': ['28px', '42px'],
      'display-6': ['20px', '30px'],
      h1: ['60px', '72px'],
      h2: ['48px', '57px'],
      h3: ['32px', '38px'],
      h4: ['24px', '28px'],
      h5: ['18px', '21px'],
      h6: ['14px', '16px'],
      'subtitle-1': ['16px', '24px'],
      'subtitle-2': ['14px', '21px'],
      'subtitle-3': ['12px', '18px'],
      'body-1': ['16px', '24px'],
      'body-2': ['14px', '21px'],
      'body-3': ['12px', '18px'],
      'button-1': ['16px', '42px'],
      'button-2': ['14px', '36px'],
      'button-3': ['12px', '30px'],
      caption: ['12px', '18px'],
      overline: ['10px', '16px'],
      legend: ['10px', '15px']
    },
    colors: {
      app: '#fafafa',
      'on-background': '#414141',
      primary: '#694ed6',
      'on-primary': '#ffffff',
      secondary: '#c137a2',
      'on-secondary': '#ffffff',
      error: '#e40046',
      'on-error': '#ffffff',
      success: '#56C271',
      'on-success': '#414141',
      charcoal: {
        default: '#414141'
      },
      white: '#ffffff',
      violet: {
        50: '#f7f6fd',
        100: '#e9e5f9',
        200: '#d9d3f5',
        300: '#b4a6ea',
        400: '#8f7be1',
        500: '#694ed6',
        default: '#694ed6',
        600: '#4538cb',
        700: '#2123c0',
        800: '#141483',
        900: '#060546'
      },
      fuchsia: {
        50: '#fbc9ee',
        100: '#f99ae0',
        200: '#f66cd4',
        300: '#e453bf',
        400: '#d648b2',
        500: '#c137a2',
        default: '#c137a2',
        600: '#ac258d',
        700: '#9d1880',
        800: '#910d75',
        900: '#8d0073'
      }
    },
    gradients: theme => ({
      'gradient-vertical': [theme('colors.primary'), theme('colors.secondary'), theme('colors.error')]
    }),
    spacing: {
      '1': '4px',
      '2': '8px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '96px',
      '8': '120px'
    }
  },
  plugins: [require('tailwindcss-plugins/gradients')]
};
