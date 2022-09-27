import { Stack, Avatar, Typography } from "@mui/material"
import { useAuthContext } from "../../../Common/Context/Auth"

export const ConfigurarHeader = () => {
  const { usuario } = useAuthContext()
  return (
    <Stack spacing={4} alignItems='center' sx={{ p: 4 }}>
      <Avatar sx={{ width: 200, height: 200 }} />

      <Stack alignItems='center' >
        <Stack direction='row' spacing={1}>
          <Typography
            fontFamily='Old Standard TT'
            textTransform='capitalize'
            variant='h4'>
            olá,
          </Typography>
          <Typography
            fontFamily='Old Standard TT'
            variant='h4'>
            {usuario?.username}
          </Typography>
        </Stack>
        <Typography
          color='#6d6d6d'
          variant='subtitle1'
          fontFamily='Outfit'
          align='center'
        >
          Gerencie suas informações para que o blog atenda suas necessidades
        </Typography>
      </Stack>
    </Stack>
  )
}