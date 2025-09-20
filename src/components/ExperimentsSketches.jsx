import React, { useState } from 'react';
import styles from '../style';
import { pictures } from '../constants';
import { transition } from "../hoc";
import suyang from "../assets/Suyang-Enlightenment.mp4";
import "./gallery.css";
import "./slideshow.css";

const ExperimentsSketches = () => {
  const [model, setModel] = useState(false);
  const [tempImage, setTempImage] = useState('');
  const [tempIndex, setTempIndex] = useState(null);
  const getImage = (image, i) => {
    setTempImage(image);
    setModel(true);
    setTempIndex(i);
  };
  const plusSlides = (n) => {
    if (tempIndex === null) return;
    const len = pictures.length;
    setTempIndex((tempIndex + n + len) % len); // wrap-around
    setTempImage(pictures[tempIndex].image);
  };

  return (
  <>
    <div id='experiments-sketches' className={`w-full h-[100vh] bg-cover fixed top-0 right-0 bg-hanji-white z-0`}/>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} justify-center z-10`}>
          <div className={model? "model open" : "model"}>
            <button className='direction text-dimWhite font-opensans font-thin text-[14px]' onClick={() => setModel(false)}>click here to close</button>
            <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
            <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
            <img src={tempImage} loading='lazy'/>
          </div>
          <div className='gallery'>
            {pictures.map((item, index) => (
              <div className='pics'
              loading="lazy"
              key={index}>
                  <img
                    className='pic'
                    src={item.image} 
                    onClick={() => getImage(item.image, index)}
                    placeholder='blur'
                  />
                  {/* <p>{index}</p> */}
                {/* </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
  </>
  )
}

export default transition(ExperimentsSketches,"");