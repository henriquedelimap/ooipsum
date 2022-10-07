import { PostContext, IPostContext } from "./Post"
import { useState, useContext } from 'react'

export const usePostContext = () => {
  const {
    post,
    handleMountPost,
    handlePostColor,
    setSelecionaImagem,
    selecionaImagem,
    setSearchImage,
    searchImage,
    postColor,
    mountPost,
    handlePostHeader,
    title,
    subTitle,
    setCustomPermalink,
    customPermalink
  } = useContext(PostContext) as IPostContext

  const [randomImage, setRandomImage] = useState<number>(1)
  const [previewImage, setPreviewImage] = useState<boolean>(false)

  return {
    post,
    handleMountPost,
    randomImage,
    previewImage,
    setRandomImage,
    setPreviewImage,
    handlePostColor,
    setSelecionaImagem,
    selecionaImagem,
    setSearchImage,
    searchImage,
    postColor,
    mountPost,
    handlePostHeader,
    title,
    subTitle,
    setCustomPermalink,
    customPermalink
  }
}

