import { useLayoutEffect, useState } from 'react'
import { Avatar, Button, Stack } from "@mui/material"
import { MdAdd } from 'react-icons/md'
import { useNavigate } from "react-router-dom"

import { useBlogConfig } from '../../Common/Context/BlogConfig'
import { useAuthContext } from '../../Common/Context/Auth'
import { useInternalConfig } from '../../Common/Context/InternalConfig'
import { StyledAppBar } from './LayouteAppBar'
import { BtnAcessar } from '../../Pages/Acessar/btnAcessar'
import { Menu } from './Menu'
import { PerfilMenu } from '../MyPerfilMenu/MenuPerfil'



export const MyAppBar = () => {

  const { setAppBarAction, pathname } = useInternalConfig()

  const { blogConfig, loading } = useBlogConfig()
  const { usuario } = useAuthContext()
  const navigate = useNavigate()

  const [openMenuPerfil, setOpenMenuPerfil] = useState(false)

  useLayoutEffect(() => {
    setAppBarAction(blogConfig?.appBarListItems)
  }, [!!blogConfig, !!pathname])

  return (
    <StyledAppBar>
      <>
        <Menu
          openMenuPerfil={openMenuPerfil}
          setOpenMenuPerfil={setOpenMenuPerfil}
        />
        {
          !!usuario
            ? <Stack
              alignItems='center'
              spacing={.5}
              direction='row'
              sx={{
                zIndex: 8000
              }}
            >
              <Button
                size='small'
                onClick={() => navigate(`/admin/blog`)}
                sx={{
                  background: '#f6f6f6',
                  borderRadius: 1,
                  '&:hover': {
                    background: '#f6f6f6',
                    opacity: .7,
                    color: '#000'
                  },
                }}>
                <MdAdd color='#6d6d6d' fontSize={26} />
              </Button>

              <Avatar
                sx={{
                  background: '#f6f6f6',
                  height: 40,
                  borderRadius: openMenuPerfil ? 6 : 1
                }}
                onClick={() => {
                  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    setOpenMenuPerfil(!openMenuPerfil)
                  }
                }}
                onMouseEnter={() => setOpenMenuPerfil(true)}
              />
            </Stack>
            : <BtnAcessar openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />
        }


        <PerfilMenu openMenuPerfil={openMenuPerfil} setOpenMenuPerfil={setOpenMenuPerfil} />

      </>
    </StyledAppBar >

  )
}