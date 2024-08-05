import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectIsRegistration } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistartion = useSelector(selectIsRegistration);

  return (
    <nav>
      {isRegistartion && (
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink className={css.link} to="/login">
          LogIn
        </NavLink>
      )}
    </nav>
  );
}
