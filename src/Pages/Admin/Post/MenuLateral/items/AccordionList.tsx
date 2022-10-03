import { Stack } from "@mui/material"
import { Dispatch, SetStateAction, ChangeEvent } from "react"
import { ColorResult } from "react-color"
import { postPrivacyOptions, permalinkOptions, propagationOptions } from "../../../../../Common/Script"
import { IPost } from "../../../../../Types"
import { ItemAccordionList } from "./item"
import { DefineBackground } from "./item/DefineBackground"


export const AccordionList = (
  {
    post,
    handleChange,
    setSearchImage,
    searchImage,
    handleColor,
    postColor,
    selecionaImagem,
    setSelecionaImagem,
    setRandomImage,
    setPreviewImage,
    randomImage
  }: {
    post: IPost,
    setSearchImage: Dispatch<SetStateAction<string | undefined>>,
    handleChange: (e: any) => void,
    searchImage: string | undefined,
    handleColor: (color: ColorResult, event: ChangeEvent<HTMLInputElement>) => void,
    postColor: ColorResult | undefined,
    selecionaImagem: string | undefined,
    setSelecionaImagem: Dispatch<SetStateAction<string | undefined>>,
    setRandomImage: Dispatch<SetStateAction<number>>,
    setPreviewImage: Dispatch<SetStateAction<boolean>>,
    randomImage: number
  }
) =>
  <Stack>
    <DefineBackground
      accordionTitle='escolha a capa do post'
      accordionIndex={40}
      accordionLabel='capa'
      value={String(post.background.type)}
      handle={handleChange}
      setSearchImage={setSearchImage}
      searchImage={searchImage}
      handleColor={handleColor}
      postColor={postColor}
      selecionaImagem={selecionaImagem}
      setSelecionaImagem={setSelecionaImagem}
      setRandomImage={setRandomImage}
      setPreviewImage={setPreviewImage}
      randomImage={randomImage}
      ariaLabel='post image'
    />

    <ItemAccordionList
      accordionTitle='como será exibida a URL desse post?'
      accordionIndex={20}
      accordionLabel='permalink'
      value={post.permalink.option}
      handle={handleChange}
      options={permalinkOptions}
      name='permalink'
      hasCustomArea={true}
      ariaLabelledby='radio-bottom-permalink'
      handleInput={handleChange}
      inputValue={post.permalink.custom}
      inputId='permalink-custom'
      inputLabel='link  customizado'
      inputHelperText='http://site.com/link-customizado'
    />

    <ItemAccordionList
      accordionTitle='quem poderá ver esse post?'
      accordionIndex={40}
      accordionLabel='privacidade'
      value={post.privacy}
      handle={handleChange}
      options={postPrivacyOptions}
      name='privacy'
      hasCustomArea={false}
      ariaLabelledby='radio-bottom-pricacy'
    />

    <ItemAccordionList
      accordionTitle='como será a propagação?'
      accordionIndex={60}
      accordionLabel='propagação'
      value={post.propagation}
      handle={handleChange}
      options={propagationOptions}
      name='propagation'
      hasCustomArea={false}
      ariaLabelledby='radio-bottom-propagationOptions'
    />
  </Stack >