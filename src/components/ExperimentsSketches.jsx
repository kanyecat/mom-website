import React, { useState } from 'react';
import styles from '../style';
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
    <div className={`bg-cover fixed top-0 right-0 bg-hanji-blue opacity-[0.5] grayscale transition-all ease-in-out w-full h-[100vh] z-0`}/>
  </>
  )
}

export default transition(ExperimentsSketches,"");