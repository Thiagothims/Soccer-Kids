import styles from './styles.module.scss'
import sponsor1 from '../../assets/images/sponsors/patrocinador1.jpeg'
import sponsor2 from '../../assets/images/sponsors/patrocinador2.jpeg'
import sponsor3 from '../../assets/images/sponsors/patrocinador3.jpeg'

const sponsors = [sponsor1, sponsor2, sponsor3]

function Footer() {

  return(
    <footer  className={styles.footer}>
        {sponsors.map(sponsor => (
          <div key={`id-${sponsor}`} >
            <img src={sponsor} alt={`Patrocinador ${sponsor}`} />
          </div>
        ))}
    </footer>
  )
}

export default Footer