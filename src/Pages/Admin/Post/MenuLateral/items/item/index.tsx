import { Stack, Typography } from "@mui/material"
import { usePostContext } from "../../../../../../Common/Context/Post/usePostContext"
import { IAccordionItem } from "../../../../../../Types"
import { MyAccordion } from "../../../../Config"
import { MyRadioGroup } from "./RadioGroup"

export const ItemAccordionList = ({
  value,
  options,
  name,
  hasCustomArea,
  ariaLabelledby,
  handleInput,
  inputValue,
  inputId,
  inputLabel,
  inputHelperText,
  accordionTitle,
  accordionIndex,
  accordionLabel
}: IAccordionItem) => {
  const { handleMountPost } = usePostContext()
  return (

    <MyAccordion label={accordionLabel} index={accordionIndex} >
      <Stack spacing={2}>
        <Typography variant='subtitle2' color='text.secondary'>{accordionTitle}</Typography>
        <MyRadioGroup
          value={value}
          options={options}
          name={name}
          hasCustomArea={hasCustomArea}
          ariaLabelledby={ariaLabelledby}
          handleInput={handleInput}
          inputValue={inputValue}
          inputId={inputId}
          inputLabel={inputLabel}
          inputHelperText={inputHelperText}
        />
      </Stack>
    </MyAccordion>
  )
}
