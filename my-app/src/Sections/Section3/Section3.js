import React from 'react'
import styles from './Section3.module.css'
import S3card from '../../Components/S3card/S3card'


const Section3 = () => {

  const headings = ["Event Management","Campaign Calender","Personal assistance","Payment feature","Utility apps","Sale notification"]
  return (
    <div className={styles['section3']}>
        <div className={styles['headings']}>
            <div>Supercharge your workflow to get started</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque doloremque optio ratione rerum dolores repellendus.</div>
        </div>
        <div className={styles['grid']}>
          {headings.map((heading) => (
            <S3card heading={heading}/>
          ))}

        </div>
    </div>
  )
}

export default Section3