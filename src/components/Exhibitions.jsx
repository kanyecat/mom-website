import React from 'react'
import styles from '../style';
import { tomntoms1 } from '../assets';
import { transition } from "../hoc";
import "./gallery.css"

const Exhibitions = () => {
  return (
      <div id='exhibitions' className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center z-10 text-primary font-diphylleia`}>
          <div className='flex md:flex-row flex-col'>
            <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px]'>YEAR</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2016</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>969 Market St, San Diego, CA 92101</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Solo Exhibition</span>
              </div>
              {/* <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div> */}
            </div>

            <div className='flex flex-col md:flex-[3] scroll-box md:h-[700px]'>
              <span className='md:text-start text-center w-full md:text-[60px] text-[35px] px-6 md:mb-4 mb-8'>TOM N TOMS</span>
              <img src={tomntoms1} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
            </div>

            <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4'>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px] '>YEAR</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2016</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>969 Market St, San Diego, CA 92101</span>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Solo Exhibition</span>
              </div>
              {/* <div className='flex flex-row pb-6 gap-4'>
                <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                in succession.</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
  )
}

export default transition(Exhibitions,"")