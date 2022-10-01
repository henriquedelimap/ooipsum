import { Stack, Container, Typography } from "@mui/material"
import { useBlogConfig } from "../../../../Common/Context/BlogConfig"
import { Script } from "../../../../Common/Script"
import { InMail } from "../../../Home/inMail"

export const PostPageNewsletter = () => {
  const { blogConfig } = useBlogConfig()
  return (
    <Stack justifyContent='center' sx={{ height: '90vh', background: '#fff', mt: 8, mb: 8, p: 4, borderRadius: '64px' }}>

      <Stack spacing={8}>
        <Stack spacing={.5}>
          <Typography variant='h4' align='center'>
            {blogConfig?.newsletter.title}
          </Typography>
          <Typography fontWeight={300} fontFamily='Outfit' variant='h6' align='center'>
            {blogConfig?.newsletter.subtitle}

          </Typography>
        </Stack>
        <InMail />
      </Stack>
    </Stack>
  )
}