import React from 'react'

import styles from './Footer.module.css'
import logo from '../../Assets/Logos/nav.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {

    const list1 = ["Home", "Blog", "Blog Template", "Pricing", "Pricing Ecommerce", "About", "Careers", "Careers Template", "Contact"]
    const list2 = ["Style Guide", "Licenses", "Changelog"]
  return (

        <div className={styles['footer']}>
            <div className={styles['div1']}>
                <div className={styles['div1cont']}>
                    <div className={styles['logo']}>
                        <div><img alt="logo" src={logo} className={styles['logopng']}/></div>
                        <div className={styles['logotxt']}>PEPPER</div>
                    </div>
                    <div className={styles['ftext']}>
                        Pepper is one of the most reliable delievery patlform magement
                        service to automate your network.
                    </div>
                    <div className={styles['getstart']}> Get Started </div>
                    <div className={styles['icons']}>
                        <LinkedInIcon/>
                        <TwitterIcon/>
                        <EmailIcon/>
                    </div>
                </div>
                <div className={styles['div1foot']}>
                    © All rights reserved. <span style={{color:"#00F59B"}}>Flowset</span>. Powered by <span style={{color:"#9D0AFF"}}>Wf</span>.
                </div>
            </div>
            <div className={styles['div2']}>
                
                <div className={styles['div2title']}> Pages main</div>
                <div className={styles['div2content']}>
                    {
                        list1.map((item) => (
                            <div>{item}</div>
                        ))
                    }
                </div>
            </div>
            <div className={styles['div3']}>
                <div className={styles['div2title']}>Template pages</div>
                <div className={styles['div2content']}>
                    {
                        list2.map((item) => (
                            <div>{item}</div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    
    )
}

export default Footer
