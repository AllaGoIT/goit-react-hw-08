import { NavLink } from "react-router-dom";
import css from "../AuthNav/AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.container}>
      <NavLink className={css.textHome} to="/">
        Home
      </NavLink>
      <NavLink className={css.text} to="/register">
        Register
      </NavLink>
      <NavLink className={css.textLog} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
