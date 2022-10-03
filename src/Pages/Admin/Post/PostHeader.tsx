import { Toolbar, Stack, FormControl, InputLabel, Input, Button, Typography, IconButton } from "@mui/material"
import { ReactNode, useState, Dispatch, SetStateAction } from "react"
import { MdMoreHoriz, MdOutlineRemoveRedEye } from "react-icons/md"


const MyButton = ({ label, variant, startIcon }: { label: string, variant: "text" | "contained" | "outlined" | undefined, startIcon?: ReactNode }) => {
  return <Button endIcon={startIcon} variant={variant}
    sx={{
      background:
        variant === 'contained'
          ? '#3d3d3d'
          : '#fff',
      border: { xs: '0px solid #9d9d9d', md: '1px solid #9d9d9d' },
      boxShadow: 'none',
      borderRadius: '3px',
      '&:hover': {
        border: '1px solid #6e6e6e',
        background: variant === 'contained' ? '#6d6d6d' : '#fafafa'
      }
    }} >
    <Typography
      noWrap
      textTransform='capitalize'
      color={variant === 'contained' ? '#fff' : '#3d3d3d'}
      fontWeight='800'
      fontFamily='Outfit'
      sx={{
        display: {
          xs: startIcon
            ? 'none'
            : 'flex',
          md: 'inline'
        }
      }}
    >
      {label}
    </Typography>
  </Button >
}

export const HeaderBlogPost = ({
  openMenuLateral,
  setOpenMenuLateral }: {
    openMenuLateral: boolean
    setOpenMenuLateral: Dispatch<SetStateAction<boolean>>
  }) => {
  const [categorias, setCategorias] = useState<string | undefined>(undefined)
  return (
    <Toolbar sx={{ width: '100%', position: 'fixed' }}>

      <Stack
        spacing={{ xs: 1, md: 4 }}
        sx={{ width: '100%', pl: 2, pr: 1 }}
        direction='row'
        justifyContent='space-between'
        alignItems='end'
      >

        <FormControl fullWidth >
          <InputLabel>título</InputLabel>
          <Input />
        </FormControl>

        <Stack sx={{ background: '#fff' }} justifyContent='center' direction='row' spacing={.5} >
          <MyButton label='pré-vizualizar' variant='outlined' startIcon={<MdOutlineRemoveRedEye color='#3d3d3d' />} />
          <MyButton label='publicar' variant='contained' />
          <IconButton onClick={() => setOpenMenuLateral(prev => !prev)} sx={{ display: { xs: 'flex', md: 'none' }, borderRadius: '3px' }}>
            <MdMoreHoriz />
          </IconButton>
        </Stack>
      </Stack>
    </Toolbar >
  )
}