import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar shadow sticky-top">
      <div className="container-fluid">
        <div>
          <Button
            className="navbar-brand fs-1 bg-transparent"
            onClick={() => {
              navigate("/");
            }}
          >
            OPG Šincek
          </Button>
        </div>
        <div className="d-flex align-items-center">
          <ul className="nav">
            <li>
              <Button
                className="nav-link"
                aria-current="page"
                onClick={() => navigate("/ONama")}
                //eslint-disable-next-line
                href="#"
              >
                O nama
              </Button>
            </li>
            <li>
              <Button
                className="nav-link"
                onClick={() => navigate("/Kontakt")}

              >
                Kontakt
              </Button>
            </li>
            <li>
              <Button
                className="nav-link"
                onClick={() => navigate("/Ponuda")}
              >
                Ponuda
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
