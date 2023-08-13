import styles from './styles.module.scss'
import Slider from '../../components/Slider'
import Button from '../../components/Button'
import Article from '../../components/Article'

function Home() {
  return(
    <section className={styles.home_container}>
      <Slider />
      <Button classButton={'mainButton'} link='/signup' type='text' text='Inscreva-se já' />
      <Article

      />
    </section>
  )
}

export default Home