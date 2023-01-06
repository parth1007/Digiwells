import React from 'react'
import styles from './Section5.module.css'
import S5card from '../../Components/S5card/S5card'
import Marquee from 'react-fast-marquee'


const Section5 = () => {

    const cards=[1,1,1,1,1]

  return (
    <div className={styles['section5']}>
        <div className={styles['headings']}>
            <h1>Don’t take our words for it - listen to our clients</h1>
            <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
        </div>
        <div className={styles['cardslide']}>
            <div className={styles['slider1']}>
                <Marquee pauseOnHover speed={80} gradient={false}>
                    {cards.map((text) => (
                        <S5card />
                    ))}
                </Marquee>
            </div>
            <div className={styles['slider2']}>
                <Marquee pauseOnHover speed={80} gradient={false}>
                    {cards.map((text) => (
                        <S5card />
                    ))}
                </Marquee>
            </div>
        </div>

    </div>
  )
}

export default Section5