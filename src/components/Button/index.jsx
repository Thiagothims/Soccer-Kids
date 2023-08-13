import { Link } from 'react-router-dom'
import styles from './styles.module.scss'


function Button({ text, onClick, type, classButton, to}) {
  return(
    <Link to={to}>
      <button
        className={styles[classButton]}
        type={type}
        onClick={onClick}
      >
        { text }
      </button>
    </Link>
  )
}

export default Button