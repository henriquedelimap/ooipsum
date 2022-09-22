import { Stack, Typography } from "@mui/material"
import { useState } from "react"
import { Script } from "../../Common/Script"
import { BtnContact } from "./BtnContact"
import { CardContact } from "./CardContact"

export const HomeHeader = () => {

  const [mouseEntering, setMouseEntering] = useState('#fff')
  const [openContact, setOpenContact] = useState(false)

  return (
    <Stack
      justifyContent='center'
      direction='row'
      sx={{ width: '100%', height: 480, background: openContact ? '#fafafa' : '#1d1d1d', zIndex: 0, position: 'relative' }}
    >
      <CardContact
        setMouseEntering={setMouseEntering}
        mouseEntering={mouseEntering}
        openContact={openContact}
        setOpenContact={setOpenContact}
      />
      <BtnContact
        setMouseEntering={setMouseEntering}
        mouseEntering={mouseEntering}
        openContact={openContact}
        setOpenContact={setOpenContact}
      />
    </Stack >
  )
}