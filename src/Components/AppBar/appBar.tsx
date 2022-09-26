import * as React from 'react'
import { AppBar, Avatar, Box, Button, ButtonBase, Collapse, Fade, IconButton, Slide, Stack, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../assets/logoipsum-268"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from '../../Utils'
import { useBlogConfig } from '../../Common/Context/BlogConfig'
import { useAuthContext } from '../../Common/Context/Auth'
import { MenuAuthenticated, MyPerfilMenu } from '../MyPerfilMenu/myPerfilMenu'
import { useInternalConfig } from '../../Common/Context/InternalConfig'
import { MdMenu } from 'react-icons/md'

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}

const StyledAppBar = (prop: Prop) => {

  const { blogConfig, loading } = useBlogConfig()

  const [value, setValue] = useState<number>(0)

  const navigate = useNavigate()


  const logoOnClick = () => {
    navigate('/')
    setValue(0)
  }

  return (
    <HiddenOnScroll {...prop}>
      <Fade in={!loading}>
        <AppBar sx={{
          backdropFilter: 'blur(30px)',
          background: '#ffffff',
          boxShadow: 'none',
          height: 64,
          zIndex: 3000
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

export const MyAppBar = () => {
  const { setAppBarAction, appBarSubMenu, setAppBarSubMenu, appBarAction, anchorEl, setAnchorEl, open } = useInternalConfig()

  const { blogConfig, loading } = useBlogConfig()
  const { usuario } = useAuthContext()
  const navigate = useNavigate()

  const openMyPerfilMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }

  React.useLayoutEffect(() => {
    setAppBarAction(
      <Stack direction='row' spacing={4}>
        {
          blogConfig?.appBarListItems.map((item: any, index: any) => (
            <Typography
              key={index}
              color='#3d3d3d'
              variant='h6'
              fontWeight={300}
              onClick={(event: any) => navigate(`/${item.to}`)}
              sx={{ fontFamily: 'Outfit', cursor: 'pointer', color: 'white', pl: 1, pr: 1, '&:hover': { fontWeight: 600 } }}
            >
              {item.label}
            </Typography>
          )
          )
        }
      </Stack>
    )
  }, [!!blogConfig])

  const [openMenu, setOpenMenu] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)

  return (
    <>
      <StyledAppBar>
        <>

          <Stack
            alignItems='center'
            justifyContent='center'

            onClick={() => {
              if (navigator.userAgent != undefined && navigator.userAgent.mobile) {
                setOpenMenu(!openMenu)
              }
            }
            }

            onMouseEnter={() => setOpenMenu(!openMenu)}
            onMouseLeave={() => setOpenMenu(!openMenu)}
            sx={{ width: '50%', height: '100%' }}>


            <Stack alignItems='center' direction='row' sx={{ background: '#3d3d3d', borderRadius: 3, p: .2, pl: 1, pr: 1 }} >

              <Collapse in={!openMenu}>
                <Stack
                  alignItems='center'
                  sx={{ width: '100%', display: !openMenu ? 'flex' : 'none' }}
                >
                  <IconButton >
                    <MdMenu color='white' />
                  </IconButton>
                </Stack>
              </Collapse>

              <Stack sx={{ borderRadius: 8 }}>
                <Collapse orientation='horizontal' in={openMenu}>
                  {appBarAction}
                </Collapse>
              </Stack>

              <Stack sx={{ borderRadius: 8 }}>
                <Collapse orientation='horizontal' in={openSubMenu}>
                  {appBarSubMenu}
                </Collapse>
              </Stack>



            </Stack>
          </Stack>










          <Button
            disableRipple
            variant={!!usuario ? undefined : 'outlined'}
            size='small'
            onClick={(event: any) => {
              !!usuario ? openMyPerfilMenu(event) : navigate('/acessar')
            }}
            sx={{
              color: 'primary',
              fontFamily: 'Outfit',
              fontWeight: 700,
              '&:hover': {
                background: !!usuario ? 'transparent' : '#0066cc',
                color: '#fff',
                fontWeight: 700
              },
              '&:active': {
                background: 'transparent',
                color: '#0066cc',
              }
            }}
          >
            {!!usuario ? <Avatar /> : 'acessar'}
          </Button>
        </>
      </StyledAppBar >

      <MyPerfilMenu open={open} setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </>
  )
}