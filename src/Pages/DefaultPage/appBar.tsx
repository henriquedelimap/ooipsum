import * as React from 'react'
import { AppBar, Box, Fade, Slide, Stack, Tab, Tabs, Toolbar, useScrollTrigger } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../assets/logoipsum-268"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from '../../Utils'

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}

export const MyAppBar = (prop: Prop) => {
  const [value, setValue] = useState<number>(0)
  const navigate = useNavigate()
  const pathname = window.location.pathname.split('/')[1]
  const tabMatch = Script.appBarListItems.map((item, index) => item.to === pathname ? index : '').filter(i => i)[0]

  React.useEffect(() => {
    if (value !== tabMatch) {
      setValue(tabMatch === undefined ? 0 : Number(tabMatch))
    }
  }, [])

  const handleTabsChange = (e: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const logoOnClick = () => {
    navigate('/')
    setValue(0)
  }
  return (
    <HiddenOnScroll {...prop}>
      <AppBar sx={{
        backdropFilter: 'blur(30px)',
        background: '#ffffff',
        boxShadow: 'none',
        borderBottom: '1px solid #dbdbdb',
        height: 64
      }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Stack sx={{ height: 60, cursor: 'pointer' }} onClick={logoOnClick}>
            {Script.logo}
          </Stack >
          <Tabs
            aria-label={`menu principal do site ${Script.siteName}`}
            value={value}
            onChange={handleTabsChange}
          >

            {
              Script.appBarListItems.map((item, index) => (
                <Tab
                  disableRipple
                  key={index}

                  onClick={() => navigate(`/${item.to}`)}
                  sx={{ mt: 0, p: 3, fontFamily: 'Outfit' }}
                  label={`${item.label}`}
                />

              ))
            }

          </Tabs>
        </Toolbar>
      </AppBar>
    </HiddenOnScroll>
  )
}