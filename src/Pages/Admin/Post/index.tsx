import { Stack, Box } from "@mui/material"
import { useEffect } from 'react'

import { useInternalConfig } from '../../../Common/Context/InternalConfig'
import { EditorDeTexto } from "../../../Components/TextEditor/EditorEx"
import { MenuLateral } from "./MenuLateral"
import { HeaderBlogPost } from "./PostHeader"




const frase = '<h2>uma página em branco é uma oportunidade para criar algo novo...</h2>'


export const BlogPost = () => {

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
    <Stack sx={{ height: '100vh ', position: 'relative', overflow: 'hidden' }} >
      <Box sx={{ background: '#fff', width: '100%', mt: 8 }}>
        <HeaderBlogPost />
      </Box>

      <Stack direction='row' sx={{ height: '100%', position: 'relative', overflow: 'hidden', mt: 8 }}>
        <Box sx={{ background: '#fafafa', width: 'calc(100% - 340px)', height: '100%', overflow: 'scroll', position: 'fixed' }}>
          <EditorDeTexto editable={true} content={frase} />
        </Box>

        <MenuLateral />
      </Stack>

    </Stack>
  )
}