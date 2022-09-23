import { ApolloError, gql, useMutation } from "@apollo/client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { SIGN_IN } from "../Api/SIGNIN/signin"




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
    }
  }, [login])

  const logout = () => {
    setLoginCalled(false)
    setUser(undefined)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error, loginCalled }}>
      {prop.children}
    </AuthContext.Provider>
  )
}


export const useAuthContext = () => {
  const { login, logout, user, loading, error, loginCalled } = useContext(AuthContext) as IAuthContext
  const usuario = user?.user
  return {
    login,
    logout,
    user,
    loading,
    error,
    usuario,
    loginCalled
  }
}