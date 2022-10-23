import style from "./Header.module.css";
import Logo from "../assets/img/Logo.png";

export function Header() {
  return (
    <header className={style.header}>
      <img src={Logo} />
    </header>
  );
}
