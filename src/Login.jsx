import axios from "axios";
import { useState } from "react";
import "./login.css";
import { Signup } from "./signup";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <div id="login" className="sign-in-form">
            <form onSubmit={handleSubmit}>
              <h2 className="title">Sign in</h2>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input name="email" type="text" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input name="password" type="password" placeholder="Password" />
              </div>
              <button type="submit" className="login-btn solif">
                Login
              </button>
              {/* <input type="submit" value="Login" className="login-btn solif" /> */}
            </form>
          </div>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Join now to unlock the full movie experience! Sign up today.</p>
            {/* <button className="btn transparent" id="sign-up-btn" href="/">
              Sign up
            </button> */}
            <a className="btn transparent" id="sign-up-btn" href="/signup">
              Signup
            </a>
          </div>
          <img
            src="https://beyondamazingexhibition.com/assets/img/hero/hero-spiderman.bec7418a.png"
            className="image"
            id="image-drag"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Welcome back! Sign in now for more movie magic!</p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
