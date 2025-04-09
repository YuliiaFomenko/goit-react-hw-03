import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
