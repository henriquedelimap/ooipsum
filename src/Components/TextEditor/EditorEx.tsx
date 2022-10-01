
import { Button, Container, ButtonGroup, Stack, Box, IconButton, Divider, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, ToggleButtonGroup, ToggleButton, Toolbar } from '@mui/material'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MouseEvent, useEffect, useState } from 'react'
import { BsTextParagraph } from 'react-icons/bs'
import { MdOutlineFormatBold, MdOutlineFormatItalic, MdRedo, MdUndo, MdFormatStrikethrough, MdAdd, MdFormatSize, MdRemove, MdFormatClear, MdFormatListBulleted, MdFormatListNumbered, MdFormatQuote, MdCode, MdOutlineHorizontalRule, MdTextFormat, MdTextFields } from 'react-icons/md'
import { useInternalConfig } from '../../Common/Context/InternalConfig'
import './style.css'
import './style.css'

export const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null
  }
  const [fontSize, setFontSize] = useState<number>(1)


  const editorOptions = [
    [
      {
        label: 'undo',
        action: () => editor.chain().focus().undo().run(),
        icon: <MdUndo />,
        id: 1
      },
      {
        label: 'redo',
        action: () => editor.chain().focus().redo().run(),
        icon: <MdRedo />,
        id: 2
      }
    ],
    [
      {
        label: 'Format Clear',
        action: () => {
          editor.chain().focus().clearNodes().run()
          editor.chain().focus().unsetAllMarks().run()
        },
        icon: <MdFormatClear />,
        id: 3
      }
    ],
    [
      {
        label: 'bold',
        action: () => editor.chain().focus().toggleBold().run(),
        icon: <MdOutlineFormatBold />,
        id: 4
      },
      {
        label: 'italic',
        action: () => editor.chain().focus().toggleItalic().run(),
        icon: <MdOutlineFormatItalic />,
        id: 5
      },
      {
        label: 'strike',
        action: () => editor.chain().focus().toggleStrike().run(),
        icon: <MdFormatStrikethrough />,
        id: 6
      }
    ],
    [
      {
        label: 'format set paragraph',
        action: () => editor.chain().focus().setParagraph().run(),
        icon: <BsTextParagraph />,
        id: 7
      }
    ],
    [
      {
        label: 'Format bulleted list',
        action: () => editor.chain().focus().toggleBulletList().run(),
        icon: <MdFormatListBulleted />,
        id: 11
      },
      {
        label: 'Format numbered list',
        action: () => editor.chain().focus().toggleOrderedList().run(),
        icon: <MdFormatListNumbered />,
        id: 12
      }
    ],
    [
      {
        label: 'Format block quote',
        action: () => editor.chain().focus().toggleBlockquote().run(),
        icon: <MdFormatQuote />,
        id: 13
      },
      {
        label: 'Format block code',
        action: () => editor.chain().focus().toggleCodeBlock().run(),
        icon: <MdCode />,
        id: 14
      }
    ],
    [
      {
        label: 'Format horizontal line',
        action: () => editor.chain().focus().setHorizontalRule().run(),
        icon: <MdOutlineHorizontalRule />,
        id: 15
      }
    ],
  ]

  const fontSizeOptions = [
    {
      label: 'título principal',
      id: 16,
    },
    {
      label: 'subtítulo 1',
      id: 17,
    },
    {
      label: 'subtítulo 2',
      id: 18
    },
    {
      label: 'body 1',
      id: 19
    },
    {
      label: 'body 2',
      id: 20
    }
  ]

  const handleChangeFontSize = (event: React.MouseEvent<HTMLElement>,
    newFontSize: string | null,) => {
    editor.chain().focus().toggleHeading({ level: newFontSize }).run()
  }


  return (
    <Stack sx={{ flexWrap: 'wrap', gap: .5 }} alignItems='center' justifyContent='start' direction='row' >
      {
        editorOptions.map((items, index) => (

          <ButtonGroup key={index} size='small'>
            {
              items?.map((item, index2) => (

                <IconButton
                  key={item.id}
                  onClick={item.action}
                  aria-label={item.label}
                  sx={{
                    fontSize: 18,
                    borderRadius: items.length > 1 ? 0 : 10,
                    background: '#fafafa0f',
                    color: '#3d3d3d',
                    border: 'none',
                    '&:hover': {
                      border: 'none',
                      background: '#fafafa',
                      boxShadow: 'none'
                    }
                  }}>
                  {item.icon}
                </IconButton>
              ))
            }
          </ButtonGroup>
        ))
      }
      <ToggleButtonGroup
        exclusive
        aria-label='font size'
        onChange={handleChangeFontSize}
      >
        {
          fontSizeOptions.map((item, index) => (
            <ToggleButton
              sx={
                editor.isActive('heading', { level: index + 1 })
                  ? {
                    background: '#0066cc1f',
                    color: '#0066cc',
                    border: '1px solid transparent',
                    fontFamily: 'outfit',
                    fontWeight: 800,
                    fontSize: 18 - index * 2.7
                  }
                  : {
                    border: '1px solid transparent',
                    fontFamily: 'outfit',
                    fontWeight: 800,
                    fontSize: 18 - index * 2.7
                  }
              }
              size='small'
              value={index + 1}
            >
              h{index + 1}
            </ToggleButton>
          ))
        }
      </ToggleButtonGroup>
    </Stack >

  )
}

interface IEditor {
  editable?: boolean
  content?: string
}


export const EditorDeTexto = ({ editable, content }: IEditor) => {
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
  })

  const json = editor?.getHTML()


  useEffect(() => {
    if (!editor) {
      return undefined
    }
    editor.setEditable(Boolean(editable))
  }, [editor, editable])

  if (!editor) {
    return null
  }

  return (
    <Stack
      sx={{
        position: 'relative',
        width: '100%',
        '& .ProseMirror': {
          minHeight: '70.5vh',
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
              pl: 4,
              pr: 4,
              borderRadius: isPostPage ? 0 : 40
            }}>
            <MenuBar editor={editor} />
          </Toolbar>
          : ''
      }

      <Container maxWidth='xl'>
        <EditorContent editor={editor} />
      </Container>
    </Stack>
  )
}