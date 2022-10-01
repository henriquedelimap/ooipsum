import { FormControl, RadioGroup, FormControlLabel, Radio, Collapse, TextField } from "@mui/material"
import { ChangeEvent } from "react"

interface IRadioOptions {
  value: string
  label: string
}

interface IRadioGroup {
  ariaLabelledby: string
  name: string
  value: string
  handle: (event: ChangeEvent<HTMLInputElement>) => void
  options: IRadioOptions[]
  hasCustomArea?: boolean
  inputValue?: string | undefined
  handleInput?: (event: ChangeEvent<HTMLInputElement>) => void
  inputId?: string
  inputLabel?: string
  inputHelperText?: string
}
export const MyRadioGroup = (prop: IRadioGroup) => {
  return (

    <FormControl>

      <RadioGroup
        aria-labelledby={prop.ariaLabelledby}
        name={prop.name}
        value={prop.value}
        onChange={prop.handle}
      >
        {
          prop.options.map((item, index) => (
            <FormControlLabel key={item.label} value={item.value} control={<Radio />} label={item.label} />

          ))
        }
      </RadioGroup>

      <Collapse in={prop.hasCustomArea && prop.value === 'custom'}>
        <TextField
          value={prop.inputValue}
          onChange={prop.handleInput}
          size='small'
          fullWidth
          sx={{
            mt: 3,
            '& input': {
              border: 'none'
            },
          }}
          id={prop.inputId}
          label={prop.inputLabel}
          helperText={prop.inputHelperText}
        />
      </Collapse>

    </FormControl>

  )
}