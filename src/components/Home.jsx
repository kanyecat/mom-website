import styles from '../style';
import { transition } from "../hoc";
import { Hero, Work } from '../components';

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
        <div className={`${styles.boxWidth} z-10`}>
          {/* <Work /> */}
        </div>
      </div>
    </div>
  )
}

export default transition(Home,"");