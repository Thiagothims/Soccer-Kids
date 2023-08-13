import { Link } from "react-router-dom"
import { BiLogoInstagram, BiLogoWhatsapp } from "react-icons/bi";
import styles from "./styles.module.scss"
import Container from "../Container"
import Logo from "../../assets/images/LogoSK.svg"

function MenuBar({ style }) {
  return(
    <header>
      <nav className={styles[style]} >
        <Container>
          <Link to="/" >
            <img src={Logo} alt="Logo Soccer Kids" />
          </Link>
            
          <ul>
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
          </ul>
          <div className={styles.social}>
            <a href="https://www.instagram.com/soccerkidsa/" target="_blank" >
              <BiLogoInstagram/>
            </a>
            <a href="https://api.whatsapp.com/message/WNBT7XTWH3K4J1?autoload=1&app_absent=0" target="_blank" >
            <BiLogoWhatsapp/>
            </a>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default MenuBar