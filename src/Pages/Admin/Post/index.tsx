import { Stack, Box } from "@mui/material"
import { useEffect, useState } from 'react'

import { useInternalConfig } from '../../../Common/Context/InternalConfig'
import { EditorDeTexto } from "../../../Components/TextEditor/EditorEx"
import { MenuLateral } from "./MenuLateral"
import { HeaderBlogPost } from "./PostHeader"




const frase = '<h2>uma página em branco é uma oportunidade para criar algo novo...</h2>'


export const BlogPost = () => {
  const [openMenuLateral, setOpenMenuLateral] = useState<boolean>(true)
  const { setAppBarAction } = useInternalConfig()

  const appBarOption = [
    {
      label: 'post',
      to: 'post'
    }
  ]

  useEffect(() => {
    setAppBarAction(appBarOption)
  }, [])


  return (
    <Stack sx={{ height: '100% ', position: 'relative', overflow: 'hidden' }} >
      <Box sx={{ background: '#fff', width: '100%', mt: 8 }}>
        <HeaderBlogPost openMenuLateral={openMenuLateral} setOpenMenuLateral={setOpenMenuLateral} />
      </Box>

      <Stack direction='row' sx={{ height: '100%', position: 'relative', overflow: 'hidden', mt: { xs: 8, md: 7 } }}>
        <Box sx={{ background: '#fafafa', width: { xs: 'calc(100% - 0px)', md: openMenuLateral ? 'calc(100% - 340px)' : 'calc(100% - 0px)' }, height: '100%', overflow: 'scroll', position: 'fixed' }}>
          <EditorDeTexto editable={true} content={frase} />
        </Box>
        <MenuLateral openMenuLateral={openMenuLateral} setOpenMenuLateral={setOpenMenuLateral} />
      </Stack>

    </Stack>
  )
}