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
          width: '80vw',
          height: '80vh',

          cursor: 'pointer',
          margin: index === 0 ? ' 0 0 0 6rem' : '0',
          background: '#3d3d3d',
          borderRadius: '.8rem',
          border: '3px solid transparent',
          backgroundImage: `url(${post.img})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'all 400ms ease-in-out',
          backgroundSize: '100% ',
          '&:hover': {
            backgroundImage: `url(${post.img})`,

            backgroundSize: '116% ',

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
              <Typography fontFamily='Outfit' variant='h3' color='#fafafa' sx={{ textShadow: '-2px 2px 0px #3d3d3d' }}>
                {post?.title}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

    </PostContainer>
  )
}

const PostContainer = styled.div`
  scroll-snap-align: center;
  width: 100%;
`
