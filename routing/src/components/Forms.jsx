import { useState } from "react";
import "./styles.css";
function Forms() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [empty, setEmptyFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  });

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const namePattern = /^[a-zA-Z ]*$/;
  const contactPattern = /^[0-9]{10}$/;

  function handleSubmit() {
    let formIsValid = true;
    let emptyFields = {
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
    };

    if (firstName.trim() === "") {
      emptyFields.firstName = "Please enter your FirstName";
      formIsValid = false;
    } else if (!namePattern.test(firstName)) {
      emptyFields.firstName = "FirstName should not contain special characters";
      formIsValid = false;
    }

    if (lastName.trim() === "") {
      emptyFields.lastName = "Please enter your LastName";
      formIsValid = false;
    } else if (!namePattern.test(lastName)) {
      emptyFields.lastName = "LastName should not contain special characters";
      formIsValid = false;
    }

    if (email.trim() === "") {
      emptyFields.email = "Please enter your Email";
      formIsValid = false;
    } else if (!emailPattern.test(email)) {
      emptyFields.email = "Please enter a valid Email";
      formIsValid = false;
    }

    if (
      contact.trim() === "" ||
      contact.trim().length !== 10 ||
      !contactPattern.test(contact)
    ) {
      emptyFields.contact = "Please enter a valid Contact";
      formIsValid = false;
    }

    setEmptyFields(emptyFields);

    if (formIsValid) {
      alert("Registration successful");
    }
  }

  return (
    <div className="border">
      <h2 className="text-primary text-center">Registration Form</h2>

      <div className="fileds">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {empty.firstName && (
          <span className="text-danger">{empty.firstName}</span>
        )}
      </div>

      <div className="fileds">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {empty.lastName && (
          <span className="text-danger">{empty.lastName}</span>
        )}
      </div>

      <div className="fileds">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {empty.email && <span className="text-danger">{empty.email}</span>}
      </div>

      <div className="fileds">
        <label>Contact</label>
        <input
          type="text"
          className="form-control"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {empty.contact && <span className="text-danger">{empty.contact}</span>}
      </div>

      <div className="fileds">
        <button className="btn" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Forms;