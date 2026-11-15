import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register_url = window.location.origin + "/djangoapp/register";

  const register = async (e) => {
    e.preventDefault();

    if (!userName || !firstName || !lastName || !email || !password) {
      setMessage("Please fill out all five fields to register.");
      return;
    }

    try {
      const res = await fetch(register_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }),
      });

      const json = await res.json();
      if (json.status === "Authenticated") {
        sessionStorage.setItem("username", json.userName);
        window.location.href = window.location.origin;
      } else if (json.error === "Already Registered") {
        setMessage("The username is already registered. Please choose another username.");
      } else {
        setMessage(json.error || "Registration failed. Please try again.");
      }
    } catch (err) {
      setMessage("Unable to connect to the server. Please check your network connection.");
    }
  };

  return (
    <div className="register_container">
      <div className="register_card">
        <h2 className="register_title">Create an Account</h2>
        <p className="register_subtitle">Sign up to review car dealerships nationwide</p>

        {message && <div className="alert alert-danger">{message}</div>}

        <form onSubmit={register} className="register_form">
          {/* Field 1: Username */}
          <div className="input_group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          {/* Field 2: First Name */}
          <div className="input_group">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              type="text"
              name="firstname"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          {/* Field 3: Last Name */}
          <div className="input_group">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Field 4: Email */}
          <div className="input_group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Field 5: Password */}
          <div className="input_group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Action: Register button */}
          <button type="submit" className="register_btn">
            Register
          </button>
        </form>

        <p className="login_redirect">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
