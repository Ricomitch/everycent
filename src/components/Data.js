import React from "react";
import UpdateExpense from "./UpdateExpense";

function Data(props) {
  const data = props.data;
  return (
    <div>
      <h2>{data.fields.Category}</h2>
      <h4>{data.fields.Items}</h4>
      <h3>{data.fields.Amount}</h3>
      <UpdateExpense data={data} fetchExpenses={props.fetchExpenses} updateFetchExpenses={props.updateFetchExpenses} />
    </div>
  );
}

export default Data;
