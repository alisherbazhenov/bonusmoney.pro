// import { useState } from 'react'
import { BtnMore } from '../BtnMore'
import { Modal } from '../Modal'
import { CardButtons } from '../CardButtons'
import styles from './Card.module.scss'
import cardLogo from '/img/logo.png'
import { hideModal, openModal } from '../Modal/Modal'

export const Card = () => {
  // const [isModalOpen, setModalOpen] = useState(false)
  const moreBtnOpen = 'Профиль успешно обновлен'
  const moreBtnClose = 'Хорошо'
  const trashBtnOpen = 'Удаление карты!'
  const trashBtnClose = 'Удалить'
  const eyeBtnOpen = 'Подробная информация!'
  const eyeBtnClose = 'Закрыть'

  return (
    <div>
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
          <div className={styles.bottom}>
            <CardButtons />
            <BtnMore onClick={() => openModal('moreButton')} />
          </div>
        </li>
      </ul>

      <Modal id="moreButton">
        {moreBtnOpen}
        <button onClick={() => hideModal('moreButton')} className={styles.btnOk}>
          {moreBtnClose}
        </button>
      </Modal>

      <Modal id="trashBtn">
        {trashBtnOpen}
        <button onClick={() => hideModal('trashBtn')} className={styles.btnOk}>
          {trashBtnClose}
        </button>
      </Modal>

      <Modal id="eyeBtn">
        {eyeBtnOpen}
        <button onClick={() => hideModal('eyeBtn')} className={styles.btnOk}>
          {eyeBtnClose}
        </button>
      </Modal>
    </div>
  )
}
