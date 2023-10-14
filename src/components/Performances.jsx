import React from 'react'
import styles from '../style';
import { transition } from "../hoc";
import "./gallery.css"
import { bishop11, bishop12, bishop13, bishop14, bishop15, bishop21, bishop22, bishop23, bishop24, bishop25, sycamore1, sycamore2, sycamore3, sycamore4 } from '../assets';

const Performances = () => {
  return (
    <div id='exhibitions' className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-center z-10 text-primary font-diphylleia`}>
          <div className='flex flex-col gap-8'>
            <div className='flex md:flex-row flex-col'>
              <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <span className='visible flex md:hidden md:text-start text-center pb-6 w-full md:text-[60px] text-[35px] px-6 md:mb-4'>The Bishop's School</span>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2011</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>7607 La Jolla Boulevard, La Jolla, CA 92037</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Volunteering</span>
                </div>
                {/* <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                  canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                  in succession.</span>
                </div> */}
              </div>

              <div className='flex flex-col md:flex-[3] scroll-box md:h-[700px]'>
                <span className='hidden md:flex md:visible md:text-start text-center w-full md:text-[60px] text-[35px] px-6 md:mb-4'>The Bishop's School</span>
                <img src={bishop11} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop12} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop13} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop14} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop15} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              </div>

              <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4 md:pt-[15vh]'>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px] '>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2011</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>7607 La Jolla Boulevard, La Jolla, CA 92037</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Volunteering</span>
                </div>
                {/* <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                  canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                  in succession.</span>
                </div> */}
              </div>
            </div>

            <div className='flex md:flex-row flex-col pt-10'>
              <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <span className='visible flex md:hidden md:text-start text-center pb-6 w-full md:text-[60px] text-[35px] px-6 md:mb-4'>Sycamore Ridge School</span>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2012</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>5333 Old Carmel Valley Rd, San Diego, CA 92130</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Volunteering</span>
                </div>
                {/* <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                  canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                  in succession.</span>
                </div> */}
              </div>

              <div className='flex flex-col md:flex-[3] scroll-box md:h-[700px]'>
                <span className='hidden md:flex md:visible md:text-start text-center w-full md:text-[60px] text-[35px] px-6 md:mb-4'>Sycamore Ridge School</span>
                <img src={sycamore1} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={sycamore2} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={sycamore3} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={sycamore4} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              </div>

              <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4 md:pt-[15vh]'>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px] '>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2012</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>5333 Old Carmel Valley Rd, San Diego, CA 92130</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Volunteering</span>
                </div>
                {/* <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                  canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                  in succession.</span>
                </div> */}
              </div>
            </div>
            <div className='flex md:flex-row flex-col'>
              <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <span className='visible flex md:hidden md:text-start text-center pb-6 w-full md:text-[60px] text-[35px] px-6 md:mb-4'>The Bishop's School</span>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2012</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>7607 La Jolla Boulevard, La Jolla, CA 92037</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Volunteering</span>
                </div>
                {/* <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                  canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                  in succession.</span>
                </div> */}
              </div>

              <div className='flex flex-col md:flex-[3] scroll-box md:h-[700px]'>
                <span className='hidden md:flex md:visible md:text-start text-center w-full md:text-[60px] text-[35px] px-6 md:mb-4'>The Bishop's School</span>
                <img src={bishop21} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop22} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop23} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop24} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
                <img src={bishop25} placeholder="blur" loading='lazy' className='w-auto h-[auto] object-cover md:mt-0 mt-6 mb-6'/>
              </div>

              <div className='hidden h-[0] md:h-[auto] md:visible md:flex md:flex-col md:flex-1 md:pl-4 md:pt-[15vh]'>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px] '>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2012</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>7607 La Jolla Boulevard, La Jolla, CA 92037</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Volunteering</span>
                </div>
                {/* <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>ABSTRACT</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Marble Paint is a machine that allows you to paint with marbles using 
                  canvas movement. The whole machine consists of a canvas connected to four crank motion mechanisms moving 
                  in succession.</span>
                </div> */}
              </div>
            </div>

            <div className='flex md:flex-row flex-col pt-10'>
              <div className='visible md:h-[0] h-[auto] md:hidden flex flex-col flex-1'>
              <span className='visible flex md:hidden md:text-start text-center pb-6 w-full md:text-[60px] text-[35px] px-6 md:mb-4'>The Bishop's School</span>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>YEAR</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>2016</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>LOCATION</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>7607 La Jolla Boulevard, La Jolla, CA 92037</span>
                </div>
                <div className='flex flex-row pb-6 gap-4'>
                  <span className='flex-1 text-end md:text-[14px] text-[12px]'>TYPE</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Volunteering</span>
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
      </div>
  )
}

export default transition(Performances,"");