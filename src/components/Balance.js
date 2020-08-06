import React from "react";

export default function Balance({ balance }) {
  return (
    <>
      <div className="balance-txt">
        <h4>Your Balance</h4>
      </div>
      <h1 style={{ color: "Green" }}>${balance}</h1>
    </>
  );
}
