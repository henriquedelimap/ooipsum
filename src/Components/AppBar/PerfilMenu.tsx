import { Slide, Paper } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { useNavigate } from 'react-router-dom'

interface Prop {
  openMenuPerfil: boolean
  setOpenMenuPerfil: Dispatch<SetStateAction<boolean>>
}
export const PerfilMenu = (prop: Prop) => {
  const { openMenuPerfil, setOpenMenuPerfil } = prop
  return (
    <Slide direction={openMenuPerfil ? 'left' : 'down'} in={openMenuPerfil}>
      <Paper onMouseLeave={() => setOpenMenuPerfil(false)} sx={{ borderRadius: 6, background: '#fff', position: 'absolute', right: 24, top: 4, width: 320, minHeight: 400 }}>

      </Paper>
    </Slide>
  )
}