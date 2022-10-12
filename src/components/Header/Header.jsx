import React, { useState } from "react";
import NavItem from "../NavItem/NavItem";
import s from "./header.module.css";
import "./header2.css";
// import burger from "../../images/icons/burger/4781852_burger_line_list_menu_nav_icon.svg";
const Header = () => {
  // to change burger classes

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setmenuClass] = useState("menu hidden");
  const [isMeniClicked, setIsMeniClicked] = useState(false);

  // toggle menu burger change

  const updateMenu = () => {
    if (!isMeniClicked) {
      setBurgerClass("burger-bar clicked");
      setmenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setmenuClass("menu hidden");
    }
    setIsMeniClicked(!isMeniClicked);
  };
  return (
    <header className={s.navHeader} style={{ width: "99.3%", height: "10vh" }}>
      <nav>
        <div className={s.burgerMenu} onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <div className={s.titleMenu}>
          <NavItem item="Home" pathname={"/"} />
          <NavItem item="Islam" pathname={"/islam"} />
          <NavItem item="Xristianlik" pathname={"/islam"} />
          <NavItem item="Hinduizm" pathname={"/islam"} />
          <NavItem item="Buddizm" pathname={"/islam"} />
          <NavItem item="Yahudiylik" pathname={"/islam"} />
          <NavItem item="Nasroniylik" pathname={"/islam"} />
          <NavItem item="Lyuteryanlar" pathname={"/islam"} />
          <NavItem item="Buddistlar" pathname={"/islam"} />
          <NavItem item="Yangi Apostollar" pathname={"/islam"} />
          <NavItem item="Yahova Shohidlari" pathname={"/islam"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
