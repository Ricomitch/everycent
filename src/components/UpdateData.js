import React from "react";
import UpdateExpense from "./UpdateExpense";
import axios from "axios";
import ReactDOM from "react-dom";

function UpdateData(props) {
  const data = props.data;

  const deleteData = async () => {
    const response = await axios.delete(
      `https://api.airtable.com/v0/appqyiVOvBv6WBtX3/Table%201/${data.id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
    props.updateFetchExpenses(!props.fetchExpenses);
  };

  return (
    <div className="list">
      <div>
        <h4 className="list-category" style={{ fontWeight: "bold",  color: "rgb(48, 79, 120)"  }}>
          {data.fields.Category}
        </h4>
        <h4 className="list-Items">{data.fields.Items}</h4>
      </div>

      <div className="amount-container">
        <h4 className="list-Amount">{data.fields.Amount}</h4>
        </div>
       

        <div className="update-form">
          <UpdateExpense
            data={data}
            fetchExpenses={props.fetchExpenses}
            updateFetchExpenses={props.updateFetchExpenses}
          />
        
      </div>
    </div>
  );
}

export default UpdateData;
