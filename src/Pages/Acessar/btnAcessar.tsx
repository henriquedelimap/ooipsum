import { Button, Avatar } from "@mui/material"
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
      onClick={(event: any) => {
        !!usuario ? setOpenMenuPerfil(!openMenuPerfil) : navigate('/acessar')
      }}
      sx={{
        color: 'primary',
        fontFamily: 'Outfit',
        fontWeight: 700,

        '&:hover': {
          background: !!usuario ? 'transparent' : '#0066cc',
          color: '#fff',
          fontWeight: 700,
        },
        '&:active': {
          background: 'transparent',
          color: '#0066cc',
        }
      }}
    >
      {!!usuario ? <Avatar onMouseEnter={() => setOpenMenuPerfil(true)} sx={{ width: 40, height: 40, zIndex: 8000 }} /> : 'acessar'}
    </Button>
  )
}


