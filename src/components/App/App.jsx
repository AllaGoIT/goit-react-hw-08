import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contactsOps";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { selectError, selectLoading } from "../../redux/contactsSlice";

axios.defaults.baseURL = "https://66ab40ac636a4840d7c9e06f.mockapi.io";

const App = () => {
  // const { error, loading } = useSelector(selectError, selectLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      {/* {selectLoading.pending && <p>Loading contact...</p>}
      {selectError.error && <p>Error</p>} */}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
