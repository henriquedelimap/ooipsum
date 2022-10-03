import { Paper, Stack, Autocomplete, TextField, Slide } from "@mui/material"
import { useState, MouseEvent, useEffect, Dispatch, SetStateAction } from "react"
import { ColorResult } from 'react-color'
import { AccordionList } from "./items/AccordionList";
import { SearchImagePaper } from "./ImagePaper";
import './style.css'
import { IPost } from "../../../../Types";


export const MenuLateral = ({
  openMenuLateral,
  setOpenMenuLateral }: {
    openMenuLateral: boolean
    setOpenMenuLateral: Dispatch<SetStateAction<boolean>>
  }) => {

  const [post, setPost] = useState<IPost>({
    permalink: {
      option: 'post-title',
      url: '',
    },
    privacy: 'public',
    propagation: 'blog',
    background: {
      type: 'solido',
      color: undefined,
      url: undefined
    }
  })

  const [postColor, setPostColor] = useState<ColorResult | undefined>(undefined)
  const [searchImage, setSearchImage] = useState<string | undefined>(undefined)
  const [key, setKey] = useState<string | undefined>(undefined)
  const [value, setValue] = useState<string | undefined>(undefined)
  const [selecionaImagem, setSelecionaImagem] = useState<string | undefined>(undefined)
  const [randomImage, setRandomImage] = useState<number>(1)
  const [previewImage, setPreviewImage] = useState<boolean>(false)

  const MountPost = (key: string, value: string) => {
    switch (key) {
      case 'privacy':
        setPost((anterior) => {
          anterior.privacy = String(value)
          return anterior
        })
        break;
      case 'permalink':
        setPost((anterior) => {
          anterior.permalink.option = String(value)
          return anterior
        })
        break;
      case 'background':
        setPost((anterior) => {
          anterior.background.type = String(value)
          return anterior
        })
        break;
      case 'propagation':
        setPost((anterior) => {
          anterior.propagation = String(value)
          return anterior
        })
        break;
      default:
        setPost(anterior => anterior)
        break;
    }
  }

  const handleChange = (e: any | MouseEvent<HTMLElement>, newOption?: string) => {
    MountPost(String(newOption) === 'solido' || String(newOption) === 'image' ? 'background' : (e.target as HTMLInputElement).name, String(newOption))
    setKey((e.target as HTMLInputElement).name)
    setValue(newOption)
  }

  const handleColor = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
    setPostColor(color)
  }

  useEffect(() => {
    MountPost(String(key), String(value))
  }, [setPost, MountPost])

  useEffect(() => {
    setPost(anterior => {
      anterior.background.color = postColor
      anterior.background.url = selecionaImagem
      return anterior
    })
  }, [handleColor, setPostColor, setPost, setSelecionaImagem, selecionaImagem, setSearchImage])

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setOpenMenuLateral(prev => !prev)
    }
  }, [])
  const options = [
    'nextoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
  ]
  return (

    <Slide in={openMenuLateral} direction='up' >
      <Paper
        sx={{
          position: 'fixed',
          height: { xs: '64vh', md: '84vh' },
          display: { xs: !openMenuLateral ? 'flex' : 'none', md: 'flex' },
          bottom: 0,
          minWidth: { xs: '100%', md: '320px' },
          borderTop: '2px solid #eaeaea',
          right: { xs: 0, md: 12 },
          borderRadius: '3px',
          overflow: 'hidden',

        }}>
        <Stack
          direction='row-reverse'
          sx={{ overflow: 'hidden', width: '100%', height: '100%' }}
        >
          <Stack
            spacing={2}
            sx={{
              minWidth: { xs: '100%', md: '320px' },
              height: { xs: '64vh', md: '84vh' },
              p: 1.4,
              pb: 6.4,
              overflowX: 'scroll',
              position: 'fixed',
            }} >
            <TextField fullWidth sx={{ '& input': { border: 'none' } }} id='subtitulo' label='subtítulo' helperText='' />
            <Autocomplete
              size='small'
              id='categoria'
              sx={{ fontFamily: 'Outfit' }}
              options={options}
              renderInput={(params) => <TextField  {...params} label='categoria' />}
            />
            <AccordionList
              setSearchImage={setSearchImage}
              selecionaImagem={selecionaImagem}
              setSelecionaImagem={setSelecionaImagem}
              searchImage={searchImage}
              handleChange={handleChange}
              handleColor={handleColor}
              post={post}
              postColor={postColor}
              setPreviewImage={setPreviewImage}
              setRandomImage={setRandomImage}
              randomImage={randomImage}
            />
          </Stack>

          <SearchImagePaper
            previewImage={previewImage}
            randomImage={randomImage}
            setRandomImage={setRandomImage}
            selecionaImagem={selecionaImagem}
            setSelecionaImagem={setSelecionaImagem}
            searchImage={searchImage}
            backgroundType={String(post.background.type)} />
        </Stack>
      </Paper>
    </Slide >


  )
}