import { Stack, FormControl, InputBase, Button, Fade } from "@mui/material"
import { useBlogConfig } from "../../Common/Context/BlogConfig"
import { Script } from "../../Common/Script"

export const InMail = () => {
  const { blogConfig, loading } = useBlogConfig()
  return (
    <Fade in={!loading}>

      <Stack direction='row' >
        <FormControl sx={{ height: 80, borderBottom: '1px solid #dbdbdb' }} fullWidth>
          <InputBase
            placeholder={blogConfig?.newsletter.placeholder}
            sx={{ height: '100%', borderRadius: '.2rem 0 0 .2rem', }}
            startAdornment={Script.homeInput.icon}
            fullWidth
          />
        </FormControl>
        <Button sx={{ borderRadius: '0', width: 100, fontFamily: 'Outfit' }}>
          {blogConfig?.newsletter.button}
        </Button>
      </Stack>
    </Fade>
  )
}