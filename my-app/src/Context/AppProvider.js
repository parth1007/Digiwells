import React from 'react';

import { useContext,useState,useEffect,createContext } from "react";


const AppContext = createContext();
const HOST = "https://parth-digiwells-backend.onrender.com";



const AppProvider = ({children}) =>{
    
    // UseState Declarations
    const [data, setData] = useState();


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
      }
      fetchData();


    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])



    return(
        
        <AppContext.Provider 
                value={{ data }}>
                {children}
        </AppContext.Provider>
    )
    
}

export const AppState = () => {
    return useContext(AppContext);
}


export default AppProvider;