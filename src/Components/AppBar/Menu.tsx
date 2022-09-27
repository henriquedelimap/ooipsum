import { Stack, Collapse, IconButton, Slide, Paper } from "@mui/material"
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
        sx={{ background: '#3d3d3d', borderRadius: openMenu ? 2 : 20, pl: openMenu ? 2 : 0, pr: openMenu ? 2 : 0, p: .4 }} >

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

        <Stack >
          <Collapse orientation='horizontal' in={openMenu}>
            {appBarAction}

          </Collapse>
        </Stack>



      </Stack>
    </Stack >
  )
}