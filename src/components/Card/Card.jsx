import { useState, useEffect } from 'react'
import { fetchIdealCardsData } from '../../api/cardsData'
import { BtnMore } from '../BtnMore'
import { Modal } from '../Modal'
import { CardButtons } from '../CardButtons'
import styles from './Card.module.scss'
import { hideModal, openModal } from '../Modal/Modal'

export const Card = () => {
  const [cardsData, setCardsData] = useState([])
  const [error, setError] = useState(null)

  const moreBtnOpen = 'Профиль успешно обновлен'
  const moreBtnClose = 'Хорошо'
  const trashBtnOpen = 'Удаление карты!'
  const trashBtnClose = 'Удалить'
  const eyeBtnOpen = 'Подробная информация!'
  const eyeBtnClose = 'Закрыть'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIdealCardsData()
        setCardsData(data)
      } catch (error) {
        setError(error)
        console.log('ошибка', error)
      }
    }

    fetchData()
  }, [])

  console.log('описание ошибки', error)

  // if (error) {
  //   return (
  //     <Modal id="error">
  //       {error}
  //       <button onClick={() => hideModal('error')} className={styles.btnOk}>
  //         Закрыть
  //       </button>
  //     </Modal>
  //   )
  // }

  return (
    <div>
      <ul className={styles.list}>
        {cardsData.map((card, index) => (
          <li
            key={index}
            className={styles.item}
            style={{
              backgroundColor: card.mobileAppDashboard.cardBackgroundColor,
              color: card.mobileAppDashboard.highlightTextColor,
            }}
          >
            <div className={styles.top}>
              <div className={styles.text}>{card.mobileAppDashboard.companyName}</div>
              <img className={styles.img} src={card.mobileAppDashboard.logo} alt="Лого карты" />
            </div>
            <div className={styles.middle}>
              <div className={styles.points}>
                <p className={styles.pointsPrice}>{card.customerMarkParameters.mark}</p>
                <span className={styles.pointsDesc} style={{ color: card.mobileAppDashboard.textColor }}>
                  баллов
                </span>
              </div>
              <div className={styles.cashbackBox}>
                <div className={styles.cashbackLeft}>
                  <span className={styles.cashbackText} style={{ color: card.mobileAppDashboard.textColor }}>
                    Кэшбек
                  </span>
                  <p className={styles.cashbackLevel}>{card.customerMarkParameters.loyaltyLevel.markToCash}%</p>
                </div>
                <div className={styles.cashbackRight}>
                  <span className={styles.cashbackText} style={{ color: card.mobileAppDashboard.textColor }}>
                    Уровень
                  </span>
                  <p className={styles.cashbackLevel}>{card.customerMarkParameters.loyaltyLevel.name}</p>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <CardButtons style={{ fill: card.mobileAppDashboard.accentColor }} />
              <BtnMore
                onClick={() => openModal('moreButton')}
                style={{
                  color: card.mobileAppDashboard.mainColor,
                  backgroundColor: card.mobileAppDashboard.backgroundColor,
                }}
              />
            </div>
          </li>
        ))}
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
