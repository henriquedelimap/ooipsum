import * as React from 'react'
import { AppBar, Avatar, Box, Button, ButtonBase, ButtonGroup, Collapse, Fade, IconButton, Paper, Slide, Stack, Tab, Tabs, Toolbar, Typography, useScrollTrigger } from "@mui/material"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logo } from "../../assets/logoipsum-268"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from '../../Utils'
import { useBlogConfig } from '../../Common/Context/BlogConfig'
import { useAuthContext } from '../../Common/Context/Auth'
import { MenuAuthenticated, MyPerfilMenu } from '../MyPerfilMenu/myPerfilMenu'
import { useInternalConfig } from '../../Common/Context/InternalConfig'
import { MdAdd, MdOutlineKeyboardArrowDown } from 'react-icons/md'
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
              // onMouseLeave={() => setOpenSubMenu(false)}
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
          openMenuPerfil={openMenuPerfil}
          setOpenMenuPerfil={setOpenMenuPerfil}
        />

        {!!usuario
          ? <Stack alignItems='center' spacing={1} direction='row' sx={{ p: 1, zIndex: 8000 }}>



            <Button size='small' endIcon={<MdAdd color='#fff' fontSize={32} />} onClick={() => navigate(`/admin/blog`)} sx={{ background: '#3d3d3d', borderRadius: 2, pr: 2, pl: 2, '&:hover': { background: '#3d3d3d', opacity: .4 }, }}>
              <Typography variant='h6' color='#fff' fontFamily='Outfit' textTransform='lowercase'>
                criar
              </Typography>
            </Button>

            <Avatar onMouseEnter={() => setOpenMenuPerfil(true)} sx={{ width: 40, height: 40, borderRadius: openMenuPerfil ? 6 : 2 }} />
          </Stack>
          : <BtnAcessar openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />
        }


        <PerfilMenu openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />

      </>
    </StyledAppBar >

  )
}