import { Stack, Typography, ToggleButtonGroup, ToggleButton, Collapse, InputBase, IconButton } from "@mui/material"
import { TwitterPicker, Color } from "react-color"
import { MdOutlineRemoveRedEye, MdCheck, MdClose } from "react-icons/md"
import { IAccordionItem, IDefinedBackground } from "../../../../../../Types"
import { MyAccordion } from "../../../../Config"
import { InputSearchImage } from "./InputSearchImage"

export const DefineBackground = ({
  value,
  handle,
  ariaLabel,
  accordionTitle,
  accordionIndex,
  accordionLabel,
  setSearchImage,
  searchImage,
  handleColor,
  postColor,
  selecionaImagem,
  setSelecionaImagem,
  setRandomImage,
  setPreviewImage,
  randomImage

}: IDefinedBackground) =>
  <MyAccordion label={accordionLabel} index={accordionIndex} >
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Typography variant='subtitle2' color='text.secondary'>{accordionTitle} </Typography>
      <ToggleButtonGroup
        fullWidth
        value={value}
        exclusive
        onChange={handle}
        aria-label={ariaLabel}
      >
        <ToggleButton id='solidColor' sx={{ border: 'none' }} value='solido' aria-label='solid color'>
          <Typography variant='subtitle2'>
            cor sólida
          </Typography>
        </ToggleButton>

        <ToggleButton id='image' sx={{ border: 'none' }} value='image' aria-label='image background'>
          <Typography variant='subtitle2'>
            imagem
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>


      <Collapse in={value === 'solido'}>
        <TwitterPicker color={postColor as unknown as Color} onChangeComplete={handleColor} />
      </Collapse>

      <Collapse in={value === 'image'}>
        <Stack
          alignItems='center'
          justifyContent='space-between'
          sx={{ width: '100%' }}
        >
          <InputSearchImage
            randomImage={randomImage}
            setRandomImage={setRandomImage}
            searchImage={searchImage}
            setSearchImage={setSearchImage}
          />

          {selecionaImagem !== undefined ? <InputBase
            fullWidth
            value={selecionaImagem}
            startAdornment={<>

              <IconButton onClick={() => setPreviewImage(prev => !prev)}>
                <MdOutlineRemoveRedEye />
              </IconButton>
            </>}
            endAdornment={<> {
              selecionaImagem !== undefined
                ? <Stack direction='row' >
                  <IconButton onClick={() => {
                    setRandomImage(1)
                    setSearchImage('')
                  }} size='small'>
                    <MdCheck fontSize={24} color='green' />
                  </IconButton>
                  <IconButton onClick={() => setSelecionaImagem(undefined)} size='small'>
                    <MdClose fontSize={24} color='#6d6d6d' />
                  </IconButton>
                </Stack>
                : ''
            }</>
            } />
            : ''
          }
        </Stack>
      </Collapse>


    </Stack>
  </MyAccordion >