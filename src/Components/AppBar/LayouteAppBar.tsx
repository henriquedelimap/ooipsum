import { Fade, AppBar, Toolbar, Stack, Box, IconButton, Slide, Container, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from "@mui/material"
import { SetStateAction, useState, Dispatch } from "react"
import { MdArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import { useBlogConfig } from "../../Common/Context/BlogConfig"
import { useInternalConfig } from "../../Common/Context/InternalConfig"
import { Script } from "../../Common/Script"
import { HiddenOnScroll } from "../../Utils"

interface Prop {
  window?: () => Window
  children?: React.ReactElement
}

export const StyledAppBar = (prop: Prop) => {

  const { loading } = useBlogConfig()
  const {
    postPage,
    isPostPage
  } = useInternalConfig()
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const navigate = useNavigate()

  const logoOnClick = () => {
    isPostPage
      ? setOpenDialog(true)
      : navigate('/')
  }

  return (
    <HiddenOnScroll {...prop}>
      <Fade in={!loading}>
        <AppBar sx={{
          backdropFilter: 'blur(30px)',
          background: '#ffffff',
          boxShadow: 'none',
          borderBottom: '1px solid #eaeaea',
          zIndex: 3000,

        }}>
          <Toolbar sx={{ justifyContent: 'space-between', position: 'relative' }}>
            <Stack direction='row' alignItems='center' >

              <Slide in={isPostPage} direction='right' >
                <IconButton
                  sx={{ display: isPostPage ? 'flex' : 'none' }}
                  onClick={() => setOpenDialog(true)}>
                  <MdKeyboardArrowLeft />
                </IconButton>
              </Slide>

              <Box sx={{ height: 44, cursor: 'pointer' }} onClick={logoOnClick}>
                {Script.logo}
              </Box >
            </Stack>

            {prop.children}
          </Toolbar>

          <MyDialog to={-1} open={openDialog} setOpen={setOpenDialog} />
        </AppBar>
      </Fade>
    </HiddenOnScroll >
  )
}

export const MyDialog = ({ open, setOpen, to }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, to: any }) => {

  const navigate = useNavigate()
  const handleOpenDialog = () => {
    setOpen(false)
    navigate(to)
  }
  return <Dialog
    sx={{ zIndex: 10000, '& .MuiDialog-paper': { p: 2 } }}
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby='confirm-exist-post-page'
    aria-describedby='confirm-exist-post-page' >
    <DialogTitle sx={{ p: 2 }} id='confirm-title'>
      {"deseja salvar as alterações antes de sair da página?"}
    </DialogTitle>

    <DialogContentText sx={{ p: 2, pt: 0 }} id='confirm-description'>
      ao sair dessa página, você pode perder as modificações não salvas
    </DialogContentText>

    <DialogActions>
      <Button onClick={() => handleOpenDialog()}><Typography>sair</Typography></Button>
      <Button variant='contained' onClick={() => handleOpenDialog()} autoFocus><Typography color='#fff'>salvar</Typography></Button>
    </DialogActions>
  </Dialog>

}