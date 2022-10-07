
import { Container, Stack, InputLabel, Select, MenuItem, SelectChangeEvent, ToggleButtonGroup, ToggleButton, Toolbar } from '@mui/material'
import { Content, Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect } from 'react'
import { usePostContext } from '../../Common/Context/Post/usePostContext'
import { MenuBar } from './munuTextFormat'
import './style.css'

interface IEditor {
  editable?: boolean
  content?: Content
  editor?: Editor | null
}

export const EditorDeTexto = ({ editable, content }: IEditor) => {
  const { mountPost, post } = usePostContext()
  const isPostPage = window.location.pathname.split('/')[2] === 'blog'

  const editor = useEditor({
    editable,
    extensions: [
      StarterKit,
    ],
    content: ` 
    <section className='editor'>
    <p>${content}</p>
    </section>
    `,
    onUpdate: ({ editor }) => {
      const json = editor?.getHTML()
      mountPost('content', String(json))

    }
  })

  const json = editor?.getHTML()


  useEffect(() => {
    mountPost('content', String(json))
  }, [json, editor])


  useEffect(() => {
    if (!editor) {
      return undefined
    }
    editor.setEditable(Boolean(editable))
  }, [editor, editable, content])

  if (!editor) {
    return null
  }
  if (!isPostPage) {
    editor.commands.setContent(content as Content)
  }

  return (
    <Stack
      sx={{
        position: 'relative',
        width: '100%',
        '& .ProseMirror': {
          minHeight: '75vh',
          overflow: 'auto',
          resize: 'vertical',
          width: '100%',
          borderRadius: 0,
          pl: { xs: 3, md: 6 },
          pr: { xs: 3, md: 6 },
          pt: 2,
          mt: 2,
          pb: 18,
          background: editable ? '#fff' : '#fafafa',
          outline: '0px solid transparent',
        }
      }}>
      {
        editable
          ? <Toolbar
            sx={{
              position: 'sticky',
              top: isPostPage ? 0 : 8,
              zIndex: 1000,
              background: isPostPage ? '#fff' : '#ffffffaf',
              backdropFilter: isPostPage ? '' : 'blur(30px)',
              pl: { xs: 2.4, md: 4 },
              pr: { xs: 2.4, md: 4 },
              borderRadius: isPostPage ? 0 : 40
            }}>
            <MenuBar editor={editor} />
          </Toolbar>
          : ''
      }

      <Container maxWidth='xl'>
        <EditorContent editor={editor as Editor} />
      </Container>
    </Stack>
  )
}
