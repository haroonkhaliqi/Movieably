/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { LogoutLink } from "./Logout";
import { SearchBar } from "./SearchBar";

export function Header() {
  let authenticationLinks;

  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <>
        <li className="nav-item">
          <Link to="/signup" className="nav-link" aria-current="page">
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </>
    );
  } else {
    authenticationLinks = (
      <li className="nav-item">
        <LogoutLink />
      </li>
    );
  }

  return (
    <nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
      <div className="d-flex justify-content-end"></div>
      <div class="container-fluid">
        <a class="navbar-brand fs-2" href="/">
          <img
            src="https://versi.design/wp-content/uploads/Logo-MovieBucket.png"
            alt="Logo"
            width="50"
            height="50"
          ></img>
          Movieably
        </a>
        <div className="d-flex justify-content-end">
          <div className="search-wrapper p-2" search-wrapper>
            <input
              type="text"
              name="search"
              aria-label="search movies"
              placeholder="Search any movies..."
              className="search-field"
              autocomplete="off"
              search-field
            />
            <img
              src="https://raw.githubusercontent.com/Shivam171/Tvflix/main/assets/images/search.png"
              alt="search"
              class="leading-icon"
              width="24"
              height="24"
            />
          </div>
          <a class="btn btn-outline-success me-2 align-self-center" href="/login">
            Login
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Favorites
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
