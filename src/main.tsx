import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { LoginProvider } from './Common/Context/Login'
import { SignUpProvider } from './Common/Context/SignUp'
import { Rotas } from './Route'
import theme from './Style/Global'
const client = new ApolloClient({
  uri: 'https://ooipsum.herokuapp.com/',
  cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LoginProvider>
        <SignUpProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Rotas />
          </ThemeProvider>
        </SignUpProvider>
      </LoginProvider>
    </ApolloProvider>
  </React.StrictMode>
)
