/* eslint-disable */
import styles from './Modal.module.scss'
import cansel from '/img/cansel.svg'

export const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button className={styles.btnOk} onClick={onClose}>
          Хорошо
        </button>
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        <img className={styles.cansel} src={cansel} alt="Закрыть модальное окно" />
      </button>
    </div>
  )
}
