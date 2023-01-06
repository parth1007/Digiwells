import React from 'react'
import styles from './TeamSlider.module.css'
import team1 from '../../Assets/Teams/team1.png'
import team2 from '../../Assets/Teams/team2.png'
import team3 from '../../Assets/Teams/team3.png'
import team4 from '../../Assets/Teams/team4.png'
import Marquee from 'react-fast-marquee'


const TeamSlider = () => {
  return (
    <div className={styles['teamslider']}>
        <div className={styles['div1txt']}>Trusted and loved by the world’s best teams</div>
            <div className={styles['teambar']}>

                <Marquee pauseOnHover speed={20} gradient={true} gradientColor={[200,200,200]} gradientWidth={60}>
                    <img src={team1} className={styles['teamimg']}/>
                    <img src={team2} className={styles['teamimg']}/>
                    <img src={team3} className={styles['teamimg']}/>
                    <img src={team4} className={styles['teamimg']}/>
                </Marquee>
            </div>
    </div>
  )
}

export default TeamSlider