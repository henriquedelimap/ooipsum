import * as React from 'react'
import { AppBar, Avatar, Box, Button, ButtonBase, Collapse, Fade, Slide, Stack, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../assets/logoipsum-268"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from '../../Utils'
import { useBlogConfig } from '../../Common/Context/BlogConfig'
import { useAuthContext } from '../../Common/Context/Auth'
import { MenuAuthenticated, MyPerfilMenu } from '../MyPerfilMenu/myPerfilMenu'
import { useInternalConfig } from '../../Common/Context/InternalConfig'

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
  const { setAppBarAction, appBarAction, anchorEl, setAnchorEl, open } = useInternalConfig()

  const { blogConfig, loading } = useBlogConfig()
  const { usuario } = useAuthContext()
  const [value, setValue] = useState<number | undefined>(0)
  const navigate = useNavigate()
  const pathname = window.location.pathname.split('/')[1]

  const tabMatch = blogConfig?.appBarListItems.map((item: any, index: any) => item.to === pathname ? index : '').filter((i: any) => i)[0]

  const openMyPerfilMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }


  const handleTabsChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }



  React.useLayoutEffect(() => {

    setAppBarAction(
      <Tabs
        aria-label={`menu principal do site ${blogConfig?.siteName}`}
        value={value}
        onChange={handleTabsChange}
      >

        {
          blogConfig?.appBarListItems.map((item: any, index: any) => (
            <Tab
              disableRipple
              disableTouchRipple
              disableFocusRipple
              key={index}
              onClick={(event: any) => navigate(`/${item.to}`)}
              sx={{ fontFamily: 'Outfit', p: 3 }}
              label={item.label} />
          )
          )
        }

      </Tabs>
    )
  }, [!!blogConfig, !!tabMatch])

  return (
    <>
      <StyledAppBar>
        <>
          {appBarAction}

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