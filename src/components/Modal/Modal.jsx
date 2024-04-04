/* eslint-disable */
import styles from './Modal.module.scss'
import cansel from '/img/cansel.svg'

export const openModal = id => {
  const modal = document.getElementById(id)

  modal.style.display = 'flex'
}

export const hideModal = id => {
  const modal = document.getElementById(id)

  modal.style.display = 'none'
}

export const Modal = ({ children, id }) => {
  return (
    <div id={id} className={styles.overlay}>
      <div className={styles.modal}>{children}</div>
      <button className={styles.closeButton} onClick={() => hideModal(id)}>
        <img className={styles.cansel} src={cansel} alt="Закрыть модальное окно" />
      </button>
    </div>
  )
}
