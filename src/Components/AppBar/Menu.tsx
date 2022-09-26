import { Stack, Collapse, IconButton } from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { MdMenu } from "react-icons/md"
import { useNavigate } from 'react-router-dom'
import { useInternalConfig } from "../../Common/Context/InternalConfig"


interface Prop {
  openMenuPerfil: boolean
  setOpenMenuPerfil: Dispatch<SetStateAction<boolean>>
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  openSubMenu: boolean
}

export const Menu = (prop: Prop) => {
  const {
    openMenuPerfil,
    setOpenMenuPerfil,
    openMenu,
    setOpenMenu,
    openSubMenu
  } = prop

  const { appBarAction, appBarSubMenu } = useInternalConfig()
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
      sx={{ width: '50%', height: '100%', zIndex: 8000 }}>


      <Stack
        alignItems='center'
        direction='row'
        sx={{ background: '#3d3d3d', borderRadius: 3, p: .2, pl: 1, pr: 1 }} >

        <Collapse in={!openMenu}>
          <Stack
            alignItems='center'
            sx={{ width: '100%', display: !openMenu ? 'flex' : 'none' }}
          >
            <IconButton >
              <MdMenu color='white' />
            </IconButton>
          </Stack>
        </Collapse>

        <Stack sx={{ borderRadius: 8 }}>
          <Collapse orientation='horizontal' in={openMenu}>
            {appBarAction}
          </Collapse>
        </Stack>

        <Stack sx={{ borderRadius: 8 }}>
          <Collapse orientation='horizontal' in={openSubMenu}>
            {appBarSubMenu}
          </Collapse>
        </Stack>

      </Stack>
    </Stack>
  )
}