import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom"
import './App.css';
import axios from 'axios'
import Data from "./Data"

function App() {
  const [funds, updateFunds] = useState([])
  const [category, updateCategory] = useState('')
  const [item, updateItem] = useState('')
  const [amount, updateAmount] = useState('')
  const [fetchExpenses, updateFetchExpenses] = useState(false)
    
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
  }, [fetchExpenses])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post("https://api.airtable.com/v0/appqyiVOvBv6WBtX3/Table%201", {
        fields: {
          "Category": category,
          "Items": item,
          "Amount": parseInt(amount,10)
        }
    }, {
      
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json'
      }
    })
    updateFetchExpenses(!fetchExpenses)
    updateCategory('')
    updateItem('')
    updateAmount('')
  }

  return (
    <main>
      <h1>My Funds</h1>
      {funds.map(data => <Data data={data} key={data.id} />)}
      <h2>Add Expenses</h2>
      <form onSubmit={handleSubmit}>

        <label htmlFor="category">Category</label>
        <input type="text" id="category" onChange={e => updateCategory(e.target.value)} value={category}/>

        <label htmlFor="item">Item</label>
        <input type="text" id="item" onChange={e => updateItem(e.target.value)} value={item} />

        <label htmlFor="amount">Amount</label>
        <input type="text" id="amount" onChange={e => updateAmount(e.target.value)} value={amount} />
        <input type="submit" value="Submit"/>
         
      </form>
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
