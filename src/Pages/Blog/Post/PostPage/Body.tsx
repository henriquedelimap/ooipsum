import { IconButton, Stack } from "@mui/material"
import { useState } from "react"
import { BsSave } from "react-icons/bs"
import { MdEdit } from "react-icons/md"
import { useAuthContext } from "../../../../Common/Context/Auth"
import { useInternalConfig } from "../../../../Common/Context/InternalConfig"
import { EditorDeTexto } from "../../../../Components/TextEditor/EditorEx"
export const PostPageBody = ({ page, edit }: { page?: any, edit?: boolean }) => {

  const text1 = `<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad vel vitae autem, repellendus hic obcaecati repudiandae modi quam neque omnis accusamus odit illo ab a dicta atque nisi architecto, dolorem vero ratione labore facere. Est voluptatibus libero perferendis quam facilis laudantium ipsum iusto similique voluptas molestias n</h1>`
  const typo = typeof text1
  const { content } = useInternalConfig()
  const [editable, setEditable] = useState(false)
  const { auth, usuario } = useAuthContext()
  return (
    <Stack sx={{ width: '100%', position: 'relative' }} spacing={2}>
      <Stack
        alignItems='center'
        sx={{
          width: '100%',
          height: '80vh',
          borderRadius: '3rem',
          background: '#3d3d3d',
          backgroundImage: `url(${page?.img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }} />
      <Stack alignItems='end' sx={{ position: 'sticky', top: 16, zIndex: 1010 }} >

        {
          usuario?.accountType.includes('dev')
            ? <IconButton sx={{ mr: editable ? 4 : 0 }} onClick={() => setEditable(!editable)}>
              {
                editable ? <BsSave /> : <MdEdit />
              }
            </IconButton>
            : ''
        }
      </Stack>

      <EditorDeTexto editable={editable} content={text1} />

    </Stack>
  )
}