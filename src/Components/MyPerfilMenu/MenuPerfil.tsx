import { Slide, Paper, Box, Fade, LinearProgress } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { useAuthContext } from "../../Common/Context/Auth"
import { LoginForm } from "../../Pages/Acessar/loginForm"
import { MenuAuthenticated } from "./MenuAuthenticated"


const MyPerfilMenu = () => {
  const { loading, auth } = useAuthContext()

  return (
    <>
      {
        !!auth
          ? <MenuAuthenticated />
          : <Box sx={{ p: 3 }}>
            <LoginForm />
          </Box>
      }
      <Fade in={loading}>
        <LinearProgress sx={{ mb: -1 }} />
      </Fade>
    </>

  )
}





interface Prop {
  openMenuPerfil: boolean
  setOpenMenuPerfil: Dispatch<SetStateAction<boolean>>
}
export const PerfilMenu = (prop: Prop) => {
  const { openMenuPerfil, setOpenMenuPerfil } = prop
  return (
    <Slide direction={openMenuPerfil ? 'left' : 'down'} in={openMenuPerfil}>
      <Paper
        onMouseLeave={() => setOpenMenuPerfil(false)}
        sx={{
          borderRadius: 6,
          background: '#fff',
          position: 'absolute',
          right: 24,
          top: 8,
          width: 320,
          minHeight: 400
        }}>
        <MyPerfilMenu />
      </Paper>
    </Slide>
  )
}