import styles from './TypesOfRequests.module.scss'

export const TypesOfRequests = () => {
  return (
    <div>
      <div className={styles.desc}>Для тестировки имеется 3 запросa:</div>
      <ul className={styles.list}>
        <li>Ideal – не выдает ошибок при подгрузке;</li>
        <li>Long – с задержкой ответа для тестирования прелоудера;</li>
        <li>Error – выдает ошибки.</li>
      </ul>
      <div className={styles.desc}>
        <i>Эти переменные можно найти в файле fetchUrls.js. По дефолту стоит Ideal</i>
      </div>
    </div>
  )
}
