import { Stack, Typography, Avatar, InputBase, FormControl, Badge, IconButton, OutlinedInput } from "@mui/material"
import { ReactElement, useState } from "react"
import { BsTextareaT } from "react-icons/bs"
import { MdAdd, MdClose, MdEdit } from "react-icons/md"
import { Text } from "../../../../Components/Text"

export const PostPageHeader = ({ page, category }: { page?: any, category?: any }) => {
  return (
    <Stack
      spacing={8}
      alignItems='center'
      sx={{ width: '90%', pt: 8 }}
    >

      <Text
        content={category?.tag}
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
          variant='h2'
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