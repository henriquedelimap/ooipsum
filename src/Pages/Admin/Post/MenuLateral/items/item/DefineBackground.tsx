import { Stack, Typography, ToggleButtonGroup, ToggleButton, Collapse, InputBase, IconButton } from "@mui/material"
import { TwitterPicker, Color } from "react-color"
import { MdOutlineRemoveRedEye, MdCheck, MdClose } from "react-icons/md"
import { usePostContext } from "../../../../../../Common/Context/Post/usePostContext"
import { IAccordionItem, IDefinedBackground } from "../../../../../../Types"
import { MyAccordion } from "../../../../Config"
import { InputSearchImage } from "./InputSearchImage"

export const DefineBackground = ({
  ariaLabel,
  accordionTitle,
  accordionIndex,
  accordionLabel,
}: IDefinedBackground) => {
  const {
    post,
    handleMountPost,
    handlePostColor,
    previewImage,
    setPreviewImage,
    randomImage,
    setRandomImage,
    searchImage,
    setSearchImage,
    postColor,
    selecionaImagem,
    setSelecionaImagem
  } = usePostContext()
  return (


    <MyAccordion label={accordionLabel} index={accordionIndex} >
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Typography variant='subtitle2' color='text.secondary'>{accordionTitle} </Typography>
        <ToggleButtonGroup
          fullWidth
          id="background"
          value={post?.background?.type}
          exclusive
          onChange={handleMountPost}
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


        <Collapse in={post.background.type === 'solido'}>
          <TwitterPicker color={postColor as unknown as Color} onChangeComplete={handlePostColor} />
        </Collapse>

        <Collapse in={post.background.type === 'image'}>
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

                <IconButton onClick={() => setPreviewImage((prev: any) => !prev)}>
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
  )
}