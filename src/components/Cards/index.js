import styles from "./Cards.module.css";

function Cards(){
    return(
    
  <article className={styles.cards}>
  <h2>
Inteligência  Artificial
  </h2>
  <div className={styles.principal} >
    <div className={styles.cards1} >
    <img src="/imgs/card1.jpg" alt="card" />
    <h1>Tecnologia</h1>

    </div>
    <div className={styles.cards1} >
    <img src="/imgs/card2.jpg" alt="card" />
    <h1>Inovação</h1>

    </div>
    <div className={styles.cards1} >
    <img src="/imgs/card3.jpeg" alt="card" />
    <h1>Futuro</h1>

    </div>
    <div className={styles.cards1} >
    <img src="/imgs/card4.webp" alt="card" />
    <h1>Evolução</h1>
</div>
</div>
    </article>

    );
}

export default Cards;