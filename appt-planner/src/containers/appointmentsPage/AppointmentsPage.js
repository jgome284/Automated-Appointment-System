import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({appointments, addAppointment, contacts}) => {
  /*
  Define state variables for 
  appointment info
  */
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointment(name, contact, date, time);
    setName("");
    setContact("");
    setDate("");
    setTime("");
  };

  const handleChange = ({target}) => {
    const {id, value} = target
    switch (true) {
      case (id === 'name'):
        setName(value);
        break;
      case (id === 'contact'):
        setContact(value);
        break;
      case (id === 'date'):
        setDate(value);
        break;
      case (id === 'time'):
        setTime(value);
        break;
      default:
        console.log('No case set on form change for ID')
        break;        
    }
  }

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};