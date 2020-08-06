import React from "react";

export const Nav = () => {
  return (
    <div className="nav">
      <h2>Every ¢ent</h2>

      <div className="button">
        <button onClick={"/add"}>Add</button>
      </div>

      <div className="button">
        <button onClick={"/update"}>Update</button>
      </div>
    </div>
  );
};
