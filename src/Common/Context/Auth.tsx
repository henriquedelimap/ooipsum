import { ApolloError, useMutation } from "@apollo/client"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { SIGN_IN } from "../Api/SIGNIN/signin"
import CryptoJS from "crypto-js"

export interface IUser {
  user: {
    username: String
    email: String
    password: String
    accountType: String
  }
  token: String
}

export type IAuthContext = {
  logout: () => void
  login: (username: string, password: string) => void
  user: IUser | undefined | null
  auth: string | undefined
  loading: boolean
  error: ApolloError | undefined
  loginCalled: boolean | undefined
}

const AuthContext = createContext<IAuthContext | undefined | null>(undefined)

interface Prop {
  children: ReactNode
}


export const AuthProvider = (prop: Prop) => {
  const [user, setUser] = useState<IUser | undefined | null>(null)
  const [loginCalled, setLoginCalled] = useState<boolean | undefined>(undefined)
  const [auth, setAuth] = useState<string | undefined>(undefined)
  const [signIn, { error, loading, data }] = useMutation(SIGN_IN)

  const login = (username: string, password: string) => {
    signIn({
      variables: {
        username: username,
        password: password
      }
    })
    return setLoginCalled(true)
  }

  useEffect(() => {
    if (loginCalled && !!data) {
      setUser(data?.signIn)
      setAuth(data?.signIn.token)

      const localData = JSON.stringify(data?.signIn)
      const encrypt = CryptoJS.AES.encrypt(localData, 'dataHash').toString()

      localStorage.setItem('auth_token', encrypt)
    }
  }, [login])

  useEffect(() => {
    if (localStorage.getItem('auth_token') !== null) {
      const dataLocalStorage = String(localStorage.getItem('auth_token'))
      const bytes = CryptoJS.AES.decrypt(dataLocalStorage, 'dataHash')

      const decrypt = bytes.toString(CryptoJS.enc.Utf8)

      const user = JSON.parse(decrypt)

      setAuth(user.token)
      setUser(user)
    }
  }, [])

  const logout = () => {
    setLoginCalled(false)
    localStorage.removeItem('auth_token')
    setUser(undefined)
    setAuth(undefined)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error, loginCalled, auth }}>
      {prop.children}
    </AuthContext.Provider>
  )
}


export const useAuthContext = () => {
  const { login, logout, user, loading, error, loginCalled, auth } = useContext(AuthContext) as IAuthContext
  const usuario = user?.user
  return {
    login,
    logout,
    user,
    loading,
    error,
    usuario,
    loginCalled,
    auth
  }
}