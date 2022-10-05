import { Paper, Stack, Autocomplete, TextField, FormControl, InputBase } from "@mui/material"
import { useState, Dispatch, SetStateAction } from "react"
import { AccordionList } from "./items/AccordionList";
import { SearchImagePaper } from "./ImagePaper";
import './style.css'
import { usePostContext } from "../../../../Common/Context/Post/usePostContext";


const options = [
  'nextoo',
  'lapsoo',

]

export const MenuLateral = ({
  openMenuLateral,
  setOpenMenuLateral }: {
    openMenuLateral: boolean
    setOpenMenuLateral: Dispatch<SetStateAction<boolean>>
  }) => {
  const { handlePostHeader, post } = usePostContext()
  return (

    <Paper
      className='paperSlide'
      sx={{
        position: 'fixed',
        height: { xs: '64vh', md: '84vh' },
        transform: { xs: !openMenuLateral ? 'scale(1)' : 'scaleY(.6)', md: 'scaleY(1)' },
        opacity: { xs: !openMenuLateral ? '1' : '0', md: '1' },
        borderRadius: '3px',
        transition: 'all 300ms ease-in-out',
        bottom: 0,
        background: '#ffffffaf',
        backdropFilter: 'blur(32px)',
        minWidth: { xs: '100%', md: '320px' },
        transformOrigin: 'buttom',
        right: { xs: 0, md: 12 },
        overflow: 'hidden',

      }}>
      <Stack
        direction='row-reverse'
        sx={{
          overflow: 'hidden', width: '100%', height: '100%',
          pt: 3.2,
          borderRadius: { xs: !openMenuLateral ? '32px 32px 0 0 ' : '0', md: '3px' },
        }}
      >
        <Stack
          spacing={2}
          sx={{
            minWidth: { xs: '100%', md: '320px' },
            height: { xs: '64vh', md: '84vh' },
            p: 1.4,
            pb: 6.4,
            pt: 3.2,
            overflowX: 'scroll',
            position: 'fixed',
          }} >
          <TextField fullWidth sx={{ '& input': { border: 'none' } }} id='subtitle' name='subtitle' onChange={handlePostHeader} label='subtítulo' helperText='' />
          <TextField fullWidth sx={{ '& input': { border: 'none' } }} name='category' id='category' onChange={handlePostHeader} label='categoria' helperText='' />

          <AccordionList />
        </Stack>

        <SearchImagePaper />
      </Stack>
    </Paper>

  )
}
