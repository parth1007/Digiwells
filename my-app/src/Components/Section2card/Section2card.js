import React from 'react'
import styles from './Section2card.module.css'
import left from '../../Assets/S2card/left.png'
import right from '../../Assets/S2card/right.png'


const Section2card = () => {
  return (
    <div className={styles['card']}>

            <img src={left} className={styles['left']}/>
            <img src={right} className={styles['right']}/>
            <div className={styles['title']}>A nice and simple financial overview</div>
            <div className={styles['desc']}>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</div>
            <div className={styles['statsbox']}> 
                <div className={styles['stats']}>
                    <div className={styles['stat-v']}>120+</div>
                    <div className={styles['stat-t']}>Useful Widgets</div>
                </div>

                <div className={styles['vline']}></div>
                
                <div className={styles['stats']}>
                    <div className={styles['stat-v']}>20+</div>
                    <div className={styles['stat-t']}>Integrations</div>
                </div>

                <div className={styles['vline']}></div>
                
                <div className={styles['stats']}>
                    <div className={styles['stat-v']}>65+</div>
                    <div className={styles['stat-t']}>Features out</div>
                </div>
            </div>    
    </div>
  )
}

export default Section2card