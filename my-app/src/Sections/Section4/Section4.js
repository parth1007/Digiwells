import React from 'react'
import styles from './Section4.module.css'
import S4text from '../../Components/S4text/S4text'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import meeting from "../../Assets/meeting.jpg"
import image1 from "../../Assets/image1.png"
import leftcurve from '../../Assets/Section7/leftcurves.svg'
import rightcurve from '../../Assets/Section7/rightcurves.svg'


const Box1 = () => {
  return (
        <div className={styles['box1']}>
            <img src={leftcurve} alt="leftcurve" className={styles['leftcurve']}/>
            <img src={rightcurve} alt="rightcurve" className={styles['rightcurve']}/>
            <div className={styles['box1inner']}>
                <h1 className={styles['boxtitle']}>Your Tasks</h1>
                <div className={styles['itemlist']}>
                    <div className={styles['box1item']}>
                        <div className={styles['boxtick']}>
                            <CheckCircleOutlineOutlinedIcon sx={{fontSize:"1.5rem",fontWeight:"200",color:"#bdbdbd"}} />
                        </div>
                        <div className={styles['box1itemtext']}>
                            <h4>Get your soft done</h4>
                            <p>Completed</p>
                        </div>
                    </div>
                    <div className={styles['box1item']}>
                        <div className={styles['boxtick']} style={{backgroundColor:"#9D0AFF"}}>
                            <CheckCircleOutlineOutlinedIcon sx={{fontSize:"1.5rem",fontWeight:"200",color:"#bdbdbd"}} />
                        </div>
                        <div className={styles['box1itemtext']}>
                            <h4>Get your soft done</h4>
                            <p>Done</p>
                        </div>
                    </div>
                    <div className={styles['box1item']}>
                        <div className={styles['boxtick']}>
                            <CheckCircleOutlineOutlinedIcon sx={{fontSize:"1.5rem",fontWeight:"200",color:"#bdbdbd"}} />
                        </div>
                        <div className={styles['box1itemtext']}>
                            <h4>Get your soft done</h4>
                            <p>Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};

const Box2 = () => {
    return (
            <div className={styles['box2']}>
                <div className={styles['box2inner']}>
                    <h1 className={styles['boxtitle']}>Team Members</h1>
                    <div className={styles['itemlist2']}>
                        <div className={styles['box1item']}>
                            <div className={styles['boxtick boxtick2']} style={{backgroundColor:"#151531"}}>
                                <Avatar sx={{ bgcolor: "#845AFF" }}>N</Avatar>
                            </div>
                            <div className={styles['box1itemtext']}>
                                <h4>Fred Marcos</h4>
                                <p>Finance</p>
                            </div>
                            <div className={styles['more']}><MoreHorizIcon sx={{color:"#5b5375"}}/></div>
                        </div>
                        <div className={styles['box1item']}>
                            <div className={styles['boxtick boxtick2']} style={{backgroundColor:"#151531"}}>
                                <Avatar sx={{ bgcolor: "#00F59B" }}>P</Avatar>
                            </div>
                            <div className={styles['box1itemtext']}>
                                <h4>Mark Tesla</h4>
                                <p>Marketing</p>
                            </div>
                            <div className={styles['more']}><MoreHorizIcon sx={{color:"#5b5375"}}/></div>
                        </div>
                        <div className={styles['box1item']}>
                            <div className={styles['boxtick boxtick2']} style={{backgroundColor:"#151531"}}>
                                <Avatar sx={{ bgcolor: "#845AFF" }}>A</Avatar>
                            </div>
                            <div className={styles['box1itemtext']}>
                                <h4>Elan Lanvand</h4>
                                <p>Tech</p>
                            </div>
                            <div className={styles['more']}><MoreHorizIcon sx={{color:"#5b5375"}}/></div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

const Box3 = () => {
    return (
            <div className={styles['box3']}>
                
                <div className={styles['box3inner']}>
                    <img src={meeting} className={styles['meetimg']}/>
                </div>
                <img src={image1} className={styles['imgside']}/>
            </div>
    )
};

const Section4 = () => {


  return (
    <div className={styles['section1']}>
        <div className={styles['div1']}>
            <div className={styles['left']}>
                <Box1/>
            </div>
            <div className={styles['right']}>
                <S4text color="#845AFF" heading="Manage and Track Your Projects"/>
            </div>
        </div>
        <div className={styles['div1']}>
            <div className={styles['left']}>
                <S4text color ="#00F59B" heading="Easily manage your team's tasks"/>
            </div>
            <div className={styles['right']}>
                <Box2/>
            </div>
        </div>
        <div className={styles['div1']}>
            <div className={styles['left']}>
                <Box3/>
            </div>
            <div className={styles['right']}>
                <S4text color="#9D0AFF" heading="Simple financial overview for you"/>
            </div>
        </div>
        
    </div>

    
  )
}

export default Section4