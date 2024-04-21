import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../features/card/cardSlice'
import { useEffect } from 'react'
import styles from './Main.module.scss'
import { Spinner } from '../../components/Spinner/Spinner'
import { CardItem } from '../../components/CardItem/CardItem'

export const Main = () => {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.cards)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const contentHeight = document.querySelector('.wrapper').clientHeight
      if (window.scrollY >= contentHeight - windowHeight && !loading) {
        dispatch(fetchData({ offset: data.length }))
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [data, loading, dispatch])

  useEffect(() => {
    dispatch(fetchData({ offset: 0 }))
  }, [dispatch])

  if (error) {
    return <div>{error}</div>
  }

  if (!data.length && !loading) {
    return <div>Нет компаний</div>
  }

  return (
    <div>
      <ul className={styles.list}>
        {data.map(card => (
          <CardItem key={card.company.companyId} {...card} />
        ))}
      </ul>
      {loading && <Spinner />}
    </div>
  )
}
