import { Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { MyAppBar } from '../../Components/AppBar/appBar'
import { drawerWidth, MyAdminMenu } from './Drawer'

export const AdminDefaultPage = () =>
  <Stack sx={{ position: 'relative', background: '#fafafa', height: '100%' }}>
    <MyAppBar />
    <Stack sx={{ height: { xs: 38, md: 44 }, width: '100%' }} />
    <MyAdminMenu />
    <Stack direction='row' sx={{ width: '100%' }}>
      <Stack sx={{ width: window.location.pathname.split('/')[2] === 'blog' ? '0%' : drawerWidth, display: { xs: 'none', md: 'block' } }} />
      <Stack sx={{ width: { xs: '100%', md: `calc(100% - ${window.location.pathname.split('/')[2] === 'blog' ? '0%' : drawerWidth})` } }} >
        <Outlet />
      </Stack>
    </Stack>
  </Stack >
