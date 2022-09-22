import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginProvider } from './Common/Context/Login'
import { SignUpProvider } from './Common/Context/SignUp'
import { Rotas } from './Route'
import theme from './Style/Global'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginProvider>
      <SignUpProvider>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Rotas />
        </ThemeProvider>
      </SignUpProvider>
    </LoginProvider>
  </React.StrictMode>
)
