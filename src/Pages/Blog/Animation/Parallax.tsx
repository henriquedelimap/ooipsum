import styled from "@emotion/styled";
import { Typography, Stack, useScrollTrigger } from "@mui/material";
import { useScroll } from "framer-motion";
import { useRef, ReactNode } from "react";
import { MdSlideshow } from "react-icons/md";
import './style.css'



export const Parallax = ({ id, children }: { id: number | string, children: ReactNode }) => {
  const { scrollXProgress } = useScroll()

  return (
    <ParallaxSection>
      <Typography
        variant='h3'
        fontStyle='italic'
        fontWeight={200}
        fontFamily='Outfit'
        sx={{
          color: '#3d3d3d',
          transform: 'rotate(270deg)',
          position: 'absolute',
          left: -70,
          background: '#fafafaaf',
          backdropFilter: 'blur(30px)',
          p: 4,
          pt: 1,
          pb: 1,
          borderRadius: '3px'
        }}>
        {`#${id}`}
      </Typography>

      {children}

      <Stack
        alignItems='center'
        justifyContent='center'
        sx={{
          position: 'absolute',
          width: 50,
          height: '40%',
          right: 0,

        }} >
      </Stack>
    </ParallaxSection >
  )
}

const ParallaxSection = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  scroll-snap-align: center;
`
