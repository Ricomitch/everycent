import React from "react";
import UpdateExpense from "./UpdateExpense";
import axios from "axios"

function Data(props) {
  const data = props.data;

  const deleteData = async () => {
    const response = await axios.delete(`https://api.airtable.com/v0/appqyiVOvBv6WBtX3/Table%201/${data.id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
      }
    })
  props.updateFetchExpenses(!props.fetchExpenses)
  }

  return (
    <div>
      <h2>{data.fields.Category}</h2>
      <h4>{data.fields.Items}</h4>
      <h3>{data.fields.Amount}</h3>
      <UpdateExpense data={data} fetchExpenses={props.fetchExpenses} updateFetchExpenses={props.updateFetchExpenses} />
      <button onClick={deleteData}>Delete</button>
    </div>
  );
}

export default Data;
