import {
  Stack,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText
} from "@mui/material"
import { Dispatch, SetStateAction } from "react"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi"
import { MdKeyboardArrowLeft, MdClose } from "react-icons/md"


interface IInputSearchImage {
  randomImage: number
  setRandomImage: Dispatch<SetStateAction<number>>
  searchImage: string | undefined
  setSearchImage: Dispatch<SetStateAction<string | undefined>>
}
export const InputSearchImage = ({
  randomImage,
  setRandomImage,
  searchImage,
  setSearchImage
}: IInputSearchImage) =>
  <Stack spacing={.5} sx={{ width: '17.2rem' }} justifyContent='center' alignItems='start' direction='row'>
    {
      randomImage !== 1
        ? <IconButton
          sx={{ mt: .8 }}
          size='small'
          onClick={() => setRandomImage(anterior => anterior - 1)}>
          <MdKeyboardArrowLeft />
        </IconButton>
        : ''
    }


    <FormControl fullWidth size='small'>
      <InputLabel size='small'>pesquise imagem</InputLabel>
      <OutlinedInput
        onChange={(e) => setSearchImage(e.target.value as string)}
        label='pesquise imagem'
        startAdornment={
          <>

            {
              !!searchImage
                ? <IconButton
                  size='small'
                  sx={{ ml: -1.2 }}
                  onClick={() => setRandomImage(anterior => anterior + 1)}>
                  <GiPerspectiveDiceSixFacesRandom className='iconRandom' />
                </IconButton>
                : ''
            }
          </>
        }
        endAdornment={<>
          {
            !!searchImage ? <IconButton size='small' onClick={() => {
              setSearchImage('')
              setRandomImage(1)
            }} >
              <MdClose />
            </IconButton> : ''
          }
        </>}
        value={searchImage}
      />
      <FormHelperText>insira uma palavra-chave</FormHelperText>
    </FormControl>
  </Stack>

