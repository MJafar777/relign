import React from "react";
import s from "./navItem.module.css";
import { NavLink } from "react-router-dom";
const NavItem = ({ item, pathname }) => {
  return (
    <div>
      <NavLink className={s.link} to={pathname}>
        {item}
      </NavLink>
    </div>
  );
};

export default NavItem;
