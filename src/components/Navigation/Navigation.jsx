import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
// import { useSelector } from "react-redux";
// import { selectIsLoggedIn } from "../../redux/auth/selectors";
// import { selectIsRegistration } from "../../redux/auth/selectors";

export default function Novigation() {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const isRegistration = useSelector(selectIsRegistration);
  <nav>
    <NavLink className={css.link} to="/">
      Home
    </NavLink>
    {/* {isRegistration && ( */}
    <NavLink className={css.link} to="/register">
      Register
    </NavLink>
    {/* )} */}
    {/* {isLoggedIn && ( */}
    <NavLink className={css.link} to="/login">
      LogIn
    </NavLink>
    {/* )} */}
  </nav>;
}
