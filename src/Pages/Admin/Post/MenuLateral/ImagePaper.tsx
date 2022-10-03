import { Stack, Collapse, Grid, IconButton, Box } from "@mui/material";
import { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";
import { MdClose } from 'react-icons/md'

export interface ISearchImage {
  searchImage: string | undefined,
  backgroundType: string,
  selecionaImagem: string | undefined,
  setSelecionaImagem: Dispatch<SetStateAction<string | undefined>>,
  randomImage: number,
  setRandomImage: Dispatch<SetStateAction<number>>,
  previewImage: boolean,
}
export const SearchImagePaper = (prop: ISearchImage) => {
  const {
    searchImage,
    backgroundType,
    selecionaImagem,
    setSelecionaImagem,
    randomImage,
    setRandomImage,
    previewImage
  } = prop
  const [result, setResult] = useState<any>([''])
  const [limit, setLimit] = useState<number | undefined>(undefined)
  if (randomImage === limit) {
    setRandomImage(1)
  }
  const fetchRequest = async () => {
    let Access_Key = "rqQXwCDIFG2i_2LtTwi1sHOr07iPKW1n94C_HArmR64"
    randomImage
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=${randomImage}&query=${searchImage}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    setLimit(dataJ.total_pages)
    setResult(result)
  };
  useEffect(() => {
    fetchRequest();
  }, [searchImage, randomImage]);


  return (
    <Stack
      sx={{
        position: 'relative',
        maxWidth: !!searchImage && backgroundType === 'image' ? '64vw' : previewImage ? '64vw' : '0vw',
        height: '85vh',
        mr: '332px',
        transition: 'all 300ms ease-out',
        overflow: 'scroll'
      }}>

      <Collapse in={!!searchImage && backgroundType === 'image' || previewImage} >
        <Grid
          gap={3}
          container
          alignItems='center'
          sx={{
            width: '64vw', p: 2
          }}
          justifyContent='space-around'>

          {
            previewImage ? <Grid xs={12} item sx={{ width: 'auto', height: '100%' }}>
              <img src={selecionaImagem} style={{
                objectFit: 'cover',
                height: 640,
                borderRadius: '3px 32px 3px 32px',
                width: '98%',

              }} />

            </Grid>
              : result?.map((item: { urls: { small: string | undefined; }; }, index: any) => (
                <Grid
                  onClick={() => setSelecionaImagem(item?.urls?.small)}
                  item
                  key={index}
                  xs={selecionaImagem === item?.urls?.small ? 12 : 10}
                  sx={{
                    height: 'auto',
                    width: '100%',
                    transition: 'all 300ms ease-in',

                  }}
                >
                  <img style={{
                    padding: '2px',
                    scrollSnapAlign: 'center',

                    objectFit: 'cover',
                    height: 640,
                    borderRadius:
                      selecionaImagem === item?.urls?.small
                        ? '3px'
                        : index % 2 !== 0
                          ? '3px 32px 3px 32px'
                          : '32px 3px 32px 3px',
                    width: '98%',


                    outline: selecionaImagem === item?.urls?.small ? '1.8px solid #0066cc' : '1.8px solid transparent',

                    opacity: !!searchImage && backgroundType === 'image' ? 1 : 0,
                    transition: 'all 300ms ease-in'
                  }}
                    key={index}
                    src={item?.urls?.small}
                  />
                </Grid>
              ))
          }

        </Grid>
      </Collapse>
    </Stack>
  )

}