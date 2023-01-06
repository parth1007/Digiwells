import React from 'react'
import styles from './S2slider.module.css'
import S2sliderobj from '../S2sliderobj/S2sliderobj'
import Marquee from 'react-fast-marquee'

const S2slider = () => {

   const toplayertxt = ["Public and private chat", "Event Scheduler", "Appoitment scheduling", "Group video calls", "Activity stream"]
    const bottonlayertext = ["Event Scheduler", "Expert on demad call", "Email support for 24/7", "Group video calls", "Activity stream"]
  return (
    <div className={styles['slider']}>
        <div className={styles['layer1']}>
                <Marquee pauseOnHover speed={70} gradientWidth={30}>
                    {toplayertxt.map((text) => (
                        <S2sliderobj color="#9D0AFF" text={text}/>
                    ))}
                </Marquee>
        </div>
        <div className={styles['layer2']}>
                <Marquee pauseOnHover speed={80} gradientWidth={30}>
                    {bottonlayertext.map((text) => (
                        <S2sliderobj color="#00F59B" text={text}/>
                    ))}
                </Marquee>
        </div>
    </div>
  )
}

export default S2slider