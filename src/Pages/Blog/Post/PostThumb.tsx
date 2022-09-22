import styled from "@emotion/styled"
import { Card, CardContent, Chip, Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useNavigate } from "react-router-dom"
import '../Animation/style.css'
export const PostThumb = ({ post, index, small }: { post: any, index: number, small?: boolean }) => {
  const navigate = useNavigate()


  return (
    <PostContainer>

      <Card
        onClick={() => navigate(`/blog/${post.id}`)}
        sx={{
          width: !!small ? '50vw' : '80vw',
          height: !!small ? '50vw' : '80vh',
          cursor: 'pointer',
          margin: index === 0 ? ' 0 0 0 4rem' : '0',
          background: '#3d3d3d',
          borderRadius: '.8rem',
          backgroundImage: `url(${post.img})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'all 400ms ease-in-out',
          backgroundSize: '130%',
          '&:last-of-type': {
            marginRight: '2rem'
          },
          '&:hover': {
            backgroundSize: '150%',

          }
        }}>
        <CardContent sx={{
          height: '100%',
          width: '100%',
        }}>
          <Stack sx={{ height: '100%' }}>
            <Stack alignItems='end' justifyContent='start' sx={{ height: '100%' }}>
              <Typography fontFamily='Outfit'
                variant='h5'
                fontWeight={400}
                color='#3d3d3d'
                sx={{
                  background: '#fafafaaf',
                  p: 2, pt: 0, pb: 0,
                  borderRadius: 200,
                }}
              >

                ler artigo
              </Typography>
            </Stack>
            <Stack
              alignItems='center'
              justifyContent='end'
              sx={{
                borderRadius: '.8rem',
              }} >
              <Typography
                fontFamily='Outfit'
                variant='h3'
                color='#fafafa'
                sx={{ textShadow: '-2px 2px 0px #3d3d3d' }}
              >
                {post?.title}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </PostContainer >
  )
}

const PostContainer = styled.div`
  scroll-snap-align: center;
  width: 100%;

  `
