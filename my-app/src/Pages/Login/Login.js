import React from 'react'
import styles from "./Login.module.css"
import axios from "axios";
import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";


const HOST = "http://localhost:8000";



const Login = () => {

    // useStates declaration
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    // Login function
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password);
        try {
            const response = await fetch(`${HOST}/api/admin/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password}) 
              });

            if(response.status === 200){
                navigate("/admin")
                alert("Login Successfull!");
            }
            else{
                alert("Invalid credentials");
            }
        } catch (error) {
            alert("Invalid credentials");
            console.log(error);
        }
  }

  return (
    <div className={styles["box"]}>
        <h2>Login as Admin</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles["inputBox"]}>
                <input type="text" name="" required onChange={(e) => setEmail(e.target.value)}/>
                <label>Username</label>
                
            </div>
            <div className={styles["inputBox"]}>
                <input type="text" name="" required onChange={(e) => setPassword(e.target.value)}/>
                <label>Password</label>
            </div>
            <input type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Login