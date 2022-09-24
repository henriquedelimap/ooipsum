import { Stack, Typography, Avatar, InputBase, FormControl, Badge, IconButton, OutlinedInput } from "@mui/material"
import { ReactElement, useState } from "react"
import { BsTextareaT } from "react-icons/bs"
import { MdAdd, MdClose, MdEdit } from "react-icons/md"
import { Text } from "../../../../Components/Text"

export const PostPageHeader = ({ page, category, edit }: { page?: any, category?: any, edit?: boolean }) => {
  return (
    <Stack
      spacing={8}
      alignItems='center'
      sx={{ width: '90%', pt: 8 }}
    >

      {
        edit
          ? <OutlinedInput placeholder="categoria" size='small' fullWidth />
          : <Text
            content={category.tag}
            fontWeight={400}
            variant='h6'
            center
          />
      }

      <Stack
        alignItems='center'
        sx={{ width: '100%' }}
        spacing={1}

      >

        {
          edit
            ? <OutlinedInput placeholder="título" size='small' fullWidth />
            : <Text
              content={page.title}
              variant='h2'
              fontFamily={1}
              center
            />

        }

        {
          edit
            ? <OutlinedInput placeholder="subtítulo" size='small' fullWidth />
            : <Text
              content={page.subtitle}
              variant='h6'
              fontWeight={300}
              center

            />

        }

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