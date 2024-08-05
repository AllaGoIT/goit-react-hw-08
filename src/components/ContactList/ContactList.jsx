// import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectNameFilter);

  return (
    <ul className={css.ulList}>
      {contacts.map((contact) => (
        <li className={css.list} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
