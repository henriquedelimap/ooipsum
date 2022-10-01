import { Button } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { useNavigate } from 'react-router-dom'

import { useAuthContext } from "../../Common/Context/Auth"

interface Prop {
  openMenuPerfil: boolean
  setOpenMenuPerfil: Dispatch<SetStateAction<boolean>>
}

export const BtnAcessar = (prop: Prop) => {
  const { usuario } = useAuthContext()
  const navigate = useNavigate()
  const { openMenuPerfil, setOpenMenuPerfil } = prop
  return (
    <Button
      disableRipple
      variant={!!usuario ? undefined : 'outlined'}
      onMouseEnter={() => setOpenMenuPerfil(!openMenuPerfil)}
      sx={{
        color: 'primary',
        fontFamily: 'Outfit',
        fontWeight: 700,
        borderRadius: 1
      }}
    >
      acessar
    </Button>
  )
}


