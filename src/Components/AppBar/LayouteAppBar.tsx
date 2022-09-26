import { Fade, AppBar, Toolbar, Stack } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useBlogConfig } from "../../Common/Context/BlogConfig"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from "../../Utils"

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}

export const StyledAppBar = (prop: Prop) => {

  const { blogConfig, loading } = useBlogConfig()

  const navigate = useNavigate()

  const logoOnClick = () => {
    navigate('/')
  }

  return (
    <HiddenOnScroll {...prop}>
      <Fade in={!loading}>
        <AppBar sx={{
          backdropFilter: 'blur(30px)',
          background: '#ffffff',
          boxShadow: 'none',
          height: 64,
          zIndex: 3000,
        }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Stack sx={{ height: 60, cursor: 'pointer' }} onClick={logoOnClick}>
              {Script.logo}
            </Stack >

            {prop.children}

          </Toolbar>
        </AppBar>
      </Fade>
    </HiddenOnScroll >
  )
}