import { logout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <nav className={css.containerLog}>
        <header className={css.hederNav}>
          <Link className={css.text} to="/">
            Home
          </Link>
          <Link className={css.text} to="/register">
            Register
          </Link>
          <Link className={css.text} to="/login">
            LogIn
          </Link>
        </header>
      </nav>
      <p className={css.username}>Welcome{user}</p>
      {user !== 0 && (
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}
    </div>
  );
}
