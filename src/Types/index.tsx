import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react"
import { ColorResult } from "react-color"

export type postBackgroundType = {
  type?: string
  url?: string
  color: ColorResult | undefined
}

export type PermalinkType = {
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



interface IRadioOptions {
  value: string
  label: string
}

export interface IRadioGroup {
  ariaLabelledby?: string
  ariaLabel?: string
  name?: string
  value: string
  handle: (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLElement>) => void
  options?: IRadioOptions[]
  hasCustomArea?: boolean
  inputValue?: string | undefined
  handleInput?: (event: ChangeEvent<HTMLInputElement>) => void
  inputId?: string
  inputLabel?: string
  inputHelperText?: string
}

export interface IAccordionItem extends IRadioGroup {
  accordionTitle: string
  accordionIndex: number
  accordionLabel: string
}

export interface IDefinedBackground extends IAccordionItem {
  setSearchImage: Dispatch<SetStateAction<string | undefined>>
  searchImage: string | undefined
  handleColor: (color: ColorResult, event: ChangeEvent<HTMLInputElement>) => void
  postColor: ColorResult | undefined
  selecionaImagem: string | undefined
  setSelecionaImagem: Dispatch<SetStateAction<string | undefined>>
  setRandomImage: Dispatch<SetStateAction<number>>
  setPreviewImage: Dispatch<SetStateAction<boolean>>
  randomImage: number
}