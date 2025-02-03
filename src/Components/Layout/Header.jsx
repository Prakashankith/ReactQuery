import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <NavLink to="/">ReactQuery</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trad">FetchOld</NavLink>
          </li>
          <li>
            <NavLink to="/rq">FetchRq</NavLink>
          </li>
          <li>
            <NavLink to="/infinite">InfiniteScroll</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
