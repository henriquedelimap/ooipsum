import styled from "@emotion/styled"
import { Stack, Typography, useTheme } from "@mui/material"
import { useNavigate } from 'react-router-dom'

export const OOLogo = () => {
  return (
    <Typography
      fontWeight={400}
      fontFamily='Outfit, sans-serif'
      variant={'h6'}
    >

      <Stack sx={{ width: '100%' }} direction='row' justifyContent="center" alignItems='center'>
        <Azul >oo</Azul><Vermelho>tech</Vermelho>
      </Stack>
    </Typography>
  )
}

const Azul = styled('p')(({ }) => ({
  color: '#0066cc',
  letterSpacing: -2.8,
  paddingRight: 2
}))
const Vermelho = styled('p')(({ }) => ({
  color: '#cc0000'
}))
