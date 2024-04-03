import styles from './Card.module.scss'
import cardLogo from '/img/logo.png'

export const Card = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <div className={styles.top}>
          <div className={styles.text}>Bonus Money</div>
          <img className={styles.img} src={cardLogo} alt="Лого карты" />
        </div>
        <div className={styles.middle}>
          <div className={styles.points}>
            <p className={styles.pointsPrice}>200</p>
            <span className={styles.pointsDesc}>баллов</span>
          </div>
          <div className={styles.cashbackBox}>
            <div className={styles.cashbackLeft}>
              <span className={styles.cashbackText}>Кэшбек</span>
              <p className={styles.cashbackLevel}>47%</p>
            </div>
            <div className={styles.cashbackRight}>
              <span className={styles.cashbackText}>Уровень</span>
              <p className={styles.cashbackLevel}>Первый</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}></div>
      </li>
    </ul>
  )
}
