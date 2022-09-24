import { Stack, Button } from "@mui/material"
import { PostLayout } from "../../Blog/Post/PostPage/PostLayout"
import { TextEditor } from "./TextEditor"
import { useEffect } from 'react'
import { useInternalConfig } from '../../../Common/Context/InternalConfig'

export const BlogPost = () => {

  const { setAppBarAction } = useInternalConfig()

  useEffect(() => {
    setAppBarAction(<Button>salvar</Button>)
  }, [])

  return (

    <Stack alignItems='end' sx={{ width: '100%' }}>
      <PostLayout edit={true} />

    </Stack>
  )
}