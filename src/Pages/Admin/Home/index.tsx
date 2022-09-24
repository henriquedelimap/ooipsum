import { Button } from "@mui/material"
import { useEffect } from "react"
import { useAuthContext } from "../../../Common/Context/Auth"
import { useInternalConfig } from "../../../Common/Context/InternalConfig"

export const AdminHomePage = () => {
  const { setAppBarAction, appBarAction, anchorEl, setAnchorEl, open } = useInternalConfig()
  const { usuario } = useAuthContext()

  return (
    <>
      HOME PAGE
    </>
  )
}
