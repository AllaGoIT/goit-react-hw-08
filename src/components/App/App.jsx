
// import * as Yup from "yup";
// import { ErrorMessage } from "formik";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import Contact from "./Contact/Contact"
import { useState } from "react";

import initialContacts from "../../contacts.json"



const App = () => {

  const [contacts, setContacts] = useState(initialContacts);

  const addContacts = (newContact) => { 
    setContacts((prevContacts) => {
      return[...prevContacts, newContact]
    })
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts => {

      return prevContacts.filter((contact) => contact.id !== contactId)

    }))
   };
    return (
    <div>
  <h1>Phonebook</h1>
   <ContactForm onAdd = {addContacts} />
  <SearchBox /> 
        <ContactList contacts={contacts} onDelete = {deleteContact} />
        <Contact contacts={contacts}/>
</div>
    )


 };

export default App;