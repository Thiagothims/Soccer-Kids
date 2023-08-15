import styles from './styles.module.scss'

function Article() {
  return(
    <article className={styles.article}>
      <div>
        {/* <img src='../../../public/images/timeSK.png' alt='time Soccer Kids' /> */}
        {/* <img src='../../assets/images/timeSK.png' alt='time Soccer Kids' /> */}
        {/* <video src='../../assets/movies/futkids.mp4' width={680} autoPlay muted loop ></video> */}
        <video src='../../../public/movies/futkids.mp4' width={680} autoPlay muted loop ></video>
      </div>
      <div className={styles.text}>
        <h2>Venha se <span>divertir</span><br/> e <span>aprender!</span></h2>
        {/* <p>Crinças de 5 à 14 anos vão se divertir e se desenvolver jogando futebol, com instrutor qualidficado e ambiente pronto para recebe-lás</p>
        <p>Clique no botão de Increva-se e faça uma aula experimental</p> */}

        {/* <p>Soccer Kids Academy é a escola de futebol perfeita para <span>crianças de 5 a 14 anos</span>. Temos um ambiente seguro e divertido, instrutores qualificados e materiais de alta qualidade. Oferecemos aulas para todos os níveis, desde iniciantes até avançados, e também temos eventos especiais para ajudar no desenvolvimento esportivo.</p>
        <p>Se você está procurando uma escola de futebol que vai ajudar seu filho a se divertir, aprender e se desenvolver, então aqui é o lugar certo para ele. <span>Inscreva-se</span>  hoje mesmo e faça uma <span>aula experimental!</span></p> */}

        <p>A escola de futebol perfeita para crianças de 5 a 14 anos</p>
        <div className={styles.list}>
        <ul>
          <li>Ambiente seguro e divertido</li>
          <li>Instrutores qualificados</li>
          <li>Materiais de alta qualidade</li>
          <li>Aulas para todos os níveis</li>
          <li>Eventos especiais</li>   
          <li>Desenvolvimento pessoal e esportivo</li>     
        </ul>
        </div>
        <p><span>Inscreva-se hoje mesmo</span> e faça uma aula experimental!</p>
      </div>
    </article>
  )
}

export default Article
