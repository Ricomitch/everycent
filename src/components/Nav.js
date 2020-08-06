import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-name">
        <Link to="/">
          <h2>Every ¢ent</h2>
        </Link>
      </div>
      <div>
        <div className="button-add">
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
      </div>
      <div>
        <div className="button-update">
          <Link to="/update">
            <button>Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
