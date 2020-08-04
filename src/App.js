import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import './App.css';
import axios from 'axios'
import Data from "./Data"

function App() {
  const [funds, updateFunds] = useState([])
    
  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get("https://api.airtable.com/v0/appqyiVOvBv6WBtX3/Table%201?view=Grid%20view", {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
        }
      }) 
      updateFunds(data.data.records)      
    }
    apiCall()
  }, [])
  return (
    <main>
      <h1>My Funds</h1>
      {funds.map(data => <Data data={data}/>)}
    </main>)
  // <div>
  //   <Route path="/" exact>
  //     <h2>Category</h2>
  //     <h2>Expenses</h2>
  //   </Route>
  //   <Route path="/add">
  //     <h2>Add Expenses</h2>
  //   </Route>
  // </div>
  
}

export default App;
