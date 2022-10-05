import { FormControl, IconButton, InputBase, Badge, Stack, Typography, OutlinedInput } from "@mui/material"
import { ReactElement, useState } from "react"
import { BsTextareaT } from "react-icons/bs"
import { MdClose, MdAdd } from "react-icons/md"
import { useAuthContext } from "../../Common/Context/Auth"

export const EditMode = ({ edit, children, content }: { edit?: boolean, children: ReactElement, content?: any }) => {
  const [value, setValue] = useState<string | undefined>(undefined)
  const [newEdit, setNewEdit] = useState<boolean>(false)
  const { usuario } = useAuthContext()
  const handleChange = () => {
    setNewEdit(!newEdit)
  }

  return (
    <>
      {newEdit
        ? <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, pb: 2 }}>
          <IconButton>
            <MdClose onClick={handleChange} fontSize={18} />
          </IconButton>
          <OutlinedInput fullWidth multiline endAdornment={<MdAdd fontSize={24} />} value={content} />
        </FormControl>
        : <>{children}</>
      }
    </>
  )
}

export const Text = (
  {
    content,
    variant,
    fontWeight,
    fontFamily,
    center,
    paragraph
  }: {
    content: any,
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | undefined,
    fontWeight?: number,
    fontFamily?: number,
    center?: boolean,
    paragraph?: boolean
  }) => {

  const font = !!!fontFamily ? 'Outfit' : fontFamily === 1 ? 'Old Standard TT' : 'Outfit'
  const size = !!variant ? variant : 'body1'

  return (
    <Stack alignItems={center ? 'center' : undefined} sx={{ width: '100%' }} >
      <EditMode content={content}>
        <Typography
          fontFamily={font}
          fontWeight={fontWeight}
          variant={size}
          paragraph={!!paragraph}
          align={center ? 'center' : undefined}
        >
          {content}
        </Typography>
      </EditMode>
    </Stack>
  )
}
