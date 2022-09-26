import { createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IInternalConfigType {
  appBarAction: ReactElement | undefined
  setAppBarAction: Dispatch<SetStateAction<ReactElement | undefined>>
  appBarSubMenu: ReactElement | undefined
  setAppBarSubMenu: Dispatch<SetStateAction<ReactElement | undefined>>

}

const InternalConfigContext = createContext<IInternalConfigType | null>(null)

interface Prop {
  children: ReactNode
}

export const InternalConfigProvider = (prop: Prop) => {
  const [value, setValue] = useState('')
  const [appBarAction, setAppBarAction] = useState<ReactElement | undefined>()
  const [appBarSubMenu, setAppBarSubMenu] = useState<ReactElement | undefined>()

  return (
    <InternalConfigContext.Provider value={{ appBarAction, setAppBarAction, appBarSubMenu, setAppBarSubMenu }}>
      {prop.children}
    </InternalConfigContext.Provider>
  )
}

export const useInternalConfig = () => {
  const { appBarAction, appBarSubMenu, setAppBarSubMenu, setAppBarAction } = useContext(InternalConfigContext) as IInternalConfigType
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)


  return {
    appBarAction, appBarSubMenu, setAppBarSubMenu, setAppBarAction, anchorEl, setAnchorEl, open
  }
}