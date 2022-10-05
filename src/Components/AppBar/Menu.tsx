import { Stack, Collapse, IconButton, Typography } from "@mui/material"
import { Dispatch, SetStateAction, useState } from "react"
import { MdMenu } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import { useInternalConfig } from "../../Common/Context/InternalConfig"


interface Prop {
  openMenuPerfil: boolean
  setOpenMenuPerfil: Dispatch<SetStateAction<boolean>>
}

export const Menu = (prop: Prop) => {
  const {
    openMenuPerfil,
    setOpenMenuPerfil,
  } = prop
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <Stack
      alignItems='center'
      justifyContent='center'

      onClick={() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          setOpenMenu(!openMenu)
        }
      }}
      onMouseEnter={() => {
        openMenuPerfil ? setOpenMenuPerfil(true) : ''
        setOpenMenu(true)
      }
      }
      onMouseLeave={() => setOpenMenu(false)}
      sx={{ width: '50%' }}>

      <Stack
        alignItems='center'
        direction='row'
        sx={{ background: '#f6f6f6', height: 40, borderRadius: openMenu ? '3px' : 20, pl: openMenu ? 2 : 0, pr: openMenu ? 2 : 0 }} >
        <Collapse in={!openMenu}>
          <Stack
            alignItems='center'
            sx={{ width: '100%', display: !openMenu ? 'flex' : 'none' }}
          >
            <IconButton >
              <MdMenu color='#6d6d6d' />
            </IconButton>
          </Stack>
        </Collapse>

        <Stack >
          <Collapse orientation='horizontal' in={openMenu}>
            <MenuItems />

          </Collapse>
        </Stack>
      </Stack>
    </Stack >
  )
}


const MenuItems = () => {
  const navigate = useNavigate()
  const { appBarAction } = useInternalConfig()
  return (
    <Stack direction='row'   >
      {
        appBarAction?.map((item: any, index: any) => (
          <Typography
            key={index}
            color='#3d3d3d'
            variant='h6'
            fontWeight={300}
            onClick={(event: any) => {
              navigate(`/${item.to}`)
            }}
            sx={{ cursor: 'pointer', pl: 1, pr: 1, '&:hover': { fontWeight: 600 } }}
          >
            {item.label}
          </Typography>
        )
        )
      }
    </Stack>
  )
}