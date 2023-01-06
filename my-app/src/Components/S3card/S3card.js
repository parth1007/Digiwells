import React from 'react'
import styles from './S3card.module.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const S3card = (props) => {
  return (
    <div className={styles['card']}>
        <div className={styles["icon"]}>
            <EmailOutlinedIcon style={{color:"white"}}/>
        </div>
        <div className={styles["title"]}>{props.heading}</div>
        <div className={styles["text"]}>
            Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper. Vitae massa euismod enim dictum facilisi aliquam, elit, pretium.
        </div>
    </div>
  )
}

export default S3card