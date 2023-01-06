import React from 'react'
import styles from './Section1.module.css'
import landing from '../../Assets/Logos/landing.png'
import S1box from "../../Components/S1box/S1box"


const Section1 = () => {
  return (
    <div className={styles['landing']}>

        <div className={styles['div1']}>
            <div>Save more and get your finances right</div>
            <div>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</div>
            <div className={styles['getstart']}> Get Started </div>
        </div>
        
        <div className={styles['div2']}>
            <S1box/>  
        </div>
    </div>

    
  )
}

export default Section1