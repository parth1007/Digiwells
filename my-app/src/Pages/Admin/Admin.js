import React from 'react'
import styles from "./Admin.module.css"

import { useEffect,useState,useRef } from "react";

const HOST = "https://parth-digiwells-backend.onrender.com";


const Admin = () => {

  const [data, setData] = useState();
  const [heading,setHeading] = useState();
  const [image,setImage] = useState({});
  const inputRef = useRef(null);

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
        setData(data)
        setHeading(data?.heading)
      }
      fetchData();


    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

      // Login function
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch(`${HOST}/api/admin/update-heading`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({heading}) 
              });

            if(response.status === 200){
                alert("Heading updated successfully");
            }
            else{
                alert("Some problem occured");
            }

            // console.log(data);
        } catch (error) {
            alert("Invalid credentials");
            console.log(error);
        }
  }


  // File upload functions

  const fileOnChange = async (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  }

  const sendFile = async (e) => {
    let formData = new FormData();
    formData.append("logo",image);
    try {
      
      const response = await fetch(`${HOST}/api/admin/upload-image`, {
        method: 'POST',
        body: formData
      });

      const data = await response.text();
      alert("Logo uploaded successfully");
      inputRef.current.value = null;

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles['admin']}>
      <h1>Welcome {data?.email}! </h1>
      <div className={styles['headingupdate']}>
            <div className={styles["inputBox"]}>
                <label>Update the Heading</label>
                <input type="text" name="" value = {heading} placeholder={heading} required onChange={(e) => setHeading(e.target.value)}/>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </div>
      </div>
      <div className={styles['logoupdate']}>
        <input type="file" onChange={fileOnChange} ref={inputRef}/>
        <input type="submit" value="Upload" onClick={sendFile}/>
      </div>

      <h1>{data?.count} Demo request recieved so far </h1>
    </div>
  )
}

export default Admin