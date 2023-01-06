import React from 'react'
import styles from './Sidebar.module.css'
import CloseIcon from '@mui/icons-material/Close';


const Sidebar = ({functions}) => {
  return (
    <div className={styles['sidebar']}>
        <div className={styles['sidebarclose']}>
            <CloseIcon sx={{color:"white"}} onClick={()=>{functions(false)}}/>
        </div>
        <div className={styles['login']}>
            <button className={styles['loginbtn']} >Login</button>
        </div>
        <div className={styles['content']}>
            <div className={styles['menuitem']}>About</div>
            <div className={styles['menuitem']}>Blog</div>
            <div className={styles['menuitem']}>Pricing</div>
            <div className={styles['menuitem']}>Careers</div>
            <div className={styles['menuitem']}>Contact</div>
        </div>


    </div>
  )
}

export default Sidebar