import { Stack, Typography } from "@mui/material"
import { Script } from "../../Common/Script"


// CARD QUE COMPOEM CTA DESTINADO A EXIBIR PRODUTOS, INFORMAÇÕES, NA HOME ETC

export const CardMain = () => {
  return (
    <Stack direction='row' spacing={4} sx={{ height: 480, p: 4 }}>
      {
        Script.homeMainCards.map((item, index) => (
          <Stack
            key={index}
            alignItems='center'
            spacing={2}
            sx={{
              width: '100%',
              bgcolor: '#fafafa',
              p: 2,
              overflow: 'hidden',
              position: 'relative'
            }}>
            <Typography
              fontSize={320}
              fontWeight={900}
              color='#dbdbdb'
              sx={{ position: 'absolute', top: '-12%' }}
            >{item.background}</Typography>
          </Stack>

        ))
      }

    </Stack>
  )
}