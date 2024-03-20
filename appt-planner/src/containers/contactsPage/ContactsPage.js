import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContact}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [isDuplicate, setIsDuplicate] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      addContact(name, phone, email)
      setName('')
      setPhone('')
      setEmail('')
    }
  };

  const handleChange = ({target}) => {
    const {id, value} = target
    switch (true) {
      case (id === 'name'):
        setName(value);
        break;
      case (id === 'phone'):
        setPhone(value);
        break;
      case (id === 'email'):
        setEmail(value);
        break;
      default:
        console.log('No case set on form change for ID')
        break;        
    }
  }

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const duplicateState = contacts.every((contact) => contact.name !== name);
    setIsDuplicate(duplicateState)
  }, [name, contacts])

  return (
    <div>
      <section>
        <h2>
          Add Contact
          {isDuplicate ? " - Name Already Exists! 🚫" : ""}
        </h2> 
        <ContactForm 
          name={name} 
          phone={phone} 
          email={email} 
          handleChange={handleChange}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
