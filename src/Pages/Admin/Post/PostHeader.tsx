import { Toolbar, Stack, FormControl, InputLabel, Input, Button, Typography, IconButton, ButtonGroup, Divider } from "@mui/material"
import { ReactNode, useState, Dispatch, SetStateAction } from "react"
import { MdKeyboardArrowDown, MdMoreHoriz, MdOutlineRemoveRedEye, MdSettings } from "react-icons/md"


const MyButton = ({ label, variant, startIcon }: { label: string, variant: "text" | "contained" | "outlined" | undefined, startIcon?: ReactNode }) => {
  return <ButtonGroup
    size='small'
    sx={{
      border: { xs: '0px solid #9d9d9d', md: '1px solid #9d9d9d' },
      borderRadius: '3px',
      display: {
        xs: startIcon
          ? 'none'
          : 'flex',
        md: 'flex'
      },
    }}>
    <Button startIcon={startIcon} variant={variant}
      sx={{
        background:
          variant === 'contained'
            ? '#3d3d3d'
            : '#fff',
        boxShadow: 'none',
        borderRadius: '3px',
        border: '1px solid transparent',
        '&:hover': {
          background: variant === 'contained' ? '#6d6d6d' : '#fafafa'
        }
      }} >
      <Typography
        noWrap
        textTransform='capitalize'
        color={variant === 'contained' ? '#fff' : '#3d3d3d'}
        fontWeight='800'
        fontFamily='Outfit'

      >
        {label}
      </Typography>
    </Button >
    <Button sx={{
      display: { xs: variant === 'contained' ? 'flex' : 'none', md: 'none' },
      background: '#3d3d3d',
      border: '2px solid #6d6d6d',
      boxShadow: 'none',
      borderRadius: '3px',
      '&:hover': {
        border: '2px solid #3d3d3d',
        background: '#6d6d6d'
      }
    }}>
      {
        variant === 'contained' && !!!startIcon ? <MdKeyboardArrowDown fontSize={20} color='#fff' /> : null
      }
    </Button>
  </ButtonGroup>

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
        sx={{ width: '100%', pl: .5, pr: .5 }}
        direction='row'
        justifyContent='space-between'
        alignItems='end'
      >

        <FormControl fullWidth >
          <InputLabel>título</InputLabel>
          <Input />
        </FormControl>

        <Stack sx={{ background: '#fff' }} justifyContent='center' direction={{ xs: 'row-reverse', md: 'row' }} spacing={.5} >
          <MyButton label='pré-vizualizar' variant='outlined' startIcon={<MdOutlineRemoveRedEye color='#3d3d3d' />} />
          <MyButton label='publicar' variant='contained' />
          <IconButton
            onClick={() => setOpenMenuLateral(prev => !prev)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              transition: 'all 300ms ease-in-out',
              background: openMenuLateral ? '#0066cc' : '#fff',
              color: openMenuLateral ? '#f5f5f5' : '#6d6d6d',
              '&:hover': {
                color: '#6d6d6d',
                transform: 'rotate(145deg) scale(1.16) '
              }
            }}>
            <MdSettings />
          </IconButton>
        </Stack>
      </Stack>
    </Toolbar >
  )
}