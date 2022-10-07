import { Toolbar, Stack, FormControl, InputLabel, Input, Button, Typography, IconButton, ButtonGroup, Divider, InputBase } from "@mui/material"
import { ReactNode, useState, Dispatch, SetStateAction } from "react"
import { MdKeyboardArrowDown, MdMoreHoriz, MdOutlineRemoveRedEye, MdSettings } from "react-icons/md"
import { Navigate, useNavigate } from "react-router-dom"
import { usePostContext } from "../../../Common/Context/Post/usePostContext"


const MyButton = ({ label, variant, startIcon, onClick }: { label: string, variant: "text" | "contained" | "outlined" | undefined, startIcon?: ReactNode, onClick?: () => void }) => {
  return <ButtonGroup
    size='small'
    sx={{
      border: { xs: '1px solid #eaeaea', md: '1px solid #eaeaea' },
      borderRadius: '3px',
      display: {
        xs: startIcon
          ? 'none'
          : 'flex',
        md: 'flex'
      },
    }}>
    <Button onClick={onClick} disableElevation startIcon={startIcon} variant={variant}
      sx={{
        lineHeight: 1,
        background: {
          xs: '#fff', md: variant === 'contained'
            ? '#eaeaea'
            : '#fff'
        },
        boxShadow: 'none',
        borderRadius: '3px',
        border: '1px solid transparent',
        '&:hover': {
          background: variant === 'contained' ? '#f5f5f5' : '#fafafa'
        }
      }} >
      <Typography
        noWrap
        textTransform='capitalize'
        color={variant === 'contained' ? '#6d6d6d' : '#6d6d6d'}
        fontFamily='Outfit'

      >
        {label}
      </Typography>
    </Button >
    <Button sx={{
      display: { xs: variant === 'contained' ? 'flex' : 'none', md: 'none' },
      background: '#fff',
      boxShadow: 'none',
      border: 'none',
      '&:hover': {
        border: 'none',
      }
    }}>
      {
        variant === 'contained' && !!!startIcon ? <MdKeyboardArrowDown fontSize={20} color='#6d6d6d' /> : null
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
  const navigate = useNavigate()


  const { handlePostHeader, post, title } = usePostContext()



  return (
    <Toolbar sx={{ width: '100%', position: 'fixed', background: '#fff' }}>
      <Stack
        spacing={{ xs: 1, md: 4 }}
        sx={{ width: '100%' }}
        direction='row'
        justifyContent='space-between'
        alignItems='end'
      >

        <FormControl fullWidth >
          <InputBase placeholder="título" value={title} name='title' id='title' onChange={handlePostHeader} />
        </FormControl>

        <Stack sx={{ background: '#fff' }} justifyContent='center' direction={{ xs: 'row-reverse', md: 'row' }} spacing={{ xs: 0, md: .5 }} >
          <MyButton onClick={() => navigate(post.permalink.url)
          }
            label='pré-vizualizar'
            variant='outlined'
            startIcon={<MdOutlineRemoveRedEye color='#3d3d3d' />} />
          <MyButton label='publicar' variant='contained' />
          <IconButton
            onClick={() => setOpenMenuLateral(prev => !prev)}
            sx={{
              display: { xs: 'flex', md: 'none' },
              transition: 'all 300ms ease-in-out',
              background: !openMenuLateral ? '#0066cc' : '#fff',
              color: !openMenuLateral ? '#f5f5f5' : '#6d6d6d',
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