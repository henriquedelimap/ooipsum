import { Stack } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import { Script } from "../../Common/Script";
import { Parallax } from "./Animation/Parallax"
import { Slider } from './Animation/Slider'
import { PostThumb } from "./Post/PostThumb"
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
        Script.blog.map((item, index) => {
          return (

            <Parallax key={index} id={item.tag} >
              <Slider>
                <Stack direction='row' >

                  {
                    item.posts.map((post, index) => {
                      return (
                        <PostThumb index={index} key={index} post={post} />
                      )
                    })
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
