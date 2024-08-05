import { logout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <nav>
        <header className={css.hederNav}>
          <p className={css.textHome}>Home</p>
          <div className={css.containerLog}>
            <p>Register</p>
            <p>LogIn</p>
            {/* <hr className={css.line} /> */}
          </div>
        </header>
      </nav>
      {/* <p className={css.username}>Welcome{user}</p> */}
      {/* {user !== 0 && (
        <button type="button" onClick={() => dispatch(logout())}>
          Logout
        </button> */}
      {/* )} */}
    </div>
  );
}
