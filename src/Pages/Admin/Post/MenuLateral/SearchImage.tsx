import { Stack, Collapse, Grid } from "@mui/material";
import { useState, useEffect, Dispatch, SetStateAction } from "react";

export const SearchImagePaper = ({ searchImage, backgroundType, selecionaImagem, setSelecionaImagem }: { searchImage: string | undefined, backgroundType: string, selecionaImagem: string | undefined, setSelecionaImagem: Dispatch<SetStateAction<string | undefined>> }) => {
  const [result, setResult] = useState<any>([''])

  const fetchRequest = async () => {
    let Access_Key = "rqQXwCDIFG2i_2LtTwi1sHOr07iPKW1n94C_HArmR64"
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchImage}&client_id=${Access_Key}`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setResult(result)
  };
  useEffect(() => {
    fetchRequest();
  }, [searchImage]);

  return (
    <Stack sx={{
      position: 'relative',
      maxWidth: !!searchImage && backgroundType === 'image' ? '64vw' : '0vw',
      height: '93vh',
      mr: '332px',
      transition: 'all 300ms ease-in-out',
      overflow: 'scroll'

    }}>

      <Collapse in={!!searchImage && backgroundType === 'image'} >
        <Grid
          gap={2}
          container
          alignItems='start'
          sx={{
            width: '64vw', p: 2, pl: 0, pr: 2,
          }}
          justifyContent='end'>
          {
            result?.map((item: { urls: { small: string | undefined; }; }, index: any) => (
              <Grid
                onClick={() => setSelecionaImagem(item?.urls?.small)}
                item
                key={index}
                xs={5.8}
                sx={{
                  height: 'auto',
                  width: '100%',
                  transition: 'all 200ms ease',
                  transform: selecionaImagem === item?.urls?.small
                    ? 'scale(1.02)'
                    : 'none',

                }}
              >
                <img style={{
                  padding: '2px',
                  objectFit: 'cover',
                  height: 640,
                  borderRadius: '32px',
                  width: '98%',
                  boxShadow: selecionaImagem === item?.urls?.small && index % 2 === 0
                    ? '-4px 4px 10px 1px #3d3d3d3d'
                    : selecionaImagem === item?.urls?.small && index % 2 !== 0
                      ? '4px 4px 10px 1px #3d3d3d3d'
                      : 'none',
                  outline: selecionaImagem === item?.urls?.small ? '3px solid #0066cc' : '3px solid transparent',

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