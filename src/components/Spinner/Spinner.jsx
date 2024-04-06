import styles from './Spinner.module.scss'

export const Spinner = () => {
  return (
    <div className={styles.pagePreloader}>
      <span className={styles.spinner}></span>
    </div>
  )
}
