import { createContext, Dispatch, ReactElement, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface IInternalConfigType {
  appBarAction: any | undefined
  setAppBarAction: Dispatch<SetStateAction<any | undefined>>
  appBarSubMenu: ReactElement | undefined
  setAppBarSubMenu: Dispatch<SetStateAction<ReactElement | undefined>>
  pathname: string[] | undefined
  setPathname: Dispatch<SetStateAction<string[] | undefined>>
}

const InternalConfigContext = createContext<IInternalConfigType | null>(null)

interface Prop {
  children: ReactNode
}

export const InternalConfigProvider = (prop: Prop) => {
  const [value, setValue] = useState('')
  const [appBarAction, setAppBarAction] = useState<any | undefined>()
  const [appBarSubMenu, setAppBarSubMenu] = useState<ReactElement | undefined>()
  const [pathname, setPathname] = useState<string[] | undefined>()

  return (
    <InternalConfigContext.Provider value={{ appBarAction, setAppBarAction, appBarSubMenu, setAppBarSubMenu, pathname, setPathname }}>
      {prop.children}
    </InternalConfigContext.Provider>
  )
}

export const useInternalConfig = () => {
  const { appBarAction, appBarSubMenu, setAppBarSubMenu, setAppBarAction, pathname, setPathname } = useContext(InternalConfigContext) as IInternalConfigType
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)


  return {
    appBarAction, appBarSubMenu, setAppBarSubMenu, setAppBarAction, anchorEl, setAnchorEl, open, pathname, setPathname
  }
}