import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
// import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { refresh } from "../../redux/auth/operations";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";
// import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
// import css from "./App.module.css";
import Navigation from "../Navigation/Navigation";
import { Routes, Route } from "react-router-dom";

import UserMenu from "../UserMenu/UserMenu";

const App = () => {
  // const isUser = useSelector(selectUser);
  // const isLoding = useSelector(selectLoading);
  // const isError = useSelector(selectError);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <UserMenu />
      {/* <h1>Phonebook</h1> */}
      {/* {isLoding && <p>Loading contact...</p>} */}
      {/* {isError && <p>Error massage</p>} */}
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      {/* <ContactList /> */}
      {/* <RegistrationForm /> */}
      {/* <LoginForm /> */}
      <Routes>
        <Route
          path="/"
          element={((<ContactForm />), (<SearchBox />), (<ContactList />))}
        />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </div>
  );
};

export default App;
