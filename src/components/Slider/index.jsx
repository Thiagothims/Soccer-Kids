import React from "react"
import {
  useRef,
  useState,
  useEffect
} from "react"
import { motion } from "framer-motion"
import styles from "./styles.module.scss"
import img0 from "../../assets/images/sliderImg/img0.jpeg"
import img3 from "../../assets/images/sliderImg/img3.jpeg"
import img5 from "../../assets/images/sliderImg/img5.jpeg"
import img7 from "../../assets/images/sliderImg/img7.jpeg"
import img9 from "../../assets/images/sliderImg/img9.jpeg"
import img10 from "../../assets/images/sliderImg/img10.jpeg"

const images = [
  img0, img10, img5, img7, img9, img3
]

function Slider() {
  const carousel = useRef()
  const [width, setWidth] = useState()

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [carousel])

  return(
    <div className={styles.slider}>
      <motion.div ref={carousel} className={styles.carousel} whileTap={{ cursor: "grabbing"}}>
        <motion.div className={styles.inner}
          drag='x'
          dragConstraints={{right: 0, left: -width}}
          // initial={{ x: 0 }}
          // animate={{ x: 100 }}
          // transition={{ duration: 1 }}
        >
          {images.map(image => (
            <motion.div className={styles.images} key={image}>
              <img src={image} alt='Fotografia da rotina Soccer Kids'/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Slider