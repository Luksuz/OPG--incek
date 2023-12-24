import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar shadow sticky-top">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand fs-1" onClick={() => {navigate("/")}}>OPG Šincek</a>
        </div>
        <div className="d-flex align-items-center">
          <ul className="nav">
            <li>
              <a
                className="nav-link"
                aria-current="page"
                onClick={() => navigate("/ONama")}
                href="#"
              >
                O nama
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => navigate("/Kontakt")} href="#">
                Kontakt
              </a>
            </li>
            <li>

              <a className="nav-link" onClick={() => navigate("/Ponuda")} href="#">
                Ponuda
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
