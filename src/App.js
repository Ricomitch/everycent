import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Data from "./components/Data";
import CreateExpenses from "./components/CreateExpenses";
import { Nav } from "./components/Nav";
import UpdateExpense from "./components/UpdateExpense";
import Balance from "./components/Balance";

function App() {
  const [funds, updateFunds] = useState([]);
  const [balance, updateBalance] = useState(0)
  const [fetchExpenses, updateFetchExpenses] = useState(false);

  useEffect(() => {
    const apiCall = async () => {
      const data = await axios.get(
        "https://api.airtable.com/v0/appqyiVOvBv6WBtX3/Table%201?view=Grid%20view",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateFunds(data.data.records);
    };
    apiCall();
  }, [fetchExpenses]);

  useEffect(() => {
    let total = 0
    if (funds.length > 0) {
      funds.forEach(element => {
       total += element.fields.Amount 
      });

      updateBalance(total)
    }
  }, [funds])

  return (
    <div>
      <main>
        <div>
          <Nav />
          <Balance balance={balance}/>
        </div>
        <h2>My Funds</h2>
        {/* <CreateExpenses */}
        {/* updateFetchExpenses={updateFetchExpenses}
        fetchExpenses={fetchExpenses}
      /> */}
        {/* {funds.map(data => <Data data={data} key={data.id} fetchExpenses={fetchExpenses} updateFetchExpenses={updateFetchExpenses} />)} */}
      </main>

      <Route path="/" exact>
        {funds.map((data) => (
          <Data
            data={data}
            key={data.id}
            fetchExpenses={fetchExpenses}
            updateFetchExpenses={updateFetchExpenses}
          />
        ))}

        {/* <UpdateExpense
        category={category}
        updatecategory={updateCategory}
        items={items}
        updateitems={updateItems}
        amount={amount}
        updateamount={updateAmount}
      />    */}
      </Route>

      <Route path="/add" exact>
        <CreateExpenses
          updateFetchExpenses={updateFetchExpenses}
          fetchExpenses={fetchExpenses}
         
        />
      </Route>
    </div>
  );
}

export default App;
