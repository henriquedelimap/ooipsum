import { Container, Typography, Stack, Avatar, Divider, Chip, IconButton, Grid } from "@mui/material"
import { MdShare } from "react-icons/md"
import { useParams } from "react-router-dom"
import { Script } from "../../../../Common/Script"
import { InMail } from "../../../Home/inMail"
import { NotFound } from "../../../NotFound"
import { Slider } from "../../Animation/Slider"
import { PostThumb } from "../PostThumb"
import { PostPageBody } from "./Body"
import { PostPageHeader } from "./Header"
import { PostPageMoreAction } from "./MoreAction"
import { PostPageNewsletter } from "./Newsletter"

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
      <Container maxWidth='lg'>

        <Stack spacing={2}>
          <Stack sx={{ width: '100%' }} spacing={8} alignItems='center'>

            <PostPageHeader category={category} page={page} />

            <PostPageBody page={page} />

          </Stack>
          <Divider />

          <PostPageMoreAction page={page} />

        </Stack>
      </Container>
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