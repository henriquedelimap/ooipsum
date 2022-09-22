import { Stack, Grid, Chip, IconButton } from "@mui/material"
import { MdShare } from "react-icons/md"

export const PostPageMoreAction = ({ page }: { page: any }) => {
  return (
    <Stack direction='row' alignItems='center'>
      <Grid container sx={{ height: '100%', maxWidth: '80vw' }} rowGap={1} columnGap={.5}>


        <Chip label='design' size='medium' />
        <Chip label='lorem ipsum' size='medium' />

      </Grid>

      <Stack direction='row' spacing={1}>
        <IconButton size='medium' sx={{ borderRadius: '.4rem', border: '1px solid #dbdbdb' }}>
          <MdShare />
        </IconButton>

        <IconButton size='medium' sx={{ borderRadius: '.4rem', border: '1px solid #dbdbdb' }}>
          <MdShare />
        </IconButton>

        <IconButton size='medium' sx={{ borderRadius: '.4rem', border: '1px solid #dbdbdb' }}>
          <MdShare />
        </IconButton>

        <IconButton size='medium' sx={{ borderRadius: '.4rem', border: '1px solid #dbdbdb' }}>
          <MdShare />
        </IconButton>
      </Stack>

    </Stack>


  )
}