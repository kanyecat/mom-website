"use client";
import { useMousePosition } from '../utils/useMousePosition';
import styles from '../style';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, fadeIn } from '../motion'
import gsap from "gsap";
import "./gallery.css";
import { useEffect, useState, useRef } from 'react';
// import { mask } from '../assets';

const Hero = () => {

  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    requestAnimationFrame(animation);
  }, [])

  const animation = () => {
    if (xPercent <= -100){
      xPercent = 0;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    xPercent += 0.025 * direction;
    requestAnimationFrame(animation);
  }

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered? 400: 20;
  return (
    <>
      <section id='home' className={`${styles.paddingY}`}>
        <div className={`flex flex-row w-full justify-center `}>
          <div className={`flex ${styles.flexStart} flex-col ${styles.paddingX} md:pt-0 pt-4 z-10`}>
            <span className='font-diphylleia xs:text-[90px] text-[48px] xs:leading-[120.8px] leading-[60.8px] text-primary'>SAEGIL</span>
          </div>
        </div>
        <div className='slider-container'>
              <div className='slider'>
                <p ref={firstText} className='font-opensans font-normal'>- Calligraphy - Oriental Painting</p>
                <p ref={secondText} className='font-opensans font-normal'>- Calligraphy - Oriental Painting</p>
              </div>
        </div>
      </section>

    </>
  )
}

export default Hero