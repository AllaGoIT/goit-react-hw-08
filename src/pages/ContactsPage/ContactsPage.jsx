import { useDispatch } from "react-redux";
import ContactList from "../../components/ContactList/ContactList";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import { useEffect, useSelector } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
export default function ContactsPage() {
  const dipatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dipatch(fetchContacts());
  }, [dipatch]);
  return (
    <>
      <div>{isLoading && "Request in progress..."}</div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />;
    </>
  );
}
