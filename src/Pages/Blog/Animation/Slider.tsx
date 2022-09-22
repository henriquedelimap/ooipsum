import styled from "@emotion/styled";
import { Box, Paper, Stack } from "@mui/material";
import { motion, MotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import './style.css'


export const Slider = ({ children }: { children: ReactNode }) => {

  return (
    <CarouselContainer >
      <Carousel >
        <InnerCarousel>
          {children}
        </InnerCarousel>
      </Carousel>
    </CarouselContainer >
  )
}

const Carousel = styled.div`
  overflow: hidden;
  margin-top: 64px; 
`



const InnerCarousel = styled.div`
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
`

const CarouselContainer = styled.div`
  overflow: scroll;
`