/* eslint-disable */
import styles from './CardButtons.module.scss'
import { items } from './consts'
import { openModal } from '../Modal/Modal'

export const CardButtons = ({ style }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <div onClick={() => openModal(item.id)}>
            <img className={styles.icons} src={item.icon} alt="кнопка" style={style} />
          </div>
        </li>
      ))}
    </ul>
  )
}
