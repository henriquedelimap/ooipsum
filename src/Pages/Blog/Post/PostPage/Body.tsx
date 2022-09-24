import { Stack, Typography } from "@mui/material"
import { Text } from "../../../../Components/Text"
import { TextEditor } from "../../../Admin/Post/TextEditor"
export const PostPageBody = ({ page, edit }: { page?: any, edit?: boolean }) => {

  const text1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad vel vitae autem, repellendus hic obcaecati repudiandae modi quam neque omnis accusamus odit illo ab a dicta atque nisi architecto, dolorem vero ratione labore facere. Est voluptatibus libero perferendis quam facilis laudantium ipsum iusto similique voluptas molestias nihil perspiciatis odio corrupti eaque quae repudiandae sequi, beatae vero optio consequuntur incidunt inventore accusantium distinctio nisi. Corrupti, nemo quidem animi cupiditate nostrum maiores voluptas tempore repudiandae est voluptatibus, aliquam aliquid quia rerum id nihil ipsam veritatis non suscipit. Aliquid atque sint alias!
  Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos ad vel vitae autem, repellendus hic obcaecati repudiandae modi quam neque omnis accusamus odit illo ab a dicta atque nisi architecto, dolorem vero ratione labore facere.Est voluptatibus libero perferendis quam facilis laudantium ipsum iusto similique voluptas molestias nihil perspiciatis odio corrupti eaque quae repudiandae sequi, beatae vero optio consequuntur incidunt inventore accusantium distinctio nisi.Corrupti, `
  return (
    <>
      <Stack alignItems='center' sx={{
        width: '100%',
        height: '80vh',
        background: '#3d3d3d',
        backgroundImage: `url(${page?.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden'
      }} >
      </Stack>

      {
        edit ? <TextEditor />
          : <Stack sx={{ width: '100%' }} spacing={8}>
            <Text content={page?.abstract} variant='h6' fontWeight={300} paragraph />
            <Stack spacing={2}>
              <Typography variant='h3'>
                Introdução
              </Typography>
              <Text content={text1} variant='h6' fontWeight={300} paragraph />
            </Stack>
          </Stack>
      }
    </>
  )
}