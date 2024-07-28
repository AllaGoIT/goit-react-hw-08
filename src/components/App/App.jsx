import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
// import { useState, useEffect } from "react";
// import { useState } from "react";
// import initialContacts from "../../contacts.json"

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  // const savedContacts = window.localStorage.getItem("setContacts");

  // if (savedContacts !== null) {
  //   return JSON.parse(savedContacts)
  // }
  // return initialContacts
  // })

  //   useEffect(() => {
  //   window.localStorage.setItem("setContacts", JSON.stringify(contacts))
  //  },[contacts]);

  // const addContacts = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts => {

  //     return prevContacts.filter((contact) => contact.id !== contactId)

  //   }))
  // };

  // const [filter, setFilter] = useState("");

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
// return (
//   <div>
//     <h1>Phonebook</h1>
//     <ContactForm onAdd={addContacts} />
//     <SearchBox value={filter} onSearch={setFilter} />
//     <ContactList contacts={rightFilter} onDelete={deleteContact} />
//   </div>
// )
