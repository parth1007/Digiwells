import React from 'react'
import styles from './Section6.module.css'
import Button from '@mui/material/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Card = (props) => {
    return (
      <div className={styles['card']}>
          <div className={styles["icon"]}>
              <PersonOutlineIcon style={{color:"white"}}/>
          </div>
          <div className={styles["title"]}>{props.text}</div>
          <div className={styles["text"]}>
              Vitae massa euismod enim dictum facilisi aliquam, elit, pretium. Id laoreet suscipit vel sagittis non commodo semper. Vitae massa euismod enim dictum facilisi aliquam, elit, pretium.
          </div>
      </div>
    )
  }

const Section6 = () => {



  return (
    <div className={styles['section']}>
        <div className={styles['headings']}>
            <h1>Build a powerful website for your startup.</h1>
            <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</p>
            <Button variant="contained" style={{backgroundColor:"#9D0AFF", color:"white", marginTop:"1.5rem"}}>Read More</Button>
        </div>
        <div className={styles['cards']}>

            <div className={styles['cardscol']}>
                <Card text="7000 Happy users"/>
                <Card text="24/7 Supports"/>
            </div>
            <div className={styles['cardscol']}>
                <Card text="Global Community"/>
            </div>
        </div>
    </div>
  )
}

export default Section6