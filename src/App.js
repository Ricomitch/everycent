import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Index } from "./index";
import "./App.css";
import axios from "axios";
import Data from "./components/Data";
import CreateExpenses from "./components/CreateExpenses";
import { Nav } from "./components/Nav";
import UpdateExpense from "./components/UpdateExpense";
import Balance from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import UpdateData from "./components/UpdateData"

function App() {
  const [funds, updateFunds] = useState([]);
  const [balance, updateBalance] = useState(0);
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
    let total = 0;
    if (funds.length > 0) {
      funds.forEach((element) => {
        total += element.fields.Amount;
      });

      updateBalance(total);
    }
  }, [funds]);

  return (
    <div className="body">
      <main>
        <div>
          <Nav />
          <div className="balance">
            <Balance balance={balance} />
            <IncomeExpenses />
          </div>
        </div>
        <div className="transaction">
          <h3>Transactions</h3>
        </div>
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

      <Route path="/update">
      {funds.map((data) => (
          <UpdateData
            data={data}
            key={data.id}
            fetchExpenses={fetchExpenses}
            updateFetchExpenses={updateFetchExpenses}
          />
        ))}
        {/* <UpdateExpense
          data={funds}
          fetchExpenses={fetchExpenses}
          updateFetchExpenses={updateFetchExpenses}
        />
        /> */}
      </Route>
    </div>
  );
}

export default App;
