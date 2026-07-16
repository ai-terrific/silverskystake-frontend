import { alpha } from '@mui/material/styles'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    highlighted: true
  }
}
declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }

  interface Palette {
    baseShadow: string
  }
}

export const brand = {
  50: 'hsl(210, 100%, 95%)',
  100: 'hsl(210, 100%, 92%)',
  200: 'hsl(210, 100%, 80%)',
  300: 'hsl(210, 100%, 65%)',
  400: 'hsl(210, 98%, 48%)',
  500: 'hsl(210, 98%, 42%)',
  600: 'hsl(210, 98%, 55%)',
  700: 'hsl(210, 100%, 35%)',
  800: 'hsl(210, 100%, 16%)',
  900: 'hsl(210, 100%, 21%)'
}

export const gray = {
  50: 'hsl(220, 35%, 97%)',
  100: 'hsl(220, 30%, 94%)',
  200: 'hsl(220, 20%, 88%)',
  300: 'hsl(220, 20%, 80%)',
  400: 'hsl(220, 20%, 65%)',
  500: 'hsl(220, 20%, 42%)',
  600: 'hsl(220, 20%, 35%)',
  700: 'hsl(220, 20%, 25%)',
  800: 'hsl(220, 30%, 6%)',
  900: 'hsl(220, 35%, 3%)'
}

export const green = {
  50: 'hsl(120, 80%, 98%)',
  100: 'hsl(120, 75%, 94%)',
  200: 'hsl(120, 75%, 87%)',
  300: 'hsl(120, 61%, 77%)',
  400: 'hsl(120, 44%, 53%)',
  500: 'hsl(120, 59%, 30%)',
  600: 'hsl(120, 70%, 25%)',
  700: 'hsl(120, 75%, 16%)',
  800: 'hsl(120, 84%, 10%)',
  900: 'hsl(120, 87%, 6%)'
}

export const orange = {
  50: 'hsl(45, 100%, 97%)',
  100: 'hsl(45, 92%, 90%)',
  200: 'hsl(45, 94%, 80%)',
  300: 'hsl(45, 90%, 65%)',
  400: 'hsl(45, 90%, 40%)',
  500: 'hsl(45, 90%, 35%)',
  600: 'hsl(45, 91%, 25%)',
  700: 'hsl(45, 94%, 20%)',
  800: 'hsl(45, 95%, 16%)',
  900: 'hsl(45, 93%, 12%)'
}

export const red = {
  50: 'hsl(0, 100%, 97%)',
  100: 'hsl(0, 92%, 90%)',
  200: 'hsl(0, 94%, 80%)',
  300: 'hsl(0, 90%, 65%)',
  400: 'hsl(0, 90%, 40%)',
  500: 'hsl(0, 90%, 30%)',
  600: 'hsl(0, 91%, 25%)',
  700: 'hsl(0, 94%, 18%)',
  800: 'hsl(0, 95%, 12%)',
  900: 'hsl(0, 93%, 6%)'
}

export const colorSchemes = {
  light: {
    palette: {
      primary: {
        main: '#1976d2',
        light: '#42a5f5',
        dark: '#1565c0',
        contrastText: '#fff'
      },
      secondary: {
        main: '#868A92',
        light: '#a7a9ad',
        dark: '#5a5d63',
        contrastText: '#fff'
      },
      success: {
        main: '#0DB1A0',
        light: '#0DB1A029',
        dark: '#1b5e20',
        contrastText: '#fff'
      },
      warning: {
        main: '#F7931A',
        light: '#F7931A29',
        dark: '#e65100',
        contrastText: '#fff'
      },
      error: {
        main: '#CF202E',
        light: '#ef5350',
        dark: '#c62828',
        contrastText: '#fff'
      },
      info: {
        main: '#0288d1',
        light: '#4fc3f7',
        dark: '#01579b',
        contrastText: '#fff'
      },
      background: {
        default: '#F4F5F5',
        paper: '#ffffff'
      },
      text: {
        primary: '#0E1525',
        secondary: '#868A92',
        disabled: '#F4F5F5'
      },
      divider: '#E8EDF3',

      grey: {
        ...gray
      },

      textDisabled: {
        light: '#414141',
        main: '#797979 !important'
      },
      action: {
        hover: alpha(gray[200], 0.2),
        selected: `${alpha(gray[200], 0.3)}`
      },
      baseShadow: '0px 0px 24px 0px #0000000F'
    }
  },
  dark: {
    palette: {
      primary: {
        main: '#90caf9',
        light: '#e3f2fd',
        dark: '#1976d2',
        contrastText: '#000'
      },
      secondary: {
        main: '#f48fb1',
        light: '#f8bbd0',
        dark: '#c2185b',
        contrastText: '#000'
      },
      success: {
        main: '#66bb6a',
        light: '#81c784',
        dark: '#388e3c',
        contrastText: '#000'
      },
      warning: {
        main: '#ffb74d',
        light: '#ffe0b2',
        dark: '#f57f17',
        contrastText: '#000'
      },
      error: {
        main: '#ef5350',
        light: '#e57373',
        dark: '#d32f2f',
        contrastText: '#000'
      },
      info: {
        main: '#4fc3f7',
        light: '#b3e5fc',
        dark: '#0288d1',
        contrastText: '#000'
      },
      background: {
        default: '#0E1525',
        paper: '#171D2D'
      },
      text: {
        primary: '#ffffff',
        secondary: '#b0b0b0',
        disabled: '#616161'
      },
      divider: '#202636',

      grey: {
        ...gray
      },
      textDisabled: {
        main: '#797979 !important'
      },
      action: {
        hover: alpha(gray[600], 0.2),
        selected: alpha(gray[600], 0.3)
      },
      baseShadow: '0px 0px 24px 0px #0000000F'
    }
  }
}

export const color = {
  prime: '#0DB1A0',
  grey: '#999AA3',
  red: '#F45263',
  orange: '#F7931A',
  green: '#71B548',
  gradient: 'linear-gradient(180deg, #0DB1A0 0%, #026056 100%)',
  gradient2: 'linear-gradient(180deg, #34A853 0%, #067524 100%)',
  gradient3: 'linear-gradient(90deg, rgba(255, 215, 0, 0) 18.49%, rgba(240, 154, 1, 0.32) 100%)',
  gradientSuccess: 'linear-gradient(180deg, #34A853 0%, #067524 100%)',
  gradientSidebarLight: 'linear-gradient(90deg, rgba(255, 215, 0, 0) 18.49%, rgba(240, 154, 1, 0.32) 100%)',
  gradientSidebarDark: 'linear-gradient(90deg, rgba(11, 206, 185, 0) 0%, rgba(11, 206, 185, 0.12) 100%)',
  bgLight: '#F5F7F9',
  border: '#E8E9ED',
  white: '#ffffff',
  bgDark: '#242529',
  dark: '#42475F',
  borderDark: '#3F4248',
  borderLight: '#F1F1F1',
  layer1Dark: '#2F3036',
  layer2Dark: '#1B2131',
  mutedLavender: '#3B5998',
  greenBhabua: '#C8F558',
  purpleEmperor: '#673AB7',
  greyDark: '#6A6B7A',
  greyLight: '#f0f0f0',
  nimbusCloud: '#C7C9CD',
  transparent: 'transparent',
  cedarChest: '#CA5A4B',
  tooGold: '#FDB520',
  coldHeights: '#2EDFF0',
  waterSports: '#3FC3D1',
  roseFusion: '#F86554',
  venetianPearl: '#D3E9D4',
  friendlyFrost: '#C0F9FF',
  sugarwinkle: '#F8C6E4',
  sunkissedYellow: '#FFEAB6',
  ladyAnne: '#FFE2DE',
  schnitzel: '#F09A01'
}
export const typography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontSize: '70px',
    fontWeight: 700
  },
  h2: {
    fontSize: '50px',
    fontWeight: 700
  },
  h3: {
    fontSize: '32px',
    fontWeight: 700
  },
  h4: {
    fontWeight: 700,
    fontSize: '28px'
  },
  h5: {
    fontSize: '24px',
    fontWeight: 600
  },
  h6: {
    fontSize: '18px',
    fontWeight: 600
  },
  body1: {
    fontSize: '14px',
    fontWeight: 400
  },
  body2: {
    fontSize: '12px'
  },
  subtitle1: {
    fontSize: '16px'
  },
  caption: {
    fontSize: '10px'
  }
}
