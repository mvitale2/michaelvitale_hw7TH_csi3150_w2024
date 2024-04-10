import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    address: "",
    phone: "",
  });
  const handleChange = (event) => {
    setForm((prevData) => {
      const { value } = event.target;
      return {
        ...prevData,
        value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="form-wrapper">
      <form>
        {/* name */}
        <label>
          First Name:
          <input
            name="first-name"
            id="first-name"
            type="text"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="last-name"
            id="last-name"
            type="text"
            placeholder="Smith"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        {/* username */}
        <label>
          Username:
          <input
            name="username"
            id="username"
            type="text"
            placeholder="John123"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        {/* email */}
        <label>
          Email address:
          <input
            name="email"
            id="email"
            type="email"
            placeholder="john.smith@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {/* address */}
        <label>
          Home Address:
          <input
            name="address"
            id="address"
            type="text"
            placeholder="12345 Concordia Dr"
            value={formData.address}
            onChange={handleChange}
          />
        </label>
        {/* phone */}
        <label>
          Mobile Phone Number:
          <input
            name="phone"
            id="phone"
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="123-456-7890"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
