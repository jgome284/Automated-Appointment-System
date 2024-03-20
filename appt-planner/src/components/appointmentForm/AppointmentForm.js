import React, { useMemo } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  contact,
  date,
  time,
  handleSubmit,
  handleChange
}) => {
  // recalculate contact names on change to contacts list
  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <label for="name">
        Appointment Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        required
        placeholder="Appointment Name"
        aria-label="Appointment Name"
      />
      <br />
      <label for="contact">
        Contact
      </label>
      <ContactPicker
        name="contact"
        value={contact}
        contacts={contactNames}
      />
      <br />
      <label for="date">
        Date
      </label>
      <input
        type="date"
        name="date"
        id="date"
        min={getTodayString()}
        value={date}
        required
        aria-label="Date Picker"
      />
      <br />
      <label for="time">
        Time
      </label>
      <input
        type="time"
        name="time"
        id="time"
        value={time}
        required
        aria-label="Time Picker"
      />
      <br />
      <button aria-label="Add Appointment" type="submit">Add Appointment</button>
    </form>
  );
};
