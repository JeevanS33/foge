// src/components/EventDetails/EventDetails.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider/AuthProvider";
import "./EventDetails.css";

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const event = events.find((event) => event.id === parseInt(id));

  const bookTicket = () => {
    if (user) {
      if (event.availableSeats > 0) {
        event.availableSeats -= 1;
        alert("Ticket booked successfully!");
        navigate("/");
      } else {
        alert("This event is fully booked.");
      }
    } else {
      alert("Please log in to book a ticket.");
      navigate("/login");
    }
  };

  if (!event) return <h2>Event not found!</h2>;

  return (
    <div className="edetails">
      <div
        className="event-details-container"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url(${event.image})`,
          backgroundSize: "cover",
        }}
      >
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>Category: {event.category}</p>
        <p>Date: {event.date}</p>
        <p>Available Seats: {event.availableSeats}</p>
        <p className="price">Price: ${event.price}</p>
        <button onClick={bookTicket}>Book Ticket</button>
      </div>
    </div>
  );
};

export default EventDetails;
