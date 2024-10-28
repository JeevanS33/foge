// src/App.js
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import EventList from "./Components/EventList/EventList";
import EventDetails from "./Components/EventDetails/EventDetails";
import { events } from "./Components/data/data"; // Import mock events
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventList events={events} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events/:id" element={<EventDetails events={events} />} />
      </Routes>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
