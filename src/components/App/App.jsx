import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import { refresh } from "../../redux/auth/operations";
import RegistrationForm from "../RegistrationForm/RegistrationForm";
import LoginForm from "../LoginForm/LoginForm";

const App = () => {
  const isLoding = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {isLoding && <p>Loading contact...</p>}
      {isError && <p>Error massage</p>}
      <ContactForm />
      <SearchBox />
      <ContactList />
      <RegistrationForm />
      <LoginForm />
    </div>
  );
};

export default App;
