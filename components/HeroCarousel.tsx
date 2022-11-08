import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from '@mui/system';
import hero from '../src/constants/hero'

const HeroCarousel = (props : any) => {
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (

    <Box sx={{ maxWidth: "1398px", margin: "auto" }}>

    
    <Carousel  
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1
            },
            mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
            },
            tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 1
            }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
       

        
        
        <img
            src="https://i.ibb.co/nrYj4HW/1.png"
            style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
            }}
        />
        <img
            src="https://i.ibb.co/3cZsthV/2.png"
            style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
            }}
        />
        <img
            src="https://i.ibb.co/7YMqqMG/5.png"
            style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
            }}
        />
        <img
            src="https://i.ibb.co/qWFRhm9/4.png"
            style={{
            display: 'block',
            height: '100%',
            margin: 'auto',
            width: '100%'
            }}
        />
        
        </Carousel>
    </Box>

  )
}

export default HeroCarousel