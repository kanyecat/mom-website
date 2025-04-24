import styles from '../style';
import { transition } from "../hoc";
import { Link } from "react-router-dom";
import "./gallery.css";
import '../index.css';

const About = () => {
  return (
    <div id='exhibitions' className={`${styles.paddingY} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} flex md:flex-nowrap flex-wrap justify-start z-10 text-primary font-diphylleia`}>
          <div className='flex flex-col'>
            <span className='flex text-end md:text-[34px] text-[32px] pb-5'>Young Mi Park</span>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>TITLE</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-3`}>Korean National Artist</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2013 National Christian Art Competition, Seoul, South Korea.
                    <em> Art Juror Qualification.</em>
                  </span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2008 Seoul GANG-NAM Ministry of Culture, Seoul, South Korea.
                  <em> Art Juror Qualification.</em>
                  </span>
                </div>              
              </div>
              {/* <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>PEN NAME</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Saegil</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Soji</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Sorim</span>
                </div>
              </div> */}
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>EDUCATION</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>1993 Sungshin Women’s University, Seoul, South Korea.
                    <em> Bachelor of Fine Arts, Department of Oriental Painting.</em>
                  </span>
                </div>              
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>AWARDS</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2024 Korea In Color: A Legacy of Auspicious Images, The San Diego Museum of Art,
                  San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2017 Saegil Group Exhibition, San Diego Rancho Penasquitos Library, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2016 Saegil Solo Exhibition, TOM N TOM'S, San Diego, CA.</span>      
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2016 Saegil Group Exhibition, San Diego Korean Library, San Diego, CA.</span>      
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2015 Saegil Group Exhibition, San Diego Korean Library, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2014 Saegil Group Exhibition, San Diego Korean Library, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2009 BO-REUM, Dongan Cultural Center, Gyeonggi-do, South Korea.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2007 BO-REUM, Dongan Cultural Center, Gyeonggi-do, South Korea.</span>    
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2005 BO-REUM, Anyang Arts Center, Gyeonggi-do, South Korea..</span>                   
                </div>              
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>VISITING ARTIST LECTURES/PERFORMANCES</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2013 Guest Artist, Barnard Mandarin Magnet Elementary School, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2012 Special Performance, SDSU, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2012 Special Lecture, UCSD, La Jolla, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2012 Special Lecture & Performance, The Bishop’s School, La Jolla, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2011 Special Lecture & Performance, The Bishop’s School, La Jolla, CA.</span>
                </div>              
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>VOLUNTEER SERVICE</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2017–2019 Art Director, Hand In Hand (special education), San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2015–2019 Artist, Annual Linda Vista Multi-Cultural Fair & Parade, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2012–2013 Art Director, AMASE (special education), San Diego, CA.</span>             
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2012–2013 Art Instructor, Silver College at Korean Calvary Church, San Diego, CA.</span>
                </div>              
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>TEACHING EXPERIENCE</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2023–Present Instructor, Culture Center at Korean Calvary Church, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2011–Present Instructor, Private Group Lesson, San Diego, CA.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>2011–2017 Instructor, The San Diego Korean American Senior Center, San Diego, CA.</span>
                </div>              
              </div>
            </div>
          </div>
        </div>
  )
}

export default transition(About, "");