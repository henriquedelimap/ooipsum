import { Stack } from "@mui/material"
import { CardCTA } from "./CardCTA"
import { HomeHeader } from "./Header"

export const Home = () => {

  return (
    <Stack alignItems='center' >
      <HomeHeader />
      <CardCTA />
    </Stack >
  )
}