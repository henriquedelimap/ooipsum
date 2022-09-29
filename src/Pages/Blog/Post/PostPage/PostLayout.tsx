import { Container, Divider, Stack } from "@mui/material"
import { PostPageBody } from "./Body"
import { PostPageHeader } from "./Header"
import { PostPageMoreAction } from "./MoreAction"

export const PostLayout = ({ page, category, edit }: { page?: any, category?: any, edit?: boolean }) => {
  return (
    <Container maxWidth='lg'>
      <Stack spacing={2}>

        <Stack sx={{ width: '100%' }} spacing={8} alignItems='center'>
          <PostPageHeader category={category} page={page} edit={edit} />
          <PostPageBody page={page} edit={edit} />
        </Stack>

        <Divider />

        <PostPageMoreAction page={page} edit={edit} />

      </Stack>
    </Container>


  )
}