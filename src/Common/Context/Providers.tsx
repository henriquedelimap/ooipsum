import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import React, { ReactElement } from 'react'
import theme from '../../Style/Global'
import { AuthProvider } from './Auth'
import { BlogConfigProvider } from './BlogConfig'
import { InternalConfigProvider } from './InternalConfig'
import { SignUpProvider } from './SignUp'

const client = new ApolloClient({
  uri: 'https://ooipsum.herokuapp.com/',
  cache: new InMemoryCache()
})

export const Providers = ({ children }: { children: ReactElement }) => {

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <InternalConfigProvider>
            <BlogConfigProvider>
              <AuthProvider>
                <SignUpProvider>

                  {children}
                  <CssBaseline />
                </SignUpProvider>
              </AuthProvider>
            </BlogConfigProvider>
          </InternalConfigProvider>
        </ApolloProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}
