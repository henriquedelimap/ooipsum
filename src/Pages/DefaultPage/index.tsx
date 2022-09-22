import { Box, Stack, Paper } from "@mui/material"
import { Container } from "@mui/system"
import { Outlet } from "react-router-dom"
import { OOLogo } from "../../assets/logoOOtech"
import { MyAppBar } from "./appBar"

export const DefaultPage = () => {
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
