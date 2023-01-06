import React from 'react'
import styles from './S2sliderobj.module.css'
import DoneIcon from '@mui/icons-material/Done';

const S2sliderobj = (props) => {
  return (
    <div className={styles['sliderobj']}>
        <div className={styles['tick']} style={{backgroundColor:props.color}}>
            <DoneIcon fontSize = "small" style={{color:"white"}}/>
        </div>
        <div className={styles['topobj']}> {props.text} </div>
    </div>
  )
}

export default S2sliderobj