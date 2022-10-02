import { Paper, Stack, Autocomplete, TextField } from "@mui/material"
import { useState, MouseEvent, useEffect } from "react"
import { ColorResult } from 'react-color'
import { AccordionList } from "./AccordionList";
import { SearchImagePaper } from "./SearchImage";
import './style.css'


type postBackgroundType = {
  type?: string
  url?: string
  color: ColorResult | undefined
}

type PermalinkType = {
  option: string
  custom?: string
  url: string
}
export interface IPost {
  permalink: PermalinkType
  privacy: string
  propagation: string
  background: postBackgroundType
}

export const MenuLateral = () => {

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


  const options = [
    'nextoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
    'lapsoo',
  ]
  const [openClose, setOpenClose] = useState<boolean>(false)
  return (

    <Paper
      sx={{
        position: 'fixed',
        height: '100vh',
        right: 12,
        top: '16%',
        borderRadius: '3px',
        zIndex: 2000,
        overflow: 'hidden',

      }}>

      {/* <Stack
        onMouseEnter={() => setOpenClose(prev => !prev)}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '100vh',
          width: openClose ? 128 : 32,
          background: 'pink',
          '&:hover': {
            width: 128,
            background: 'blue',
          }

        }} /> */}


      <Stack
        direction='row-reverse'
        sx={{ overflow: 'hidden', height: '100%' }}
      >
        <Stack
          spacing={2}
          sx={{
            minWidth: '320px',
            height: '100%',
            p: 1.4,
            pt: 2,
            pb: 6.4,
            overflowX: 'scroll',
            position: 'fixed',
          }} >
          <TextField size='small' fullWidth sx={{ '& input': { border: 'none' }, mt: 3 }} id='subtitulo' label='subtítulo' helperText='' />
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

  )
}