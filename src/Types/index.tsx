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
  [key: string]: string | PermalinkType | postBackgroundType
  permalink: PermalinkType
  permalinkType: string
  privacy: string
  propagation: string
  background: postBackgroundType
  status: string
  category: string
  id: string
  title: string
  subtitle: string
  description: string
  content: string
  createdAt: string
}

interface IRadioOptions {
  value: string
  label: string
}

export interface IRadioGroup {
  ariaLabelledby?: string
  ariaLabel?: string
  name?: string
  value?: string
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
}