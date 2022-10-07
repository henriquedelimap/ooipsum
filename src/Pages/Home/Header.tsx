import { Stack, Typography } from "@mui/material"
import { useState } from "react"
import { BtnContact } from "./BtnContact"
import { CardContact } from "./CardContact"
import './styles.css'
export const HomeHeader = () => {

  const [mouseEntering, setMouseEntering] = useState('#fff')
  const [openContact, setOpenContact] = useState(false)

  return (
    <Stack
      justifyContent='end'
      alignItems='center'
      direction='row'
      sx={{ width: '100%', height: 480, background: openContact ? '#fafafa' : '#1d1d1d', zIndex: 0, position: 'relative' }}
    >
      <CardContact
        setMouseEntering={setMouseEntering}
        mouseEntering={mouseEntering}
        openContact={openContact}
        setOpenContact={setOpenContact}
      />
      <Stack className='paper' sx={{ width: '100%', display: !openContact ? 'flex' : 'none', position: 'absolute', left: 0, right: 0 }}>
        <Typography className='text' sx={{ animation: 'appear 6s ease-in' }} align='center' variant='h1' color='#fff'>hello</Typography>
        <Typography className='text' sx={{ animation: 'appear 6s ease-in 6.3s' }} align='center' variant='h1' color='#fff'>oi</Typography>
      </Stack>
      <BtnContact
        setMouseEntering={setMouseEntering}
        mouseEntering={mouseEntering}
        openContact={openContact}
        setOpenContact={setOpenContact}
      />
    </Stack >
  )
}