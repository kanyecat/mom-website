import React from 'react'
import styles from '../style';
import { library1, library2, library3, library4, library5, library6, tomntoms1, tomntoms2, tomntoms3 } from '../assets';
import { transition } from "../hoc";
import "./gallery.css"

const Exhibitions = () => {
  return (
      <div id='exhibitions' className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center z-10 text-primary font-diphylleia`}>
          <div className='flex flex-col gap-8'>
          <div className='flex md:flex-row flex-col'>
              <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <span className='visible flex md:hidden md:text-start text-center pb-6 w-full md:text-[60px] text-[35px] px-6 md:mb-4'>Saegil Members' First Exhibition</span>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2014</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>7655 Clairemont Mesa Boulevard, San Diego, CA 92111 (library 2nd floor)</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Group Exhibition</span>
                </div>
              </div>

              <div className='flex flex-col md:flex-[3] scroll-box md:h-[700px]'>
                <span className='hidden md:flex md:visible md:text-start text-center w-full md:text-[60px] text-[35px] px-6 md:mb-4'>Saegil Members' First Exhibition</span>
                <img src={library1} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={library2} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={library3} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={library4} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={library5} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={library6} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              </div>

              <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4 md:pt-[15vh]'>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px] '>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2014</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>7655 Clairemont Mesa Boulevard, San Diego, CA 92111 (library 2nd floor)</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Group Exhibition</span>
                </div>
              </div>
            </div>


            <div className='flex md:flex-row flex-col'>
              <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <span className='visible flex md:hidden md:text-start text-center pb-6 w-full md:text-[60px] text-[35px] px-6 md:mb-4'>TOM N TOMS</span>
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
              </div>

              <div className='flex flex-col md:flex-[3] scroll-box md:h-[700px]'>
                <span className='hidden md:flex md:visible md:text-start text-center w-full md:text-[60px] text-[35px] px-6 md:mb-4'>TOM N TOMS</span>
                <img src={tomntoms1} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={tomntoms2} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={tomntoms3} loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              </div>

              <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4 md:pt-[15vh]'>
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
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default transition(Exhibitions,"")