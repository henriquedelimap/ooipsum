import { Button, Typography } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
interface Props {
  setMouseEntering: Dispatch<SetStateAction<string>>
  mouseEntering: string
  openContact: boolean
  setOpenContact: Dispatch<SetStateAction<boolean>>
}
export const BtnContact = (props: Props) => {
  const { setMouseEntering, mouseEntering, openContact, setOpenContact } = props

  return (

    <Button
      onMouseEnter={() => setMouseEntering('#bdbdbd')}
      onMouseLeave={() => openContact ? setMouseEntering('#bdbdbd') : setMouseEntering('#fafafa')}
      onClick={() => {
        setOpenContact(!openContact)
        setMouseEntering('#bdbdbd')
      }}
      sx={{
        height: '100%',
        width: '11.11%',

        borderLeft: '2px solid #dbdbdb',
        transition: 'all ease-in 200ms',
        cursor: 'pointer',
        background: openContact ? '#fafafa' : 'transparent',
        '&:hover': {
          background: '#fafafa',
        },
      }}>

      <Typography
        fontWeight={100}
        variant='h1'
        fontFamily='Old Standard TT'
        sx={{
          userSelect: 'none',
          letterSpacing: '-.4rem',
          fontStyle: 'oblique',
          transform: 'rotate(-270deg)'
        }}
        color={mouseEntering}>
        contato
      </Typography>
    </Button>
  )

}