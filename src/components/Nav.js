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
        
        <div>
          <Link to="/add">
            <button className="button">Add</button>
          </Link>
        </div>
      
      
        <div>
          <Link to="/update">
            <button className="button">Update</button>
          </Link>
      </div>
      

      
    </nav>
  );
};
