import { Stack } from '@mui/material'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { EditorDeTexto } from './EditorEx'

export const TextEditor = () => {

  return (
    <Stack sx={{ width: '100%' }}>

      <EditorDeTexto />
    </Stack>
  )
}