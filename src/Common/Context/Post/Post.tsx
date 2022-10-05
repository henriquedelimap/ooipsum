import { createContext, ReactNode, useState, MouseEvent, useEffect, Dispatch, SetStateAction } from "react";
import { ColorResult } from "react-color";
import { IPost } from "../../../Types";

export interface IPostContext {
  post: IPost
  handleMountPost: (e: any | MouseEvent<HTMLElement>, newOption?: string) => void
  handlePostColor: (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => void
  handlePostHeader: (e: any) => void
  title: string | undefined
  subTitle: string | undefined
  setSelecionaImagem: Dispatch<SetStateAction<string | undefined>>
  setSearchImage: Dispatch<SetStateAction<string | undefined>>
  searchImage: string | undefined
  postColor: ColorResult | undefined
  selecionaImagem: string | undefined
  mountPost: (key: string, value: string) => void
}

export const PostContext = createContext<IPostContext | null>(null)

interface Prop {
  children: ReactNode
}
export const PostProvider = ({ children }: Prop) => {

  const [post, setPost] = useState<IPost>({
    permalink: {
      option: 'post-title',
      url: '',
    },
    status: 'edit',
    permalinkType: 'post-title',
    privacy: 'public',
    propagation: 'blog',
    background: {
      type: 'solido',
      color: undefined,
      url: undefined
    },
    id: '',
    title: '',
    subtitle: '',
    category: '',
    description: '',
    content: '',
    createdAt: ''
  })

  const [postColor, setPostColor] = useState<ColorResult | undefined>(undefined)
  const [key, setKey] = useState<string | undefined>(undefined)
  const [value, setValue] = useState<string | undefined>(undefined)
  const [selecionaImagem, setSelecionaImagem] = useState<string | undefined>(undefined)
  const [searchImage, setSearchImage] = useState<string | undefined>(undefined)
  const [title, setTitle] = useState<string | undefined>(undefined)
  const [subTitle, setSubTitle] = useState<string | undefined>(undefined)

  const mountPost = (key: string, value: string) => {
    switch (key) {
      case 'title':
        setPost((anterior) => {
          anterior.title = String(value)
          return anterior
        })
        break;
      case 'subtitle':
        setPost((anterior) => {
          anterior.subtitle = String(value)
          return anterior
        })
        break;
      case 'category':
        setPost((anterior) => {
          anterior.category = String(value)
          return anterior
        })
        break;
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
      case 'content':
        setPost((anterior) => {
          anterior.content = String(value)
          return anterior
        })
        break;
      default:
        setPost(anterior => anterior)
        break;
    }
  }

  const handleMountPost = (e: any | MouseEvent<HTMLElement>, newOption?: string) => {
    mountPost(String(newOption) === 'solido' || String(newOption) === 'image' ? 'background' : (e.target as HTMLInputElement).name, String(newOption))
    setKey((e.target as HTMLInputElement).name)
  }

  const handlePostHeader = (e: any) => {
    (e.target as HTMLInputElement).name === 'title'
      ? setTitle(e.target.value)
      : (e.target as HTMLInputElement).name === 'subtitle'
        ? setSubTitle(e.target.value)
        : ''
    mountPost((e.target as HTMLInputElement).id, e.target.value)
    setPost(anterior => {
      anterior.permalink.url = String(title?.replaceAll(' ', '-'))
      return anterior
    })
  }

  const handlePostColor = (color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
    setPostColor(color)
  }

  useEffect(() => {
    mountPost(String(key), String(value))
  }, [setPost, mountPost])

  useEffect(() => {
    setPost(anterior => {
      anterior.background.color = postColor
      anterior.background.url = selecionaImagem
      return anterior
    })

  }, [handlePostColor, setPostColor, setPost, setSelecionaImagem, selecionaImagem, setSearchImage])

  return (
    <PostContext.Provider value={
      {
        post,
        handleMountPost,
        handlePostColor,
        setSelecionaImagem,
        setSearchImage,
        searchImage,
        postColor,
        selecionaImagem,
        mountPost,
        handlePostHeader,
        title,
        subTitle
      }
    }>
      {children}
    </PostContext.Provider>
  )
}


