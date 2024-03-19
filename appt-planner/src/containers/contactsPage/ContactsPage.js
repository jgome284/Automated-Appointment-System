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
    if (!isDuplicate && name.length !== 0) {
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
        console.log('Id not found')
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
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
