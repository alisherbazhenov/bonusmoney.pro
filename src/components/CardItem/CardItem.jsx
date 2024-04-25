import { useDispatch } from 'react-redux'
import { deleteCard } from '../../features/card/cardSlice'
import { BtnMore } from '../BtnMore'
import { Modal } from '../Modal'
import styles from './CardItem.module.scss'
import { openModal, hideModal } from '../Modal/Modal'
import { EyeIcon } from '../../icons/EyeIcon'
import { TrashIcon } from '../../icons/TrashIcon'

export const CardItem = card => {
  const dispatch = useDispatch()
  const moreBtnOpen = '"Подробнее"'
  const trashBtnOpen = '"Удаление карты"'
  const trashBtnClose = 'Удалить'
  const eyeBtnOpen = '"Подробная информация!"'
  const btnClose = 'Закрыть'

  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: card.mobileAppDashboard.cardBackgroundColor,
        color: card.mobileAppDashboard.highlightTextColor,
      }}
    >
      <div className={styles.top} style={{ borderBottom: `1px solid ${card.mobileAppDashboard.backgroundColor}` }}>
        <div className={styles.text}>{card.mobileAppDashboard.companyName}</div>
        <img className={styles.img} src={card.mobileAppDashboard.logo} alt="Лого карты" />
      </div>
      <div className={styles.middle} style={{ borderBottom: `1px solid ${card.mobileAppDashboard.backgroundColor}` }}>
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
        <div className={styles.btnIcons}>
          <button
            className={`${styles.btnEyeTrash} ${styles.scaleUpVerCenter}`}
            onClick={() => openModal(`eyeBtn-${card.company.companyId}`)}
          >
            <EyeIcon color={card.mobileAppDashboard.textColor} />
          </button>
          <button
            className={`${styles.btnEyeTrash} ${styles.scaleUpVerCenter}`}
            onClick={() => openModal(`trashBtn-${card.company.companyId}`)}
          >
            <TrashIcon color={card.mobileAppDashboard.accentColor} />
          </button>
        </div>
        <BtnMore
          onClick={() => openModal(`moreButton-${card.company.companyId}`)}
          style={{
            color: card.mobileAppDashboard.mainColor,
            backgroundColor: card.mobileAppDashboard.backgroundColor,
          }}
        />
      </div>
      <Modal id={`moreButton-${card.company.companyId}`}>
        <div className={styles.modalContent}>
          <div>
            <span className={styles.modalContentSpan}>Нажата кнопка: </span>
            {moreBtnOpen}
          </div>
          <div>
            <span className={styles.modalContentSpan}>Название компании: </span>
            {`"${card.mobileAppDashboard.companyName}"`}
          </div>
          <button onClick={() => hideModal(`moreButton-${card.company.companyId}`)} className={styles.btnOk}>
            {btnClose}
          </button>
        </div>
      </Modal>

      <Modal id={`trashBtn-${card.company.companyId}`}>
        <div className={styles.modalContent}>
          <div>
            <span className={styles.modalContentSpan}>Нажата кнопка: </span>
            {trashBtnOpen}
          </div>
          <div>
            <span className={styles.modalContentSpan}>Название компании: </span>
            {`"${card.mobileAppDashboard.companyName}"`}
          </div>
          <div>
            <span className={styles.modalContentSpan}>id карты: </span>
            {card.company.companyId}
          </div>
          <button
            onClick={() => {
              dispatch(deleteCard(card.company.companyId))
              hideModal(`trashBtn-${card.company.companyId}`)
            }}
            className={styles.btnOk}
          >
            {trashBtnClose}
          </button>
        </div>
      </Modal>

      <Modal id={`eyeBtn-${card.company.companyId}`}>
        <div className={styles.modalContent}>
          <div>
            <span className={styles.modalContentSpan}>Нажата кнопка: </span>
            {eyeBtnOpen}
          </div>
          <div>
            <span className={styles.modalContentSpan}>id карты:</span> {`"${card.company.companyId}"`}
          </div>
          <button onClick={() => hideModal(`eyeBtn-${card.company.companyId}`)} className={styles.btnOk}>
            {btnClose}
          </button>
        </div>
      </Modal>
    </li>
  )
}
