import React, { useState } from "react";
import "./rsvp.css";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    event: "",
    attendance: "",
    members: "",
    message: "",
  });
  // console.log(props);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("event", formData.event); // Corrected key
    data.append("attendance", formData.attendance); // Corrected key
    data.append("members", formData.members); // Corrected key
    data.append("message", formData.message);

    const Sheet_Url =
      "https://script.google.com/macros/s/AKfycbyTn2Nnr-apV5AbX-PKXXM_rhT8S15l1fSUUhvdcsq_9zb6pfFcWDynjdQ2HwLq8fQ/exec";
    try {
      await fetch(Sheet_Url, {
        method: "POST",
        body: data,
        muteHttpExceptions: true,
      });

      setFormData({
        fullName: "",
        email: "",
        event: "",
        attendance: "",
        members: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="FullName"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
<div className="data">
          <div>
            <select
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Event
              </option>
              <option value="Haldi">Haldi</option>
              <option value="Mehndi">Mehndi</option>
              <option value="Walima">Walima</option>
            </select>
          </div>

          <div>
            <select
              id="attendance"
              name="attendance"
              value={formData.attendance}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Will You Attend
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Maybe">Maybe</option>
            </select>
          </div>

          <div>
            <select
              id="members"
              name="members"
              value={formData.members}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                How many of you are coming?
              </option>
              <option value="Just me">Just me</option>
              <option value="Two of us">Two of us</option>
              <option value="Whole Family">Whole Family</option>
            </select>
          </div>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button className="x_btn" type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default Contact;
