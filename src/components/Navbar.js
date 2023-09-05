import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const navigate = useNavigate();
    

  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <div>
          <a class="navbar-brand">OPG Šincek</a>
        </div>
        <div class="d-flex align-items-center">
          <ul class="nav">
            <li>
              <a class="nav-link" aria-current="page" onClick={() => navigate( "/ONama")}>
                O nama
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Kontakt
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
