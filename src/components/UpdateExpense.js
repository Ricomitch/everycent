import React, { useState } from "react";
import axios from "axios";

function UpdateExpense(props) {
  console.log(props);
  const [category, updateCategory] = useState(props.data.fields.Category);
  const [item, updateItem] = useState(props.data.fields.Items);
  const [amount, updateAmount] = useState(props.data.fields.Amount);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.put(
      `https://api.airtable.com/v0/appqyiVOvBv6WBtX3/Table%201/${props.data.id}`,
      {
        fields: {
          Category: category,
          Items: item,
          Amount: parseInt(amount, 10),
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    props.updateFetchExpenses(!props.fetchExpenses);
    updateCategory("");
    updateItem("");
    updateAmount("");
  };

  return (
    
      <form onSubmit={handleSubmit}>
      <div className="update-form">
        <h2>Update Expenses</h2>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          id="category"
          onChange={(e) => updateCategory(e.target.value)}
          value={category}
        />

        <label htmlFor="item">Item</label>
        <input
          type="text"
          id="item"
          onChange={(e) => updateItem(e.target.value)}
          value={item}
        />

        <label htmlFor="amount">Amount</label>
        <input
          type="text"
          id="amount"
          onChange={(e) => updateAmount(e.target.value)}
          value={amount}
        />
        <input type="submit" value="Update" />
        </div>
      </form>
    
  );
}

export default UpdateExpense;
