import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { MdOutlineSettings } from "react-icons/md"
import { BsVectorPen } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { useBlogConfig } from "../../../Common/Context/BlogConfig"

export const drawerWidth = '240px'
export const MyAdminMenu = () => {

  const { blogConfig, siteName } = useBlogConfig()
  const navigate = useNavigate()


  const [firstPartName, setFirstPartName] = useState<string | undefined>(undefined)
  const [secondPartName, setSecondPartName] = useState<string | undefined>(undefined)
  const [selected, setSelected] = useState<string>()


  const length = siteName?.length

  useEffect(() => {
    setSelected(window.location.pathname.split('/')[2])

    if (blogConfig?.siteName.split(' ').length === 1) {
      setFirstPartName(siteName?.split('').splice(0, length / 2 - 1).join(''))
      setSecondPartName(siteName?.split('').splice(length / 2 - 1, length).join(''))
    } else {
      setFirstPartName(siteName?.split(' ')[0])
      setSecondPartName(siteName?.split(' ')[1])
    }

  })


  const itens = [
    {
      icon: <BsVectorPen />,
      label: 'criar texto',
      to: 'blog'
    },
    {
      icon: <MdOutlineSettings />,
      label: 'configurar',
      to: 'configurar'
    }
  ]
  return (
    <Drawer sx={{ zIndex: 3000, '& .MuiDrawer-paper': { width: drawerWidth }, display: { xs: 'none', md: 'block', lg: 'block' } }} variant='permanent'>
      <Stack spacing={8} justifyContent='space-between' sx={{ pt: 4, pb: 4, height: '100%' }}>
        <Stack sx={{ cursor: 'pointer' }} onClick={() => navigate('/admin')} direction='row' justifyContent='center' >
          <Typography color='primary' variant='h6' fontWeight={600}>
            {firstPartName}
          </Typography>
          <Typography color='#3d3d3d' variant='h6' fontWeight={600}>
            {secondPartName}
          </Typography>
        </Stack>

        <List sx={{ height: '100%' }}>
          {
            itens.map((item, index) => (
              <ListItem onClick={() => navigate(`${item.to}`)} key={index} >
                <ListItemButton sx={{ '& .Mui-selected': { background: 'red' } }} selected={selected === item.to} >
                  <ListItemIcon sx={{ fontSize: 24 }}>{item.icon}</ListItemIcon>
                  <ListItemText >
                    <Typography sx={{ '&:first-letter': { textTransform: 'capitalize' } }} fontFamily='Outfit'>
                      {item.label}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>

            ))
          }
        </List>

        <Button >
          ajuda
        </Button>
      </Stack>
    </Drawer>
  )
}
