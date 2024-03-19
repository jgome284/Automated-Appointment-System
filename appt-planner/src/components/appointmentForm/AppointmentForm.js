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
    <></>
  );
};
