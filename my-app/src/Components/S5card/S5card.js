import React from 'react'
import styles from './S5card.module.css'
import StarIcon from '@mui/icons-material/Star';
import Stack from '@mui/material/Stack';

const S5card = () => {
  return (
    <div className={styles['card']}>
      <div className={styles['innerbox']}>
        <p>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur.</p>
        <Stack direction="row" spacing={1} style={{marginTop:"1.5rem"}}>
            <StarIcon sx={{color:"#00e676"}} />
            <StarIcon sx={{color:"#00e676"}} />
            <StarIcon sx={{color:"#00e676"}} />
            <StarIcon sx={{color:"#00e676"}} />
            <StarIcon sx={{color:"#00e676"}} />
        </Stack>
        <h2>Ronald Richards</h2>
        <p>CEO - Utlta</p>
      </div>
    </div>
  )
}

export default S5card