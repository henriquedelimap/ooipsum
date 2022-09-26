import { createTheme } from "@mui/material";


let theme = createTheme({
  typography: {
    fontFamily: 'Old Standard TT'
  },
  palette: {
    primary: {
      main: '#0066cc'
    },
    text: {
      primary: '#0066cc',
      secondary: '#3d3d3d'
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
    }
  }
})

export default theme