import { Stack, Button } from '@mui/material'
import { useEffect } from 'react'
import { Routes, Route, useParams, Outlet } from 'react-router-dom'
import { useAuthContext } from '../../Common/Context/Auth'
import { useInternalConfig } from '../../Common/Context/InternalConfig'
import { MyAppBar } from '../../Components/AppBar/appBar'
import { drawerWidth, MyAdminMenu } from './menu'

export const AdminDefaultPage = () => {
  const { id } = useParams()

  return (
    <Stack sx={{ position: 'relative', background: '#fff', height: '100%' }}>
      <MyAppBar />
      <MyAdminMenu />
      <Stack direction='row' sx={{ width: '100%' }}>
        <Stack sx={{ width: drawerWidth, display: { xs: 'none', md: 'block' } }} />
        <Stack spacing={4} sx={{ pt: 2, width: { xs: '100%', md: `calc(100% - ${drawerWidth})` } }} >
          <Outlet />
        </Stack>
      </Stack>
    </Stack >
  )
}