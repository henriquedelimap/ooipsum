import styled from "@emotion/styled"
import { Card, CardContent, Paper, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { useNavigate } from "react-router-dom"
import '../Animation/style.css'
export const PostThumb = ({ post, index }: { post: any, index: number }) => {
  const navigate = useNavigate()


  return (
    <PostContainer>

      <Card
        onClick={() => navigate(`${post.id}`)}
        sx={{
          width: '40vw',
          height: '80vh',
          cursor: 'pointer',
          margin: index === 0 ? ' 0 0 0 4rem' : '0',
          background: '#3d3d3d',
          borderRadius: '.8rem',
          backgroundImage: `url(${post.img})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'all 400ms ease-in-out',
          backgroundSize: 'cover',
          '&:last-of-type': {
            marginRight: '2rem'
          },
          '&:hover': {
            width: '80vw'
          }
        }}>
        <CardContent sx={{
          height: '100%',
          width: '100%',
        }}>
          <Stack sx={{ height: '100%' }}>
            <Stack sx={{ height: '100%' }}>
            </Stack>
            <Stack
              alignItems='center'
              justifyContent='center'
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
