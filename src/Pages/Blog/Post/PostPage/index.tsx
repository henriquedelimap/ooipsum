import { Container, Typography, Stack } from "@mui/material"
import { useParams } from "react-router-dom"
import { Script } from "../../../../Common/Script"
import { NotFound } from "../../../NotFound"
import { Slider } from "../../Animation/Slider"
import { PostThumb } from "../PostThumb"
import { PostPageNewsletter } from "./Newsletter"
import { PostLayout } from "./PostLayout"

export const PostPage = () => {

  const { id } = useParams()
  const page = Script.blog.map((item) => item.posts.find((post) => post.id === id)).filter(i => i)[0]
  const category = Script.blog.find((item) => item.posts.find((post) => post.id === id))

  if (!page) {
    return (
      <NotFound />
    )
  }

  return (
    <>
      <PostLayout page={page} />
      <Container maxWidth='xl'>
        <PostPageNewsletter />
      </Container>
      <Container maxWidth='lg'>
        <Typography align='left' variant="h3">sugestões para você</Typography>
        <Slider>
          <Stack direction='row' spacing={2}>
            {
              category?.posts.map((post, index) => (
                post === page ? '' : <PostThumb small index={index} key={index} post={post} />
              )
              )
            }
          </Stack>
        </Slider>
      </Container>
    </>
  )
}