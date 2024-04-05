/* eslint-disable */

import styles from './BtnMore.module.scss'

export const BtnMore = ({ onClick, style }) => {
  return (
    <button onClick={onClick} className={styles.btn} style={style}>
      Подробнее
    </button>
  )
}
