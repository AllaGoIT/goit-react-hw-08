import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );

  //   useEffect(() => {
  //     dispatch(logout);
  //   }, [dispatch]);
}
