import { createContext, ReactNode, useState } from "react";

interface ISignUp {

}

export const SignUpContext = createContext<ISignUp | null>(null)

interface Prop {
    children: ReactNode
}
export const SignUpProvider = (prop: Prop) => {
    const [user, setUser] = useState()
    return (
        <SignUpContext.Provider value={{ user }}>
            {prop.children}
        </SignUpContext.Provider>
    )
}