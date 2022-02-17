import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
    sm: '768px',
    md: '915px',
    lg: '1448px',
    xl: '1681px',
})

const fonts = { inter: `'Inter', sans-serif`}

const theme = extendTheme({
    fonts,
    breakpoints,
    colors: {
      navText:{
          100: '#4081FF'
      },
      accent2:{
          100: '#FF5C5C'
      },
      black:{
          700: '#333333'
      },
      gray:{
          600: '#999999'
      }
    }
});

export default theme;