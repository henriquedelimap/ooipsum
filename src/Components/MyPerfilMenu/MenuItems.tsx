import { MenuItem, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useInternalConfig } from "../../Common/Context/InternalConfig"
import { MyDialog } from "../AppBar/LayouteAppBar"

interface IMenuItem {
  label: string
  to: string
}
export const MyMenuItem = (prop: IMenuItem) => {
  const { label, to } = prop
  const navigate = useNavigate()
  const { isPostPage } = useInternalConfig()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  return (
    <MenuItem sx={{ width: '100%' }} onClick={() => isPostPage ? setOpenDialog(true) : navigate(to)}>
      <Typography color='#3d3d3d' variant='body1' fontFamily='Outfit'>
        {label}
      </Typography>
      <MyDialog open={openDialog} setOpen={setOpenDialog} to={to} />
    </MenuItem>
  )
}