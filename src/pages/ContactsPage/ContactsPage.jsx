import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "../../redux/contacts/operations";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addContact());
  }, [dispatch]);
  useEffect(() => {
    dispatch(deleteContact());
  }, [dispatch]);

  return (
    <>
      <div>{isLoading && "Request in progress..."}</div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </>
  );
}
