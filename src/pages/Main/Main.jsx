import styles from './Main.module.scss'
import { Card } from '../../components/Card'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Card />
    </main>
  )
}
