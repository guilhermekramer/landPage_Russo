import React from "react";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <h3 className={style.logo}>Logo do Jorge</h3>
        <div className={style.menu}>
          <button className={style.menuButton}>Quem sou</button>
          <button className={style.menuButton}>Curso</button>
          <button className={style.menuButton}>Contato</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
