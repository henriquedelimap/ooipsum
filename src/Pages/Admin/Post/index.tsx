import { Stack } from "@mui/material"
import { PostLayout } from "../../Blog/Post/PostPage/PostLayout"
import { TextEditor } from "./TextEditor"

export const BlogPost = () => {
  return (

    <Stack alignItems='end' sx={{ width: '100%' }}>
      <PostLayout edit={true} />
    </Stack>
  )
}