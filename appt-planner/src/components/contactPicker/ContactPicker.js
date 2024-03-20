import React from "react";

export const ContactPicker = ({value, name, handleChange, contacts}) => {
  return (
    <select required aria-label="Contact Picker" value={value} name={name} id="contact">
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
