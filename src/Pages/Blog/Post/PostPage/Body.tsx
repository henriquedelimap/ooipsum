import { Stack, Typography } from "@mui/material"

export const PostPageBody = ({ page }: { page: any }) => {
  return (
    <>
      <Stack alignItems='center' sx={{
        width: '100%',
        height: '80vh',
        background: '#3d3d3d',
        backgroundImage: `url(${page.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        overflow: 'hidden'
      }} >
      </Stack>


      <Stack spacing={8}>
        <Typography variant='h6' fontWeight={300} fontFamily='Outfit' paragraph>
          {page.abstract}
        </Typography>

        <Stack spacing={2}>

          <Typography variant='h3'>
            Introdução
          </Typography>

          <Typography variant='h6' fontWeight={300} fontFamily='Outfit' paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ad vel vitae autem, repellendus hic obcaecati repudiandae modi quam neque omnis accusamus odit illo ab a dicta atque nisi architecto, dolorem vero ratione labore facere. Est voluptatibus libero perferendis quam facilis laudantium ipsum iusto similique voluptas molestias nihil perspiciatis odio corrupti eaque quae repudiandae sequi, beatae vero optio consequuntur incidunt inventore accusantium distinctio nisi. Corrupti, nemo quidem animi cupiditate nostrum maiores voluptas tempore repudiandae est voluptatibus, aliquam aliquid quia rerum id nihil ipsam veritatis non suscipit. Aliquid atque sint alias!
          </Typography>

          <Typography variant='h6' fontWeight={300} fontFamily='Outfit' paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dolorem recusandae quaerat dignissimos, sunt ullam quod ut incidunt ea tempore distinctio libero aliquid ipsa earum deleniti cum quo consequatur exercitationem et. Aliquam magnam reprehenderit laudantium quisquam vitae illo, voluptatem assumenda, repellendus voluptas architecto, corrupti doloremque hic beatae sint sit blanditiis.
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}