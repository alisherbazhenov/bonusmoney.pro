import styles from './Logo.module.scss'
import logo from '/img/logo.png'

export const Logo = () => {
  return (
    <div className={styles.logoBlock}>
      <img className={styles.logo} src={logo} alt="Лого" />
    </div>
  )
}
