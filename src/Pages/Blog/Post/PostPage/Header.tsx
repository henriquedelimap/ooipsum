import { Stack, Typography, Avatar } from "@mui/material"

export const PostPageHeader = ({ page, category }: { page: any, category: any }) => {
  return (
    <Stack
      spacing={8}
      alignItems='center'
      sx={{ width: '90%', pt: 8 }}
    >

      <Typography
        fontFamily='Outfit'
        fontWeight={400}
        variant='h6'
      >
        {category.tag}
      </Typography>

      <Stack
        alignItems='center'
        spacing={1}
      >
        <Typography
          align='center'
          variant='h2'
        >
          {page.title}
        </Typography>

        <Typography
          fontFamily='Outfit'
          fontWeight={300}
          align='center'
          variant='h6'
        >
          {page.subtitle}
        </Typography>
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
            {page.createdAt}
          </Typography>
        </Stack>
      </Stack>

    </Stack>
  )
}