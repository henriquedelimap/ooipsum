import { createTheme } from "@mui/material";


let theme = createTheme({
  typography: {
    fontFamily: 'Old Standard TT'
  },
  palette: {
    primary: {
      main: '#3d3d3d',
    },
    secondary: {
      main: '#0066cc',
    },
    text: {
      primary: '#3d3d3d',
      secondary: '#9d9d9d'
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#fafafa',
          border: 'none'

        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          fontFamily: 'Outfit',
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit'
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Outfit'
        }
      }
    }
  }
})

export default theme