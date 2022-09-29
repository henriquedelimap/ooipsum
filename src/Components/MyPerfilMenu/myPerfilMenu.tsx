import { LinearProgress, Fade, Box } from "@mui/material"
import { useAuthContext } from "../../Common/Context/Auth"
import { LoginForm } from "../../Pages/Acessar/loginForm"
import { MenuAuthenticated } from "./MenuAuthenticated"

export const MyPerfilMenu = () => {
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