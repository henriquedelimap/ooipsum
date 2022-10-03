import { Stack } from '@mui/material'
import { useEffect } from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { useBlogConfig } from '../../Common/Context/BlogConfig'
import { useInternalConfig } from '../../Common/Context/InternalConfig'
import { MyAppBar } from '../../Components/AppBar/appBar'
import { drawerWidth, MyAdminMenu } from './Drawer'

export const AdminDefaultPage = () => {
  const { id } = useParams()
  const { blogConfig } = useBlogConfig()
  const { setAppBarAction, setPostPage } = useInternalConfig()
  return (
    <Stack sx={{ position: 'relative', background: '#fff', height: '100%' }}>
      <MyAppBar />
      <MyAdminMenu />
      <Stack direction='row' sx={{ width: '100%' }}>
        <Stack sx={{ width: window.location.pathname.split('/')[2] === 'blog' ? '0%' : drawerWidth, display: { xs: 'none', md: 'block' } }} />
        <Stack sx={{ width: { xs: '100%', md: `calc(100% - ${window.location.pathname.split('/')[2] === 'blog' ? '0%' : drawerWidth})` } }} >
          <Outlet />
        </Stack>
      </Stack>
    </Stack >
  )
}