import React from 'react'
import styles from './Section7.module.css'
import leftcurve from '../../Assets/Section7/leftcurves.svg'
import rightcurve from '../../Assets/Section7/rightcurves.svg'
import leftcard from '../../Assets/Section7/card7left.png'
import rightcard from '../../Assets/Section7/card7right.png'
import Button from '@mui/material/Button';

const Section7 = () => {

  return (
    <div className={styles['section']}>
        <div className={styles['box']}>
            <img src={leftcurve} alt="leftcurve" className={styles['leftcurve']}/>
            <img src={rightcurve} alt="rightcurve" className={styles['rightcurve']}/>
            <img src={leftcard} alt="leftcard" className={styles['leftcard']}/>
            <img src={rightcard} alt="rightcard" className={styles['rightcard']}/>
            <div className={styles['innerbox']}>
                <div className={styles['title']}>Focus on the analytics that matter.</div>
                <div className={styles['desc']}>Grow faster with a website that helps you convert more customers.</div>
                <div className={styles['buttons']}> 
                    <Button variant="contained" style={{backgroundColor:"#9D0AFF", color:"white"}}>Get Started</Button>
                    <Button variant="outlined" style={{border:"1px solid white", color:"white"}}>Compare Plans</Button>
                </div>  
            </div> 
        </div>
    </div>
  )
}

export default Section7