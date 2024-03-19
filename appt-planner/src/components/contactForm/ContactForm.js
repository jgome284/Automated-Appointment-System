import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  handleSubmit,
  handleChange,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <label for="name">Name</label>
        <input
          required 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          pattern="^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$"
          placeholder="Contact Name"
        />
        <br />
        <label for="phone">Phone</label>
        <input
          required  
          type="tel" 
          id="phone" 
          name="phone" 
          value={phone} 
          pattern="^(1?)(-| ?)(\()?([0-9]{3})(\)|-| |\)-|\) )?([0-9]{3})(-| )?([0-9]{4}|[0-9]{4})$"
          placeholder="Contact Phone"
        />
        <br />
        <label for="email">Email</label>
        <input
          required  
          type="email" 
          id="email" 
          name="email" 
          value={email}
          placeholder="Contact Email"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

