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
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Korean National Artist, 2006, 2007, 2009.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Seoul GANG-NAM Ministry of Culture,  2008. </span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>National Christian Art Competition, 2013.</span>
                </div>              
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>PEN NAME</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Saegil</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Soji</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Sorim</span>
                </div>
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>EDUCATION</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px]`}>Sungshin Women's University</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Department of Oriental Painting</span>
                </div>              
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>AWARDS</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Korea SEO-DO Association, Chinese Writing Junior/HIGH 1st Place, 1988.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Korea SEO-DO Association, Chinese Writing Junior/HIGH Gold Medal (Korean Writing Special Prize), 1989.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>JUNG-BU Calligraphy Competition, Korean Writing Special Prize, 2005.</span>      
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Asia Calligraphy/Painting in the Literary Artist's Style Competition, Korean Writing Gold Medal, 2006.</span>      
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>National Calligraphy Competition, Korean Writing Accepted 3 times, 2006, 2007, 2009.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>GANG-NAM Calligraphy Competition, Korean Writing 2nd Place & Special Prize, 2005~2007.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>GANG-NAM Calligraphy Competition, Korean Writing Guest Artist, 2008.</span>               
                </div>              
              </div>
              <div className='flex flex-row pb-6 gap-4'>
                <span className='text-end md:text-[14px] text-[12px]'>FIELD EXPERIENCE</span>
                <div className='flex flex-col'>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>San Diego Bishop School Special Lecture & Performance, 2011, 2012.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>UCSD Special Lecture, 2012.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>SDSU Special Performance, 2012.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Korean Silver College Calligraphy & Oriental Painting Lecture, 2011~2017.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>San Diego Adult, Junior/High Calligraphy & Oriental Painting & Korean Folk Art Lesson, 2011~2017.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>AMASE (special education) Art Director, 2012~2013.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Barnard Chinese Elementary School Calligraphy & Oriental Painting Art Class Teacher, 2013.</span>             
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Saegil Member's First Exhibition, 2014.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Saegil Member's Second Exhibition, 2015.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Annual Linda Vista Multi-Cultural Fair & Parade, 2015~2019.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Saegil Member's Third Exhibition, 2016.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Saegil Individual Exhibition TOM N TOM'S Support, 2016.</span>
                  <span className={`flex-[2.5] font-thin md:text-[16px] text-[16px] pb-2`}>Hand In Hand (special education) Art Teacher, 2017~2019.</span>
                </div>              
              </div>
            </div>
          </div>
        </div>
  )
}

export default transition(About, "");