import { Box, Stack, Paper } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { OOLogo } from "../../assets/logoOOtech"
import { useBlogConfig } from "../../Common/Context/BlogConfig"
import { useInternalConfig } from "../../Common/Context/InternalConfig"
import { MyAppBar } from "../../Components/AppBar/appBar"
import './style.css'

export const DefaultPage = () => {
  const { loading } = useBlogConfig()
  const { blogConfig } = useBlogConfig()
  return (
    <Box sx={{ position: 'relative' }}>

      <MyAppBar />

      <Box sx={{ height: 64, width: '100%', background: '#fafafa' }} />

      <Paper sx={{ minHeight: '100vh', pb: 8, background: '#fafafa' }}>
        <Outlet />
      </Paper>

      <Stack sx={{
        position: 'sticky',
        bottom: 0,
        zIndex: -10,
        height: 120,
        background: '#ffffff'
      }}>
        <OOLogo />
      </Stack>
    </Box>
  )
}
