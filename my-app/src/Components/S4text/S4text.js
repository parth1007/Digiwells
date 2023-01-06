import React from 'react'
import styles from './S4text.module.css'
import S2sliderobj from '../S2sliderobj/S2sliderobj'
import DoneIcon from '@mui/icons-material/Done';


const S4text = (props) => {

    const listtext = ["Create posts, reels and stories.", "Publish your Facebook posts.", "Schedule any Twitter posts."]

  return (
    <div className={styles['s4text']}>
        <h1>{props.heading}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam eaque voluptatem cupiditate, necessitatibus nam itaque.</p>
        <div className={styles['list']}>

                {listtext.map((text) => (
                        <div className={styles['sliderobj']}>
                            <div className={styles['tick']} style={{backgroundColor:props.color}}>
                                <DoneIcon fontSize = "smaller" style={{color:"white"}}/>
                            </div>
                            <div className={styles['topobj']}> {text} </div>
                        </div>
                    ))}

        </div>
    </div>
  )
}

export default S4text