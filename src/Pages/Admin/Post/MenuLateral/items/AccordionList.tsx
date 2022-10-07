import { Stack } from "@mui/material"
import { Dispatch, SetStateAction, ChangeEvent, MouseEvent } from "react"
import { ColorResult } from "react-color"
import { usePostContext } from "../../../../../Common/Context/Post/usePostContext"
import { postPrivacyOptions, permalinkOptions, propagationOptions } from "../../../../../Common/Script"
import { IPost } from "../../../../../Types"
import { ItemAccordionList } from "./item"
import { DefineBackground } from "./item/DefineBackground"


export const AccordionList = () =>
  <Stack>
    <DefineBackground
      accordionTitle='escolha a capa do post'
      accordionIndex={40}
      accordionLabel='capa'
      ariaLabel='background'
    />

    <ItemAccordionList
      accordionTitle='como será exibida a URL desse post?'
      accordionIndex={20}
      accordionLabel='permalink'
      options={permalinkOptions}
      name='permalink'
      hasCustomArea={true}
      ariaLabelledby='radio-bottom-permalink'
      inputId='permalink-custom'
      inputLabel='link  customizado'
      inputHelperText='http://site.com/link-customizado'
    />

    <ItemAccordionList
      accordionTitle='quem poderá ver esse post?'
      accordionIndex={40}
      accordionLabel='privacidade'
      options={postPrivacyOptions}
      name='privacy'
      hasCustomArea={false}
      ariaLabelledby='radio-bottom-pricacy'
    />

    <ItemAccordionList
      accordionTitle='como será a propagação?'
      accordionIndex={60}
      accordionLabel='propagação'
      options={propagationOptions}
      name='propagation'
      hasCustomArea={false}
      ariaLabelledby='radio-bottom-propagationOptions'
    />
  </Stack >
