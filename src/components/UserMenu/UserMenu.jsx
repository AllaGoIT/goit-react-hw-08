import { logout } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function UserMenu() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout);
  }, [dispatch]);
}
