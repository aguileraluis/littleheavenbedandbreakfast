import React, { useEffect, useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

const HeroSection = styled.section`
    height: 88vh;
    width: auto;
    position: inline-block;
    overflow: hidden;
    animation: sliderZoomEffect 14s linear infinite;
    border-style: solid;
    border-width: 1px;
    @keyframes sliderZoomEffect {
      0%
    {
      transform: scale(1);
    }
    50%
    {
      transform: scale(0.98);
    } 
`;

const HeroWrapper = styled.div`
    width: 100%; 
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '',
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: liner-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100% )
  }
`;

const HeroImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index; 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px); 
  color: #fff;
  align-items: center;
  text-align: center;
  justify-content: center;
  
  
  h3 {
    font-size: clamp(1rem, 4vw, 2rem);
    font-weight: 100; 
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    padding-top: 0.8rem;
    font-family: 'Kalam', cursive;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  }
`;

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;  
`;

const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`

const arrowButtons = css`
  width: 50px; 
  height: 50px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 40px;
  padding: 5px;
  margin-left: 11rem;
  user-select: none;
  transition: 0.3s;
  
  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }`;

const PrevArrow = styled(IoArrowBack)`
    ${arrowButtons}
  `;

const NextArrow = styled(IoArrowForward)`
    ${arrowButtons}
  `;

const Hero = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }

    timeout.current = setTimeout(nextSlide, 8000)

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)

    console.log(current);
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)

    console.log(current)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
    exit: { opacity: 0 }
  }

  return (
    <HeroSection>
      <HeroWrapper>
        <AnimatePresence>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt}
                      initial='hidden'
                      animate='visible'
                      exit='exit'
                      variants={fadeAnimation}
                    />
                    <HeroContent style={{ textAlign: 'center', alignItems: 'center' }}>
                      <h3 style={{color: 'black', opacity: '0.8', backgroundColor: 'rgba(237, 167, 29, 0.897)', padding: '15px', borderRadius: '10px', textAlign:'center'}}data-aos="fade-down" data-aos-duration="600">{slide.title}</h3>
                      <h2 style={{color: 'black', opacity: '0.8', backgroundColor: 'rgb(300, 116, 2, 0.848)', padding: '10px', borderRadius: '10px'}}data-aos="fade-up" data-aos-duration="600">{slide.titletwo}</h2>
                      {/* <Button style={{ maxWidth: '160px', textDecoration: 'none' }}
                        data-aos='zoom-out'
                        data-aos-duration='500'
                        data-aos-delay='200'
                        to='/home'
                        primary='true'
                      >
                        Get Started
                        <Arrow />
                      </Button> */}
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            )
          })}
        </AnimatePresence>
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero