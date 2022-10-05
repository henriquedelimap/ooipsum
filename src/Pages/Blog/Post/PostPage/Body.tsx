import { IconButton, Stack } from "@mui/material"
import { useState } from "react"
import { BsSave } from "react-icons/bs"
import { MdEdit } from "react-icons/md"
import { useAuthContext } from "../../../../Common/Context/Auth"
import { EditorDeTexto } from "../../../../Components/TextEditor/EditorEx"
export const PostPageBody = ({ page }: { page?: any }) => {

  const [editable, setEditable] = useState(false)
  const { usuario } = useAuthContext()

  return (
    <Stack sx={{ width: '100%', position: 'relative' }} spacing={2}>
      <Stack
        alignItems='center'
        sx={{
          width: '100%',
          height: '80vh',
          borderRadius: '32px',
          background: page?.background?.color?.hex,
          backgroundImage: `url(${page?.background?.url})`,
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

      <EditorDeTexto editable={editable} content={page?.content} />

    </Stack>
  )
}