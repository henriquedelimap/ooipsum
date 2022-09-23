import { Button, Menu, MenuItem, MenuList, Typography, Stack, Avatar, LinearProgress, Fade, Box } from "@mui/material"
import { Dispatch, ReactNode, SetStateAction } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../Common/Context/Auth"
import { LoginForm } from "../../Pages/Acessar/loginForm"

interface Props {
  children?: any
  anchorEl: null | HTMLElement
  setAnchorEl: Dispatch<SetStateAction<null | HTMLElement>>
  open: boolean
}

const MenuDefaultPaper = (menuProp: Props) => {
  return (
    <Menu
      id='menu-perfil'
      anchorEl={menuProp.anchorEl}
      open={menuProp.open}
      onClose={() => menuProp.setAnchorEl(null)}
      sx={{
        width: 320,
        borderRadius: '.32rem',
      }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          width: 400,
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      {menuProp.children}
    </Menu>
  )
}

export const MenuAuthenticated = (menuAuthProp: Props) => {
  const navigate = useNavigate()
  const { login, logout, user } = useAuthContext()
  return (
    <>
      <Stack sx={{ height: 140, position: 'relative' }} alignItems='center'>
        <Stack
          className='paper'
          sx={{
            mt: -1,
            height: '50%',
            backgroundImage: '#3d3d3d'
          }}
        />
        <Avatar sx={{
          width: 64,
          height: 64,
          mt: -4
        }} />

        <Typography>{user?.user.username}</Typography>

      </Stack>

      <Link style={{ textDecoration: 'none' }} to={`/${user?.user.username}`}>
        <MenuItem sx={{ width: '100%' }} onClick={() => {
          menuAuthProp.setAnchorEl(null)
        }}
        >
          <Typography >
            meu perfil
          </Typography>
        </MenuItem>
      </Link>
      {
        user?.user.accountType.includes('dev')
          ? <Link style={{ textDecoration: 'none' }} to={'/admin'}>
            <MenuItem sx={{ width: '100%' }} onClick={() => {
              menuAuthProp.setAnchorEl(null)
            }}
            >
              <Typography >
                gerenciar plataforma
              </Typography>
            </MenuItem>
          </Link> : ''
      }

      <MenuItem sx={{ width: '100%' }} onClick={() => {
        menuAuthProp.setAnchorEl(null)
        navigate(`${user?.user.username}/config`)

      }}
      >
        <Typography >
          configuração
        </Typography>
      </MenuItem>
      <MenuItem sx={{ width: '100%' }} onClick={() => {
        menuAuthProp.setAnchorEl(null)
        navigate('/ajuda')

      }}>
        <Typography >
          ajuda
        </Typography>
      </MenuItem>
      <Button sx={{ width: '100%' }} onClick={() => {
        logout()
        menuAuthProp.setAnchorEl(null)

      }}>sair da contato</Button>
    </>
  )
}

export const MyPerfilMenu = (prop: Props) => {
  const { anchorEl, setAnchorEl, open } = prop
  const navigate = useNavigate()
  const { login, logout, loading, user } = useAuthContext()

  return (
    <MenuDefaultPaper anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open}>
      {
        !!user
          ? <MenuAuthenticated anchorEl={anchorEl} setAnchorEl={setAnchorEl} open={open} />
          : <Box sx={{ p: 3 }}><LoginForm /></Box>
      }
      <Fade in={loading}>
        <LinearProgress sx={{ mb: -1 }} />
      </Fade>
    </MenuDefaultPaper>
  )
}