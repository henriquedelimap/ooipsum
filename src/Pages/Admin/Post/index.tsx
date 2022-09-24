import { Stack } from "@mui/material"
import { TextEditor } from "./TextEditor"

export const BlogPost = () => {
  return (

    <Stack alignItems='end' sx={{ width: '100%' }}>
      <Stack sx={{ width: '80%' }}>
        <TextEditor />
      </Stack>
    </Stack>
  )
}