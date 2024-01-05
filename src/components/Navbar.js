import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import "../styles.css";
import { useEffect, useState } from "react";


export default function Navbar() {
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let cartItems = 0;
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      cart.forEach((item) => {
        cartItems += Number(item.quantity);
      });
    }
    setQuantity(cartItems);
  }, []);

  return (
    <nav className="navbar shadow sticky-top mb-5" style={{backgroundColor: "#73F28F"}}>
<div className="container-fluid d-flex justify-content-between align-items-center">
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
          <ul className="nav gap-3">
            <li>
            <Button
                className="nav-link"
                aria-current="page"
                onClick={() => navigate("/")}
                //eslint-disable-next-line
                href="#"
              >
                Početna
              </Button>
            </li>
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
        <div className="position-relative">
            <img src="shopping-cart.png" onClick={() => {
              navigate("/Košarica");
            }}
            alt="cart"
            />
            <span className="cart-icon">{quantity}</span>
        </div>
      </div>


      <div className="container-fluid d-flex justify-content-between align-items-center d-block d-md-none">
    <Dropdown>
      <Dropdown.Toggle >
      <img src="menu.png" id="dropdown-basic" className="bg-transparent" alt="dropdown"/>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate("/")} href="#/action-1">Početna</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("ONama")} href="#/action-2">O Nama</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Ponuda")} href="#/action-3">Proizvodi</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Kontakt")} href="#/action-3">Kontakt</Dropdown.Item>
        <Dropdown.Item onClick={() => navigate("/Košarica")} href="#/action-3">Košarica</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <h2 id="dropdown-basic">OPG Šincek</h2>

      </div>
    </nav>
  );
}
