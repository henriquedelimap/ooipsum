import { Fade, Stack, Typography } from "@mui/material"
import { useBlogConfig } from "../../Common/Context/BlogConfig"
import { Script } from "../../Common/Script"


// CARD QUE COMPOEM CTA DESTINADO A EXIBIR PRODUTOS, INFORMAÇÕES, NA HOME ETC

export const CardMain = () => {
  const { blogConfig, loading } = useBlogConfig()

  return (
    <Fade in={!loading}>

      <Stack direction='row' spacing={4} sx={{ height: 480, p: 4 }}>
        {
          blogConfig?.homeMainCards.map((item: any, index: any) => (
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
                fontFamily='Old Standard TT'
                sx={{ position: 'absolute', top: '-12%' }}
              >{item.background}</Typography>
            </Stack>

          ))
        }

      </Stack>
    </Fade>

  )
}