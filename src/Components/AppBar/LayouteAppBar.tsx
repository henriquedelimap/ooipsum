import { Fade, AppBar, Toolbar, Stack, Box, IconButton, Slide } from "@mui/material"
import { MdArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useBlogConfig } from "../../Common/Context/BlogConfig"
import { useInternalConfig } from "../../Common/Context/InternalConfig"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from "../../Utils"

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}

export const StyledAppBar = (prop: Prop) => {

  const { loading } = useBlogConfig()
  const { postPage } = useInternalConfig()

  const navigate = useNavigate()

  const logoOnClick = () => {
    navigate('/')
  }

  let isPostPage = window.location.pathname.split('/')[2] === 'blog'

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

            <Stack direction='row' alignItems='center'>

              <Slide in={isPostPage} direction='right'>
                <IconButton sx={{ display: isPostPage ? 'flex' : 'none' }} onClick={() => navigate(-1)}>
                  <MdKeyboardArrowLeft />
                </IconButton>
              </Slide>
              <Box sx={{ height: 60, cursor: 'pointer' }} onClick={logoOnClick}>
                {Script.logo}
              </Box >
            </Stack>

            {prop.children}

          </Toolbar>
        </AppBar>
      </Fade>
    </HiddenOnScroll >
  )
}