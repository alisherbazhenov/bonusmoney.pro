import { useDispatch } from 'react-redux'
import { deleteCard } from '../../features/card/cardSlice'
import { BtnMore } from '../BtnMore'
import { Modal } from '../Modal'
import styles from './CardItem.module.scss'
import { hideModal, openModal } from '../Modal/Modal'
import { EyeIcon } from '../../icons/EyeIcon'
import { TrashIcon } from '../../icons/TrashIcon'

export const CardItem = card => {
  const dispatch = useDispatch()
  const moreBtnOpen = 'Нажата кнопка "Подробнее"'
  const trashBtnOpen = 'Нажата кнопка "Удаление карты" '
  const trashBtnClose = 'Удалить'
  const eyeBtnOpen = 'Нажата кнопка "Подробная информация!" '
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
        <button onClick={() => openModal(`eyeBtn-${card.company.companyId}`)}>
          <EyeIcon color={card.mobileAppDashboard.textColor} />
        </button>
        <button onClick={() => openModal(`trashBtn-${card.company.companyId}`)}>
          <TrashIcon color={card.mobileAppDashboard.accentColor} />
        </button>
        <BtnMore
          onClick={() => openModal(`moreButton-${card.company.companyId}`)}
          style={{
            color: card.mobileAppDashboard.mainColor,
            backgroundColor: card.mobileAppDashboard.backgroundColor,
          }}
        />
      </div>
      <Modal id={`moreButton-${card.company.companyId}`}>
        {moreBtnOpen}
        <div>{card.mobileAppDashboard.companyName}</div>
        <div>{card.mobileAppDashboard.companyName}</div>
        <button onClick={() => hideModal(`moreButton-${card.company.companyId}`)} className={styles.btnOk}>
          {btnClose}
        </button>
      </Modal>

      <Modal id={`trashBtn-${card.company.companyId}`}>
        {trashBtnOpen}
        <div>{card.company.companyId}</div>
        <div>{card.mobileAppDashboard.companyName}</div>
        <button
          onClick={() => {
            dispatch(deleteCard(card.company.companyId))
            hideModal(`trashBtn-${card.company.companyId}`)
          }}
          className={styles.btnOk}
        >
          {trashBtnClose}
        </button>
      </Modal>

      <Modal id={`eyeBtn-${card.company.companyId}`}>
        {eyeBtnOpen}
        <div>{card.company.companyId}</div>
        <button onClick={() => hideModal(`eyeBtn-${card.company.companyId}`)} className={styles.btnOk}>
          {btnClose}
        </button>
      </Modal>
    </li>
  )
}
