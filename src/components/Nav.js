import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <div className="nav-name">
        <Link to="/">
          <h2>Every ¢ent</h2>
        </Link>
      </div>
      
        <div className="button">
          <Link to="/add">
            <button>Add</button>
          </Link>
        </div>
      
      
        <div className="button">
          <Link to="/update">
            <button>Update</button>
          </Link>
        </div>

      
    </nav>
  );
};
