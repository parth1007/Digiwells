import React from 'react'
import styles from './section2.module.css'

import Section2card from '../../Components/Section2card/Section2card'
import S2slider from '../../Components/S2slider/S2slider'
import TeamSlider from '../../Components/TeamSlider/TeamSlider'

const Section2 = () => {
  return (
    <div className={styles['section2']}>
        <div className={styles['div1']}>
            <TeamSlider />
        </div>
        <div className={styles['div2']}>
            <Section2card />
        </div>
        <div className={styles['div3']}>
          <S2slider />
        </div>


    </div>
  )
}

export default Section2