import styles from './Spinner.module.scss'

export const Spinner = () => {
  return (
    <div className={styles.spinnerBlock}>
      <div className={styles.pagePreloader}>
        <span className={styles.spinner}></span>
      </div>
      <p className={styles.spinnerText}>Подгрузка компаний</p>
    </div>
  )
}
