import { Stack, Typography, Avatar } from "@mui/material"
import { usePostContext } from "../../../../Common/Context/Post/usePostContext"
import { Text } from "../../../../Components/Text"

export const PostPageHeader = ({ page, category }: { page?: any, category?: any }) => {
  const { post } = usePostContext()

  return (
    <Stack
      spacing={8}
      alignItems='center'
      sx={{ width: '90%', pt: 8 }}
    >

      <Text
        content={page?.category}
        fontWeight={400}
        variant='h6'
        center
      />

      <Stack
        alignItems='center'
        sx={{ width: '100%' }}
        spacing={1}

      >
        <Text
          content={page?.title}
          variant='h3'
          fontFamily={1}
          center
        />

        <Text
          content={page?.subtitle}
          variant='h6'
          fontWeight={300}
          center

        />


      </Stack>

      <Stack
        direction='row'
        spacing={1}
        alignItems='center'
      >
        <Avatar
          sx={{
            width: 64,
            height: 64
          }} />
        <Stack spacing={1} >
          <Typography
            sx={{ textTransform: 'capitalize' }}
            fontFamily='Outfit'
            fontWeight={600}>
            henrique de lima pessoa
          </Typography>
          <Typography
            fontFamily='Outfit'
            fontWeight={300}
          >
            {page?.createdAt}
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  )
}