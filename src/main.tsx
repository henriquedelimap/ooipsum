import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BlogConfigProvider } from './Common/Context/BlogConfig'
import { AuthProvider } from './Common/Context/Auth'
import { SignUpProvider } from './Common/Context/SignUp'
import { Rotas } from './Route'
import theme from './Style/Global'
import { InternalConfigProvider } from './Common/Context/InternalConfig'
const client = new ApolloClient({
  uri: 'https://ooipsum.herokuapp.com/',
  cache: new InMemoryCache()
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <InternalConfigProvider>
        <BlogConfigProvider>
          <AuthProvider>
            <SignUpProvider>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Rotas />
              </ThemeProvider>
            </SignUpProvider>
          </AuthProvider>
        </BlogConfigProvider>
      </InternalConfigProvider>
    </ApolloProvider>
  </React.StrictMode>
)
