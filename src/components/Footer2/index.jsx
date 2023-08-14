import { Link } from "react-router-dom"
import { BiCopyright } from "react-icons/bi";
import styles from "./styles.module.scss"
import Container from "../Container"

function Footer2() {
  return(
    <footer>
      <nav className={styles.footer2} >
        <Container>
          <div>
            <p><BiCopyright/>Soccer Kids SA todos os direitos reservados</p>
            <p>Desenvolvido por TTS</p>
          </div>
          {/* <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/history" >História</Link>
            </li>

            <li>
              <Link to="/plans" >Planos</Link>
            </li>
            <li>
              <Link to="/contact" >Contato</Link>
            </li>
          </ul> */}
        </Container>
      </nav>
    </footer>
  )
}

export default Footer2