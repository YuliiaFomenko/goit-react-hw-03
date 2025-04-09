import React, { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import s from "./App.module.css";

const App = () => {
  const initialContacts = [
    {
      id: "id-1",
      name: "Rosie Simpson",
      number: "459-12-56",
    },
    {
      id: "id-2",
      name: "Hermione Kline",
      number: "443-89-12",
    },
    {
      id: "id-3",
      name: "Eden Clements",
      number: "645-17-79",
    },
    {
      id: "id-4",
      name: "Annie Copeland",
      number: "227-91-26",
    },
  ];

  const [contacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  return (
    <div className={s.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox
        value={filter}
        onChange={handleFilterChange}
      />
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

export default App;
