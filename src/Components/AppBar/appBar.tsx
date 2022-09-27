import * as React from 'react'
import { AppBar, Avatar, Box, Button, ButtonBase, ButtonGroup, Collapse, Fade, IconButton, Paper, Slide, Stack, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../../assets/logo.svg"
import { useBlogConfig } from '../../Common/Context/BlogConfig'
import { useAuthContext } from '../../Common/Context/Auth'
import { useInternalConfig } from '../../Common/Context/InternalConfig'
import { MdAdd } from 'react-icons/md'
import { StyledAppBar } from './LayouteAppBar'
import { BtnAcessar } from '../../Pages/Acessar/btnAcessar'
import { PerfilMenu } from './PerfilMenu'
import { Menu } from './Menu'

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}


export const MyAppBar = () => {
  const { setAppBarAction, pathname } = useInternalConfig()

  const { blogConfig, loading } = useBlogConfig()
  const { usuario } = useAuthContext()
  const navigate = useNavigate()

  const [openMenuPerfil, setOpenMenuPerfil] = useState(false)




  React.useLayoutEffect(() => {
    setAppBarAction(blogConfig?.appBarListItems)
  }, [!!blogConfig, !!pathname])

  return (
    <StyledAppBar>
      <>

        <Menu
          openMenuPerfil={openMenuPerfil}
          setOpenMenuPerfil={setOpenMenuPerfil}
        />

        {!!usuario
          ? <Stack alignItems='center' spacing={.5} direction='row' sx={{ p: 1, zIndex: 8000 }}>
            <Button size='small' onClick={() => navigate(`/admin/blog`)} sx={{ background: '#f3f3f3', borderRadius: 2, '&:hover': { background: '#f3f3f3', opacity: .7, color: '#000' }, }}>
              <MdAdd color='#3d3d3d' fontSize={26} />
            </Button>

            <Avatar
              onClick={() => {
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                  setOpenMenuPerfil(!openMenuPerfil)
                }
              }}
              onMouseEnter={() => setOpenMenuPerfil(true)}
              sx={{ background: '#f3f3f3', width: 40, height: 40, borderRadius: openMenuPerfil ? 6 : 2 }} />
          </Stack>
          : <BtnAcessar openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />
        }


        <PerfilMenu openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />

      </>
    </StyledAppBar >

  )
}