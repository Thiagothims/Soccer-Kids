import styles from './styles.module.scss'
import Slider from '../../components/Slider'
import Button from '../../components/Button'
import Article from '../../components/Article'
import Footer from '../../components/Footer'

function Home() {
  return(
    <section className={styles.home_container}>
      <Slider />
      <Button classButton={'mainButton'} link='/signup' type='text' text='Inscreva-se já' />
      <Article />
      <Footer />
    </section>
  )
}

export default Home