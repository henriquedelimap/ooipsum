import { Collapse, Slide, Stack, Typography, Divider, Button, IconButton } from "@mui/material"
import { Dispatch, ReactElement, ReactNode, SetStateAction, useState } from "react"
import { MdArrowBack } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../Common/Context/Auth"
import { MyMenuItem } from "./MenuItems"
import { UserStatistics } from "./UserStatistics"

interface IMenuAuthenticatedLayout {
  open: boolean
  children: ReactNode | ReactElement
}

const MenuAuthenticatedLayout = (prop: IMenuAuthenticatedLayout) => {
  return (
    <>
      <Collapse in={prop.open}>
        <Slide direction="left" in={prop.open}>
          <Stack spacing={3} sx={{ width: '100%', height: 'auto', p: 2 }}>
            {prop.children}
          </Stack >
        </Slide>
      </Collapse>
    </>
  )
}


interface ISubMenuAuthenticatedLayout extends IMenuAuthenticatedLayout {
  setOpenPostagens: Dispatch<SetStateAction<boolean>>
}


const SubMenuAuthenticatedLayout = (prop: ISubMenuAuthenticatedLayout) => {
  return (
    <MenuAuthenticatedLayout open={prop.open}>
      <Stack alignItems='start' sx={{ width: '100%', mt: -1.5, ml: -1.2 }}>

        <IconButton onClick={() => prop.setOpenPostagens(!prop.open)}>
          <MdArrowBack />
        </IconButton>

        {prop.children}


      </Stack>

    </MenuAuthenticatedLayout>
  )
}


export const MenuAuthenticated = () => {
  const navigate = useNavigate()
  const { logout, usuario } = useAuthContext()
  const [openPostagens, setOpenPostagens] = useState<boolean>(false)

  return (

    <>
      <MenuAuthenticatedLayout open={!openPostagens}>

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

      </MenuAuthenticatedLayout>

      <SubMenuAuthenticatedLayout setOpenPostagens={setOpenPostagens} open={openPostagens}>


      </SubMenuAuthenticatedLayout>
    </>


  )
}