import styles from '../style';
import { transition } from "../hoc";
import { Hero, Work } from '../components';
import suyang from "../assets/Suyang-Enlightenment.mp4";
import "./gallery.css";

const Home = () => {
  return (
    <div className='w-full overflow-hidden'>
      <div className={`${styles.flexStart}`}>
      <div className='bg-cover fixed top-0 right-0 bg-hanji-white opacity-[1] w-full h-[100vh] z-0'/>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} z-10 flex justify-center items-center`}>
          <video className='suyang' autoplay="autoplay" loop muted>
              <source src={suyang} type='video/mp4'/>
          </video>
        </div>
      </div>
    </div>
  )
}

export default transition(Home,"");