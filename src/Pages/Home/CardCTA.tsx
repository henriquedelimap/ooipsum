import { Container, Stack } from "@mui/material"
import { CardMain } from "./CardMain"
import { InMail } from "./inMail"

export const CardCTA = () => {
  return (
    <Container maxWidth='lg' sx={{ zIndex: 2 }}>
      <Stack sx={{ width: '100%', boxShadow: '0', mt: -9.95 }}>
        <Stack bgcolor='#fff'>

          {/* EMAIL */}
          <InMail />

          {/* PRODUTOS, INFORMAÇÕES, PROVA SOCIAL, ETC... */}
          <CardMain />

        </Stack>
      </Stack>
    </Container>
  )
}