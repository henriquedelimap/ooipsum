import * as React from 'react'
import { AppBar, Avatar, Box, Collapse, Fade, Slide, Stack, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../assets/logoipsum-268"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from '../../Utils'
import { useBlogConfig } from '../../Common/Context/BlogConfig'
import { useAuthContext } from '../../Common/Context/Auth'
import { MenuAuthenticated, MyPerfilMenu } from '../../Components/MyPerfilMenu/myPerfilMenu'

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}

export const MyAppBar = (prop: Prop) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const { blogConfig, loading } = useBlogConfig()
  const { usuario } = useAuthContext()
  const [value, setValue] = useState<number>(0)
  const navigate = useNavigate()
  const pathname = window.location.pathname.split('/')[1]
  const tabMatch = blogConfig?.appBarListItems.map((item: any, index: any) => item.to === pathname ? index : '').filter((i: any) => i)[0]

  React.useEffect(() => {
    if (value !== tabMatch) {
      setValue(tabMatch === undefined ? 0 : Number(tabMatch))
    }
  })


  const openMyPerfilMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget)
  }


  const handleTabsChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
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

            <Tabs
              aria-label={`menu principal do site ${blogConfig?.siteName}`}
              value={value}
              onChange={handleTabsChange}
            >

              {
                blogConfig?.appBarListItems.map((item: any, index: any) => (
                  <Tab
                    disableRipple
                    key={index}
                    onClick={(event: any) => {
                      item.label === 'acessar' && !!usuario ? openMyPerfilMenu(event) : navigate(`/${item.to}`)
                    }}
                    sx={{ fontFamily: 'Outfit', p: 3 }}
                    label={item.label === 'acessar' && !!usuario ? `${usuario.username}` : `${item.label}`} />
                )
                )
              }

              <MyPerfilMenu open={open} setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
            </Tabs>


          </Toolbar>
        </AppBar>
      </Fade>
    </HiddenOnScroll >
  )
}