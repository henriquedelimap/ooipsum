import { Stack, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"

interface IUserStatistics {
  counter: number
  label: string
  setOpenPostagens: Dispatch<SetStateAction<boolean>>
  openPostagens: boolean

}
export const UserStatistics = (prop: IUserStatistics) => {
  return (
    <Stack
      onClick={() => prop.setOpenPostagens(!prop.openPostagens)}
      alignItems='center'
      sx={{ p: .5, cursor: 'pointer' }}
    >
      <Typography
        fontFamily='Outfit'
        lineHeight='1.6rem'
        color='#6d6d6d'
        fontWeight={500}
        variant='h6'>
        {prop.counter}
      </Typography>

      <Typography
        color='#9d9d9d'
        variant='subtitle1'
        fontFamily='Outfit'>
        {prop.label}
      </Typography>
    </Stack>
  )
}
