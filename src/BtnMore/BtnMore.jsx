/* eslint-disable */

import styles from './BtnMore.module.scss'

export const BtnMore = ({ onClick }) => {
  return (
    <button onClick={onClick} className={styles.btn}>
      Подробнее
    </button>
  )
}
