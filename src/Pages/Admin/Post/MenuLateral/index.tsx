import { Paper, Stack, Autocomplete, TextField } from "@mui/material"
import { useState, Dispatch, SetStateAction } from "react"
import { AccordionList } from "./items/AccordionList";
import { SearchImagePaper } from "./ImagePaper";
import './style.css'

export const MenuLateral = ({
  openMenuLateral,
  setOpenMenuLateral }: {
    openMenuLateral: boolean
    setOpenMenuLateral: Dispatch<SetStateAction<boolean>>
  }) =>

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
        <TextField fullWidth sx={{ '& input': { border: 'none' } }} id='subtitulo' label='subtítulo' helperText='' />
        <Autocomplete
          size='small'
          id='categoria'
          sx={{ fontFamily: 'Outfit' }}
          options={options}
          renderInput={(params) => <TextField  {...params} label='categoria' />}
        />
        <AccordionList />
      </Stack>

      <SearchImagePaper />
    </Stack>
  </Paper>


const options = [
  'nextoo',
  'lapsoo',
  'lapsoo',
  'lapsoo',
  'lapsoo',
  'lapsoo',
  'lapsoo',
]
