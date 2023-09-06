import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();



  return (
    <nav className="navbar shadow mb-4 sticky-top">
      <div class="container-fluid">
        <div>
          <a class="navbar-brand fs-1">OPG Šincek</a>
        </div>
        <div class="d-flex align-items-center">
          <ul class="nav">
            <li>
              <a
                class="nav-link"
                aria-current="page"
                onClick={() => navigate("/ONama")}
                href="#"
              >
                O nama
              </a>
            </li>
            <li>
              <a class="nav-link" href="#">
                Kontakt
              </a>
            </li>
            <li>
              <a class="nav-link" onClick={() => navigate("/Ponuda")} href="#">
                Ponuda
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Pretraži sadnice"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
