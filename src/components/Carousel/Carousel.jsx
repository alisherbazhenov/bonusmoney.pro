import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import styles from './Carousel.module.scss'
import { sliderData } from '../../sliderData/sliderData'
import { TypesOfRequests } from '../TypesOfRequests/TypesOfRequests'
import { InfoErrorsDesc } from '../InfoErrorsDesc/InfoErrorsDesc'

export const Carousel = () => {
  const [centerPadding, setCenterPadding] = useState('10px')

  useEffect(() => {
    const updateCenterPadding = () => {
      setCenterPadding(window.innerWidth < 480 ? '0px' : '10px')
    }

    updateCenterPadding()
    window.addEventListener('resize', updateCenterPadding)

    return () => window.removeEventListener('resize', updateCenterPadding)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    centerPadding: centerPadding,
  }

  const renderDesc = desc => {
    if (desc === 'typesOfRequests') {
      return <TypesOfRequests />
    } else if (desc === 'infoErrorsDesc') {
      return <InfoErrorsDesc />
    } else {
      return desc
    }
  }

  return (
    <div>
      <div className={styles.appText}>
        <p className={styles.appDesc}>Учет бонусов компаний</p>
        <span>
          <i className={styles.iSpan}>mobile version</i>
        </span>
      </div>
      <Slider {...settings}>
        {sliderData.map(item => {
          return (
            <div className={styles.sliderPage} key={item.id}>
              <div className={styles.block}>
                <div className={styles.infoDesc}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.desc}>{renderDesc(item.desc)}</div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
