import { MenuItem, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface IMenuItem {
  label: string
  to: string
}
export const MyMenuItem = (prop: IMenuItem) => {
  const { label, to } = prop
  const navigate = useNavigate()
  return (
    <MenuItem sx={{ width: '100%' }} onClick={() => navigate(to)}>
      <Typography color='#3d3d3d' variant='body1' fontFamily='Outfit'>
        {label}
      </Typography>
    </MenuItem>
  )
}