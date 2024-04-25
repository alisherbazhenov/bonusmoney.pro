import styles from './InfoBtn.module.scss'
import InfoIcon from '/img/info.svg'
import { Modal } from '../Modal'
import { openModal } from '../Modal/Modal'
import { Carousel } from '../Carousel/Carousel'

export const InfoBtn = () => {
  return (
    <>
      <button className={`${styles.btn} ${styles.jelloVertical}`} onClick={() => openModal('infoBtn')}>
        <img className={styles.svg} src={InfoIcon} alt="Info Icon" />
      </button>
      <Modal id="infoBtn">
        <Carousel />
      </Modal>
    </>
  )
}
