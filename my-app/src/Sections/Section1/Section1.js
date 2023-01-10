import React from 'react'
import styles from './Section1.module.css'
import landing from '../../Assets/Logos/landing.png'
import S1box from "../../Components/S1box/S1box"
import { useEffect,useState } from "react";

const HOST = "http://localhost:8000";

const Section1 = () => {

  const [heading, setheading] = useState("Save more and get your finances right");

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`${HOST}/api/admin/fetchdata`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });


      const data = await response.json() // parse the response as JSON
      console.log(data)
      setheading(data?.heading)

    }
    fetchData();

  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  const handleClick = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(`${HOST}/api/admin/count-increment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            }
          });

        const data = await response.json();
        console.log(data)

    } catch (error) {
        console.log(error);
    }
  }
  

  return (
    <div className={styles['landing']}>

        <div className={styles['div1']}>
            <div>{heading}</div>
            <div>Orci molestie nam vulputate nunc habitant gravida. Interdum vitae vivamus ipsum aliquet consectetur aliquam.</div>
            <div className={styles['getstart']} onClick={handleClick}> Request a demo </div>
        </div>
        
        <div className={styles['div2']}>
            <S1box/>  
        </div>
    </div>

    
  )
}

export default Section1