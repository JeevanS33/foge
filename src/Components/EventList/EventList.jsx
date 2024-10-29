// src/components/EventList/EventList.js
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./EventList.css";

const EventList = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter
        ? event.category === categoryFilter
        : true;
      return matchesSearch && matchesCategory;
    });
  }, [events, searchTerm, categoryFilter]);

  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  }, [filteredEvents, currentPage]);

  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  return (
    <div className="event">
      <div className="e-heading">
        <h2>Events</h2>
      </div>
      <div className="event-list">
        <div className="event-list-top">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            onChange={(e) => setCategoryFilter(e.target.value)}
            value={categoryFilter}
          >
            <option value="">All Categories</option>
            <option value="Concert">Concert</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
          </select>
        </div>
        <ul>
          {paginatedEvents.map((event) => (
            <li
              key={event.id}
              style={{
                background: `url(${event.image})`,
                backgroundSize: "cover",
              }}
            >
              <Link to={`/events/${event.id}`} className="no-underline">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>Category: {event.category}</p>
                <p>Date: {event.date}</p>
                <p>Available Seats: {event.availableSeats}</p>
                <p>Price: ${event.price}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
