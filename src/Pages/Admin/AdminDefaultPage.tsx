import { Stack } from '@mui/system'
import { Routes, Route, useParams, Outlet } from 'react-router-dom'
import { MyAppBar } from '../DefaultPage/appBar'
import { drawerWidth, MyAdminMenu } from './menu'

export const AdminDefaultPage = () => {
  const { id } = useParams()
  return (
    <Stack sx={{ position: 'relative', background: '#fff', height: '100%' }}>
      <MyAdminMenu />
      <Stack direction='row' sx={{ width: '100%' }}>
        <Stack sx={{ width: drawerWidth, display: { xs: 'none', md: 'block' } }} />
        <Outlet />
      </Stack>
    </Stack >
  )
}