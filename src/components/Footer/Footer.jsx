import React from "react";
import s from "./footer.module.css";
import NavItem from "../../components/NavItem/NavItem";

const Footer = () => {
  return (
    <footer>
      <div className={s.footer}>
        <div className="container">
          <div className={s.content}>
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
      </div>
      <div className={s.product}>
        <div className="container">
          <h3 className={s.producted}>&copy; Niyozbek Pulatov</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
