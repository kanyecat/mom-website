import styles from '../style';
import { transition } from "../hoc";
import { Link } from "react-router-dom";
import "./gallery.css";
import '../index.css';

const About = () => {
  return (
    <>
    <div id='about' className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='bg-cover fixed top-0 right-0 bg-hanji-letter w-full h-[100vh] z-0'/>
        </div>
      </div>
    </div>
    </>
  )
}

export default transition(About, "");