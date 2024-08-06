import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Novigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  <nav>
    <NavLink className={css.link} to="/">
      Home
    </NavLink>

    {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
  </nav>;
}
