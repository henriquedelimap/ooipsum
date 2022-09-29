
import { Button, ButtonGroup, Stack, Box, IconButton, Divider, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, ToggleButtonGroup, ToggleButton } from '@mui/material'
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


  const [fontSizeValue, setFontSizeValue] = useState<string | null>(null)

  const [level, setlevel] = useState<number | null>(null)

  const handleChangeFontSize = (event: React.MouseEvent<HTMLElement>,
    newFontSize: string | null,) => {
    editor.chain().focus().toggleHeading({ level: newFontSize }).run()
    setFontSizeValue(newFontSize)
  }


  return (
    <Stack sx={{ flexWrap: 'wrap', gap: 1.2 }} alignItems='center' justifyContent='start' direction='row' >
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
                    fontSize: 20,
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
                    fontSize: 20 - index * 2.7
                  }
                  : {
                    border: '1px solid transparent',
                    fontFamily: 'outfit',
                    fontWeight: 800,
                    fontSize: 20 - index * 2.7
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

const franse = 'uma página em branco é uma oportunidade para criar algo novo...'
interface IEditor {
  editable?: boolean
  content?: string
}
export const EditorDeTexto = ({ editable, content }: IEditor) => {
  const { setContent } = useInternalConfig()

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
    setContent(json)
    console.log(content);
  }, [json])

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
    <Stack sx={{ position: 'relative' }} spacing={2}>
      {
        editable
          ? <Box sx={{ position: 'sticky', top: 8, zIndex: 1000, background: '#6d6d6d0f', backdropFilter: 'blur(30px)', p: 1.3, pl: 4, pr: 4, borderRadius: 40 }}>
            <MenuBar editor={editor} />
          </Box>
          : ''
      }

      <EditorContent editor={editor} />
    </Stack>
  )
}