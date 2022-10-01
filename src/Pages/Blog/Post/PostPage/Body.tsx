import { IconButton, Stack } from "@mui/material"
import { useState } from "react"
import { BsSave } from "react-icons/bs"
import { MdEdit } from "react-icons/md"
import { useAuthContext } from "../../../../Common/Context/Auth"
import { useInternalConfig } from "../../../../Common/Context/InternalConfig"
import { EditorDeTexto } from "../../../../Components/TextEditor/EditorEx"
export const PostPageBody = ({ page }: { page?: any }) => {
  let text

  let textFormated = `
  <h1>${page?.title}</h1>
  <h3>${page?.abstract}</h3>
  `

  text = textFormated

  const [editable, setEditable] = useState(false)
  const { auth, usuario } = useAuthContext()

  return (
    <Stack sx={{ width: '100%', position: 'relative' }} spacing={2}>
      <Stack
        alignItems='center'
        sx={{
          width: '100%',
          height: '80vh',
          borderRadius: '32px',
          background: '#3d3d3d',
          backgroundImage: `url(${page?.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }} />
      <Stack alignItems='end' sx={{ position: 'sticky', top: { xs: 50, md: 20 }, zIndex: 1010 }} >

        {
          usuario?.accountType.includes('dev')
            ? <IconButton sx={{ mr: editable ? 2 : 0 }} onClick={() => setEditable(!editable)}>
              {
                editable ? <BsSave /> : <MdEdit />
              }
            </IconButton>
            : ''
        }
      </Stack>

      <EditorDeTexto editable={editable} content={text} />

    </Stack>
  )
}