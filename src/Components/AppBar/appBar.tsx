import * as React from 'react'
import { AppBar, Avatar, Box, Button, ButtonBase, Collapse, Fade, IconButton, Paper, Slide, Stack, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material"
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
import { StyledAppBar } from './LayouteAppBar'
import { BtnAcessar } from '../../Pages/Acessar/btnAcessar'
import { PerfilMenu } from './PerfilMenu'
import { Menu } from './Menu'

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}


export const MyAppBar = () => {
  const { setAppBarAction, appBarSubMenu, setAppBarSubMenu, appBarAction, anchorEl, setAnchorEl, open } = useInternalConfig()

  const { blogConfig, loading } = useBlogConfig()
  const { usuario } = useAuthContext()
  const navigate = useNavigate()

  const [openMenuPerfil, setOpenMenuPerfil] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [openSubMenu, setOpenSubMenu] = useState(false)

  React.useLayoutEffect(() => {
    setAppBarAction(
      <Stack direction='row' spacing={4}  >
        {
          blogConfig?.appBarListItems.map((item: any, index: any) => (
            <Typography
              key={index}
              color='#3d3d3d'
              variant='h6'
              fontWeight={300}
              onMouseEnter={() => setOpenSubMenu(true)}
              onClick={(event: any) => {
                setOpenMenuPerfil(false)

                navigate(`/${item.to}`)
              }}
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

  return (
    <StyledAppBar>
      <>

        <Menu
          setOpenSubMenu={setOpenSubMenu}
          openMenuPerfil={openMenuPerfil}
          setOpenMenuPerfil={setOpenMenuPerfil}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          openSubMenu={openSubMenu}
        />

        <BtnAcessar openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />

        <PerfilMenu openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />

      </>
    </StyledAppBar >

  )
}