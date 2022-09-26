import { Stack, Collapse, IconButton, Slide, Paper } from "@mui/material"
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
  setOpenSubMenu: Dispatch<SetStateAction<boolean>>
}

export const Menu = (prop: Prop) => {
  const {
    openMenuPerfil,
    setOpenMenuPerfil,
    openMenu,
    setOpenMenu,
    openSubMenu,
    setOpenSubMenu
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
      sx={{ width: '50%', height: '100%' }}>


      <Stack
        alignItems='center'
        direction='row'
        sx={{ background: '#3d3d3d', borderRadius: 3, p: .2, pl: 1, pr: 1, position: 'relative' }} >

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

        {/* <Collapse orientation={openSubMenu ? 'vertical' : 'horizontal'} in={openSubMenu}>
          <Slide in={openSubMenu}>
            <Stack sx={{ borderRadius: 8 }}>
              <Paper sx={{ background: '#3d3d3d' }}>
                {appBarAction}
              </Paper>
            </Stack>
          </Slide>
        </Collapse> */}

      </Stack>
    </Stack >
  )
}