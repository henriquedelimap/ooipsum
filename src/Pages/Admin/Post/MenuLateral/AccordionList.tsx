import { Stack, Typography, ToggleButtonGroup, ToggleButton, Collapse, TextField, FormControl, InputLabel, OutlinedInput, FormHelperText, IconButton, InputBase, Box } from "@mui/material"
import { Dispatch, SetStateAction, ChangeEvent, useEffect, useState } from "react"
import { TwitterPicker, Color, ColorResult } from "react-color"
import { MdApproval, MdCheck, MdClose, MdKeyboardArrowLeft, MdKeyboardReturn, MdOutlineRemoveRedEye } from "react-icons/md"
import { IPost } from "."
import { MyAccordion } from "../../Config"
import { MyRadioGroup } from "../RadioGroup"
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'

const permalinkOptions = [
  {
    value: 'post-title',
    label: 'título'
  },
  {
    value: 'post-title-data',
    label: 'título e data'
  },
  {
    value: 'custom',
    label: 'customizado'
  }
]
const propagationOptions = [
  {
    value: 'blog',
    label: 'blog'
  },
  {
    value: 'newsletter',
    label: 'newsletter'
  },
  {
    value: 'blog-newsletter',
    label: 'blog e newsletter'
  }
]

const postPrivacyOptions = [
  {
    value: 'just-me',
    label: 'somente eu'
  },
  {
    value: 'subscriber',
    label: 'assinantes'
  },
  {
    value: 'public',
    label: 'público'
  }
]

export const AccordionList = (
  {
    post,
    setSearchImage,
    searchImage,
    handleChange,
    handleColor,
    postColor,
    selecionaImagem,
    setSelecionaImagem,
    setRandomImage,
    setPreviewImage,
    randomImage
  }: {
    post: IPost,
    setSearchImage: Dispatch<SetStateAction<string | undefined>>,
    searchImage: string | undefined,
    handleChange: (e: any) => void,
    handleColor: (color: ColorResult, event: ChangeEvent<HTMLInputElement>) => void,
    postColor: ColorResult | undefined,
    selecionaImagem: string | undefined,
    setSelecionaImagem: Dispatch<SetStateAction<string | undefined>>,
    setRandomImage: Dispatch<SetStateAction<number>>,
    setPreviewImage: Dispatch<SetStateAction<boolean>>,
    randomImage: number
  }) => {

  return (
    <Stack>
      <MyAccordion label="capa" index={114} >
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Typography variant='subtitle2' color='text.secondary'>escolha a capa do post </Typography>
          <ToggleButtonGroup
            fullWidth
            value={post.background.type}
            exclusive
            onChange={handleChange}
            aria-label='post image'
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

          <Collapse in={post.background.type === 'solido'}>
            <TwitterPicker color={postColor as unknown as Color} onChangeComplete={handleColor} />
          </Collapse>

          <Collapse in={post.background.type === 'image'}>
            <Stack spacing={1} sx={{ width: '100%' }}>

              <Stack spacing={.5} sx={{ width: '17.2rem' }} justifyContent='center' alignItems='start' direction='row'>
                {
                  randomImage !== 1
                    ? <IconButton sx={{ mt: .8 }} size='small' onClick={() => setRandomImage(anterior => anterior - 1)}>
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
                            ? <IconButton size='small' sx={{ ml: -1.2 }} onClick={() => setRandomImage(anterior => anterior + 1)}>
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



              <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ width: '100%' }}>


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
            </Stack>
          </Collapse>


        </Stack>
      </MyAccordion >


      <MyAccordion label="link permanente" index={114} >
        <Stack spacing={2}>
          <Typography variant='subtitle2' color='text.secondary'>como será exibida a URL desse post?</Typography>
          <MyRadioGroup
            value={post.permalink.option}
            handle={handleChange}
            options={permalinkOptions}
            name='permalink'
            hasCustomArea={true}
            ariaLabelledby='radio-bottom-permalink'
            handleInput={handleChange}
            inputValue={post.permalink.custom}
            inputId='permalink-custom'
            inputLabel='link  customizado'
            inputHelperText='http://site.com/link-customizado'
          />
        </Stack>
      </MyAccordion>

      <MyAccordion label="privacidade" index={223} >
        <Stack spacing={2}>
          <Typography variant='subtitle2' color='text.secondary'>quem poderá ver esse post?</Typography>
          <MyRadioGroup
            value={post.privacy}
            handle={handleChange}
            options={postPrivacyOptions}
            name='privacy'
            hasCustomArea={false}
            ariaLabelledby='radio-bottom-pricacy'
          />

        </Stack>
      </MyAccordion>

      <MyAccordion label="propagação" index={331} >
        <Stack spacing={2}>
          <Typography variant='subtitle2' color='text.secondary'>como será a propagação?</Typography>
          <MyRadioGroup
            value={post.propagation}
            handle={handleChange}
            options={propagationOptions}
            name='propagation'
            hasCustomArea={false}
            ariaLabelledby='radio-bottom-propagationOptions'
          />

        </Stack>
      </MyAccordion>
    </Stack >

  )
}