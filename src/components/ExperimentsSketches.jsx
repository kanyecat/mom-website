import React, { useState } from 'react';
import styles from '../style';
import { pictures } from '../constants';
import { transition } from "../hoc";
import "./gallery.css";

const ExperimentsSketches = () => {
  const [model, setModel] = useState(false);
  const [tempImage, setTempImage] = useState('');
  const getImage = (image) => {
    setTempImage(image);
    setModel(true);
  };

  return (
  <>
    <div id='experiments-sketches' className={`w-full h-[100vh] bg-cover fixed top-0 right-0 bg-hanji-white z-0`}/>
      <div className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} justify-center z-10`}>
          <div className={model? "model open" : "model"} onClick={() => setModel(false)}>
            <img src={tempImage} loading='lazy'/>
            <div className='direction text-dimWhite font-opensans font-thin text-[14px]'>click anywhere to close</div>
          </div>
          <div className='gallery'>
            {pictures.map((item, index) => (
              <div className='pics'
              loading="lazy"
              key={index}>
                  <img
                    className='pic'
                    src={item.image} 
                    onClick={() => getImage(item.image)}
                    placeholder='blur'
                  />
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