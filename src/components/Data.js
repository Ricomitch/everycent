import React from "react";
import UpdateExpense from "./UpdateExpense";
import axios from "axios";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Data(props) {
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
        <h4 className="list-category" style={{ fontWeight: "bold",  color: "rgb(238, 130, 35)" }}>
          {data.fields.Category}
        </h4>
        <h4 className="list-Items">{data.fields.Items}</h4>
      </div>

      <div className="amount-container">
        <h4 className="list-Amount">${data.fields.Amount}</h4>
        <div className="delete-btn">
          <button onClick={deleteData} style={{ color: "red" }}>
            <FontAwesomeIcon icon="times-circle" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Data;
