import { FormControl, RadioGroup, FormControlLabel, Radio, Collapse, TextField } from "@mui/material"
import { usePostContext } from "../../../../../../Common/Context/Post/usePostContext"
import { IRadioGroup } from "../../../../../../Types"

export const MyRadioGroup = ({
  value,
  options,
  name,
  hasCustomArea,
  ariaLabelledby,
  inputId,
  inputLabel,
  inputHelperText,
}: IRadioGroup) => {

  const { handleMountPost, post, setCustomPermalink, customPermalink } = usePostContext()

  return <FormControl>
    <RadioGroup
      aria-labelledby={ariaLabelledby}
      name={name}
      value={name === 'permalink' ? post?.permalink.option : post[`${name}`]}
      onChange={handleMountPost}
    >
      {
        options?.map((item, index) =>
          <FormControlLabel key={index} value={item.value} control={<Radio />} label={item.label} />)
      }
    </RadioGroup>

    <Collapse in={hasCustomArea && post?.permalink.option === 'custom'}>
      <TextField
        value={customPermalink?.replaceAll(' ', '-')}
        onChange={(e) => setCustomPermalink(e.target.value)}
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
}
