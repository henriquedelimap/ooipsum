import { Stack, FormControl, InputBase, Button } from "@mui/material"
import { Script } from "../../Common/Script"

export const InMail = () => {
  return (
    <Stack direction='row' >
      <FormControl sx={{ height: 80, borderBottom: '1px solid #dbdbdb' }} fullWidth>
        <InputBase
          placeholder={Script.homeInput.placeholder}
          sx={{ height: '100%', borderRadius: '.2rem 0 0 .2rem', }}
          startAdornment={Script.homeInput.icon}
          fullWidth
        />
      </FormControl>
      <Button sx={{ borderRadius: '0', width: 100, fontFamily: 'Outfit' }}>
        {Script.homeInput.button}
      </Button>
    </Stack>
  )
}