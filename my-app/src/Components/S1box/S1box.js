import React from 'react'
import styles from './S1box.module.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import S4text from '../../Components/S4text/S4text'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import meeting from "../../Assets/meeting.jpg"
import image1 from "../../Assets/image1.png"
import overlap from "../../Assets/Teams/overlap.png"
import CircularProgress from '@mui/material/CircularProgress';
   
const Box1 = () => {
    return (
            <div className={styles['box1']}>
                <div className={styles['box1text']}>
                    <h1>48</h1>
                    <p>New orders this month</p>
                </div>
                <div className={styles['box1icon']}>
                    <TrendingUpIcon style={{color:"#13cf96"}}/>
                </div>
                
            </div>
    )
};

const Box2 = () => {
    return (
            <div className={styles['box2']}>
                <div className={styles['box1text']}>
                    <h1>4</h1>
                    <p>Team Projects</p>
                </div>
                <div className={styles['box2icon']}>
                    <img src={overlap} alt="overlap" className={styles['overlap']} />
                </div>
                
            </div>
    )
};

const Box3 = () => {
    return (
            <div className={styles['box3']}>
                <div className={styles['box3text']}>
                    <h1>42</h1>
                    <p>+Active Projects</p>
                </div>               
            </div>
    )
};

const Box4 = () => {
    const teams = [['Fred Marcos','Finance'],['Mark Tesla','Marketing'],['Elan Lanvand','Tech']]
    return (
        <div className={styles['box4']}>
            <h1 className={styles['boxtitle']}>Team Members</h1>
            <div className={styles['itemlist4']}>

            {teams.map((team) => (
            <div className={styles['box7item']}>
                    <div className={styles['boxtick boxtick4']} style={{backgroundColor:"#151531"}}>
                        <Avatar sx={{ bgcolor: "#845AFF" }}>{team[0][0]}</Avatar>
                    </div>
                    <div className={styles['box7itemtext']}>
                        <h4>{team[0]}</h4>
                        <p>{team[1]}</p>
                    </div>
                    <div className={styles['more']}><MoreHorizIcon sx={{color:"#5b5375"}}/></div>
                </div>
            ))}
            </div>
        </div>
    )
};

const Box5 = () => {
    return (
            <div className={styles['box5']}>                
                <h1>Total Budget</h1>
                <div className={styles['circular']}>
                    <div className={styles['innercircle']}>
                        54%
                    </div>
                </div>
                <div className={styles['box5text']}>
                    <p>Increase in orders</p>
                    <TrendingUpIcon style={{color:"#13cf96"}}/>
                    <p>23%</p>
                </div>
              
            </div>
    )
};

const Box7 = () => {

    const tasks = [['Completed','#35334d'],['Done','#9D0AFF'],['Completed','#35334d']]

    return (
            <div className={styles['box7']}>
                <h1 className={styles['boxtitle']}>Your Tasks</h1>
                <div className={styles['itemlist']}>

                    {tasks.map((task) => (
                        <div className={styles['box7item']}>
                            <div className={styles['boxtick']} style={{backgroundColor:tasks[1]}}>
                                <CheckCircleOutlineOutlinedIcon sx={{fontSize:"1.5rem",fontWeight:"200",color:"#bdbdbd"}} />
                            </div>
                            <div className={styles['box7itemtext']}>
                                <h4>Get your soft done</h4>
                                <p>{task[0]}</p>
                            </div>
                        </div>
                      ))}
                </div>
            </div>
    )
  };


const S1box = () => {   
  return (
    <div className={styles['container']} >
        
        <div className={styles['sec1']}>
            <Box1 />
            <Box2 />
            <Box3 />
        </div>
        <div className={styles['sec2']}>
            <Box4 />
            <Box5 />
            <Box7 />
        </div>
        
    </div>
  )
}

export default S1box