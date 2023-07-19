import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/login"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <div action="/login" className="sign-in-form">
            {/* <h2 className="title">Sign up</h2>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul> */}
            <form onSubmit={handleSubmit}>
              <h2 className="title">Sign up</h2>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input name="name" type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input name="email" type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input name="password" type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input name="password_confirmation" type="password" placeholder="Password Confirmation" />
              </div>
              <input type="submit" value="Sign Up" className="login-btn solif" />
            </form>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Welcome back! Sign in now for more movie magic!</p>
            {/* <button className="btn transparent" id="sign-up-btn" href="/">
              Sign up
            </button> */}
            <a className="btn transparent" id="sign-up-btn" href="/login">
              Login
            </a>
          </div>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/f/ff/Web_of_Venom.png"
            className="image"
            id="image-drag"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
