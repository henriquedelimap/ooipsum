import { Stack } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import { Script } from "../../Common/Script";
import { Parallax } from "./Animation/Parallax"
import { Slider } from './Animation/Slider'
import { PostThumb } from "./Post/PostThumb"

export const category = Script?.posts?.map(item => item.category)

export const filterCategory = category?.filter((e, i) => {
  return category.indexOf(e) === i
})

export const Blog = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>

      {
        filterCategory?.map((item, index) => {
          let matchPostByCategory = (Script?.posts?.map(post => post.category === item ? post : '')).filter(i => i)

          return (
            <Parallax key={index} id={item} >
              <Slider>
                <Stack direction='row' spacing={4} sx={{ pl: 12, pr: 12 }} >
                  {
                    matchPostByCategory?.map((post, index) => <PostThumb index={index} key={index} post={post} />)
                  }
                </Stack>
              </Slider>
            </Parallax>
          )
        }
        )
      }
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          left: 0,
          right: 0,
          height: 5,
          background: '#bdbdbd',
          top: 40
        }} />

    </>
  )
}
