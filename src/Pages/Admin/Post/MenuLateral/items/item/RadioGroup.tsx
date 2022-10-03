import { FormControl, RadioGroup, FormControlLabel, Radio, Collapse, TextField } from "@mui/material"
import { IRadioGroup } from "../../../../../../Types"

export const MyRadioGroup = ({
  value,
  handle,
  options,
  name,
  hasCustomArea,
  ariaLabelledby,
  handleInput,
  inputValue,
  inputId,
  inputLabel,
  inputHelperText,
}: IRadioGroup) =>

  <FormControl>
    <RadioGroup
      aria-labelledby={ariaLabelledby}
      name={name}
      value={value}
      onChange={handle}
    >
      {
        options?.map((item, index) =>
          <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />)
      }
    </RadioGroup>

    <Collapse in={hasCustomArea && value === 'custom'}>
      <TextField
        value={inputValue}
        onChange={handleInput}
        size='small'
        fullWidth
        sx={{
          mt: 3,
          '& input': {
            border: 'none'
          },
        }}
        id={inputId}
        label={inputLabel}
        helperText={inputHelperText}
      />
    </Collapse>

  </FormControl>
