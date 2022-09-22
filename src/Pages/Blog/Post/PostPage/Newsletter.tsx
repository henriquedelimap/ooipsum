import { Stack, Container, Typography } from "@mui/material"
import { Script } from "../../../../Common/Script"
import { InMail } from "../../../Home/inMail"

export const PostPageNewsletter = () => {
  return (
    <Stack justifyContent='center' sx={{ height: '90vh', background: '#fff', mt: 8, mb: 8, p: 4, borderRadius: '4rem' }}>

      <Stack spacing={8}>
        <Stack spacing={.5}>
          <Typography variant='h4' align='center'>
            {Script.newsletter.title}
          </Typography>
          <Typography fontWeight={300} fontFamily='Outfit' variant='h6' align='center'>
            {Script.newsletter.subtitle}

          </Typography>
        </Stack>
        <InMail />
      </Stack>
    </Stack>
  )
}