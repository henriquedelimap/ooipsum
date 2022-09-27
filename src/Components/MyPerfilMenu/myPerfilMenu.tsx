import { Button, MenuItem, Typography, Stack, LinearProgress, Fade, Box, Divider, Slide, Collapse, IconButton } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { MdArrowBack } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../Common/Context/Auth"
import { useInternalConfig } from "../../Common/Context/InternalConfig"
import { LoginForm } from "../../Pages/Acessar/loginForm"

interface IMenuItem {
  label: string
  to: string
}
const MyMenuItem = (prop: IMenuItem) => {
  const { label, to } = prop
  const navigate = useNavigate()
  return (
    <MenuItem sx={{ width: '100%' }} onClick={() => navigate(to)}>
      <Typography color='#3d3d3d' variant='body1' fontFamily='Outfit'>
        {label}
      </Typography>
    </MenuItem>
  )
}

interface IUserStatistics {
  counter: number
  label: string
  setOpenPostagens: Dispatch<SetStateAction<boolean>>
  openPostagens: boolean

}
const UserStatistics = (prop: IUserStatistics) => {
  return (
    <Stack onClick={() => prop.setOpenPostagens(!prop.openPostagens)} alignItems='center' sx={{ p: .5, cursor: 'pointer' }} >
      <Typography fontFamily='Outfit' lineHeight='1.6rem' color='#6d6d6d' fontWeight={500} variant='h6'>{prop.counter}</Typography>
      <Typography color='#9d9d9d' variant='subtitle1' fontFamily='Outfit'>{prop.label}</Typography>
    </Stack>
  )
}

export const MenuAuthenticated = () => {
  const navigate = useNavigate()
  const { logout, usuario } = useAuthContext()
  const [openPostagens, setOpenPostagens] = useState<boolean>(false)

  return (

    <>

      <Collapse in={!openPostagens}>
        <Slide direction="left" in={!openPostagens}>

          <Stack spacing={3} sx={{ width: '100%', height: 'auto', p: 2 }}>

            <Stack alignItems='center' spacing={3} sx={{ width: '100%', pt: 6 }} >
              <Stack alignItems='center'>
                <Typography fontWeight={900} color='#6d6d6d' variant='h5' align='center'>{usuario?.username}</Typography>
                <Typography fontFamily='Outfit' color='#9d9d9d' variant='subtitle1' align='center'>{usuario?.accountType}</Typography>
              </Stack>

              <Stack spacing={1} justifyContent='center' direction='row' sx={{ width: '100%' }}>
                <UserStatistics setOpenPostagens={setOpenPostagens} openPostagens={openPostagens} counter={10} label='postagens' />
                <UserStatistics setOpenPostagens={setOpenPostagens} openPostagens={openPostagens} counter={12} label='curtidas' />
                <UserStatistics setOpenPostagens={setOpenPostagens} openPostagens={openPostagens} counter={30} label='visualizações' />
              </Stack>
            </Stack>

            <Divider />

            <Stack spacing={.5}>
              <MyMenuItem label='gerenciar blog' to='/admin' />
              <MyMenuItem label='configuração' to='/admin/configurar' />
              <MyMenuItem label='ajuda' to='/ajuda' />
            </Stack>


            <Button fullWidth sx={{ width: '100%' }} onClick={() => {
              logout()
              navigate('/')
            }}>
              <Typography color='error' variant='body1' fontFamily='Outfit'>
                sair da conta
              </Typography>
            </Button>
          </Stack>
        </Slide>
      </Collapse>

      <Collapse in={openPostagens}>
        <Slide direction='left' in={openPostagens}>

          <Stack spacing={3} sx={{ width: '100%', height: 'auto', p: 2 }}>
            <Stack alignItems='start' sx={{ width: '100%', mt: -1.5, ml: -1.2 }}>

              <IconButton onClick={() => setOpenPostagens(!openPostagens)}>
                <MdArrowBack />
              </IconButton>
            </Stack>

          </Stack>

        </Slide>
      </Collapse>
    </>


  )
}

export const MyPerfilMenu = () => {
  const { loading, usuario } = useAuthContext()

  return (
    <>
      {
        !!usuario
          ? <MenuAuthenticated />
          : <Box sx={{ p: 3 }}><LoginForm /></Box>
      }
      <Fade in={loading}>
        <LinearProgress sx={{ mb: -1 }} />
      </Fade>
    </>
  )
}