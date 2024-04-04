import styles from './CardButtons.module.scss'
import { items } from './consts'

export const CardButtons = () => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <div>
            <img className={styles.icons} src={item.icon} alt="кнопка" />
          </div>
        </li>
      ))}
    </ul>
  )
}
