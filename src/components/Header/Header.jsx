import styles from './Header.module.scss'
import { InfoBtn } from '../InfoBtn/InfoBtn'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text}>Управление картами</div>
      <InfoBtn />
    </header>
  )
}
