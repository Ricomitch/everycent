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
    <div>
      <div className="list">
        <h4 style={{ fontWeight: "bold" }}>{data.fields.Category}</h4>
        <h4>{data.fields.Items}</h4>
        <h4>{data.fields.Amount}</h4>
      </div>
      <UpdateExpense
        data={data}
        fetchExpenses={props.fetchExpenses}
        updateFetchExpenses={props.updateFetchExpenses}
      />
      <div className="delete-btn">
        {/* <button onClick={deleteData}style={{color: "red"}}><FontAwesomeIcon icon="times-circle" /></button> */}
      </div>
    </div>
  );
}

export default UpdateData;
