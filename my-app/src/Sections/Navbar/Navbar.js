import React from 'react'
import styles from './navbar.module.css'
import logo from '../../Assets/Logos/nav.png'
import cart from '../../Assets/Logos/cart.png'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useState } from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className={styles['navbar']}>
        {
          isOpen?  <Sidebar functions={setIsOpen} /> : <></>
        }
        <div className={styles['div1']}>
            <div><img alt="logo" src={logo} className={styles['logopng']}/></div>
            <div className={styles['logotxt']}>PEPPER</div>
        </div>
        <div className={styles['div2']}>
            <div className={styles['navtxt']}>About</div>
            <div className={styles['navtxt']}>Blog</div>
            <div className={styles['navtxt']}>Pricing</div>
            <div className={styles['navtxt']}>Careers</div>
            <div className={styles['navtxt']}>Contact</div>
        </div>

        <div className={styles['div3']}>
            <div className={styles['cart']}>
            <img alt="svg1107" src={cart} className={styles['cartsvg']}/>
            <div className={styles['carttxt']}>Cart</div>
            </div>
            <div className={styles['login']}> Login</div>
            <div className={styles['getstart']}> Get Started </div>
        </div>

        <div className={styles['div3responsive']}>
              <div className={styles['cart']}>
                <img alt="svg1107" src={cart} className={styles['cartsvg']}/>
                <div className={styles['carttxt']}>Cart</div>
              </div>
              <div className={styles['menudiv']} onClick={()=>{console.log(isOpen);setIsOpen(true)}}>
                <MenuIcon sx={{color:"white"}}/>
              </div>
              
        </div>
    </div>
  )
}

export default Navbar