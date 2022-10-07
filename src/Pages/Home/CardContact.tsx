import { Button, Typography, Slide, Fade, Stack, Avatar } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import Logo from "../../assets/logo.svg"

interface Props {
  setMouseEntering: Dispatch<SetStateAction<string>>
  mouseEntering: string
  openContact: boolean
  setOpenContact: Dispatch<SetStateAction<boolean>>
}
export const CardContact = (props: Props) => {
  const { setMouseEntering, mouseEntering, openContact, setOpenContact } = props

  return (


    <Slide direction='down' in={openContact}>
      <Fade in={openContact}>
        <Stack

          alignItems='center'
          alignSelf='center'
          justifySelf='center'
          justifyContent='center'
          sx={{ width: '100%', height: '100%', display: openContact ? 'flex' : 'none' }}>
          <Avatar src={Logo} sx={{ width: 240, height: 240 }} />
        </Stack>
      </Fade>
    </Slide>
  )
}