import styles from './InfoErrorsDesc.module.scss'

export const InfoErrorsDesc = () => {
  return (
    <div>
      <ul className={styles.list}>
        <li>При получении кода ответа 401 текст &laquo;Ошибка авторизации&raquo;.</li>
        <li>При получении кода ответа 400 выводится текст сообщения из ответа сервера.</li>
        <li>При получении кода ответа 500 выводится текст &laquo;Все упало&raquo;.</li>
        <li>При других ошибках просто выводится текст ошибки</li>
      </ul>
    </div>
  )
}
