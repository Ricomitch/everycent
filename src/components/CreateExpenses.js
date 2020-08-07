import React, { useState } from "react";
import axios from "axios";

function CreateExpense(props) {
  const [category, updateCategory] = useState("");
  const [item, updateItem] = useState("");
  const [amount, updateAmount] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      "https://api.airtable.com/v0/appqyiVOvBv6WBtX3/Table%201",
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
    <div className="add-expense">
      <form onSubmit={handleSubmit}>
        <h2>Add Expenses</h2>
        <div className= "add-item">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            onChange={(e) => updateCategory(e.target.value)}
            value={category}
          />
        </div>

        <div className= "add-item">
          <label htmlFor="item">Item</label>
          <input
            type="text"
            id="item"
            onChange={(e) => updateItem(e.target.value)}
            value={item}
          />
        </div>

        <div className= "add-item">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            id="amount"
            onChange={(e) => updateAmount(e.target.value)}
            value={amount}
          />
        </div>

        <div className= "add-submit">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default CreateExpense;
