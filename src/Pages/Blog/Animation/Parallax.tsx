import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { useRef, ReactNode } from "react";
import './style.css'



export const Parallax = ({ id, children }: { id: number | string, children: ReactNode }) => {
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
          borderRadius: '.4rem'
        }}>
        {`#${id}`}
      </Typography>

      {children}
    </ParallaxSection >
  )
}

const ParallaxSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  scroll-snap-align: center;
`
