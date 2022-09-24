import { createTheme } from "@mui/material";


let theme = createTheme({
  typography: {
    fontFamily: 'Old Standard TT'
  }
})

theme = createTheme({
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