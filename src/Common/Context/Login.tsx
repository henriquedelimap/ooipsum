import { createContext, ReactNode, useContext, useState } from "react";

interface ILogin {

}

const LoginContext = createContext<ILogin | null>(null)

interface Prop {
    children: ReactNode
}

export const LoginProvider = (prop: Prop) => {
    const [user, setUser] = useState()
    return (
        <LoginContext.Provider value={{ user }}>
            {prop.children}
        </LoginContext.Provider>
    )
}

// export const useLoginContext = ( ) => {
//     const {} = useContext(LoginContext)
// }