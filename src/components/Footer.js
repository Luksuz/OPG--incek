import { useNavigate } from "react-router-dom";

export default function Footer() {
    const token = localStorage.getItem("sincek_token");
    const navigate = useNavigate();
    
    function handleAdminClick() {
        navigate("/AdminLogin");
    }

    function handleLogoutClick() {
        localStorage.removeItem("sincek_token");
        alert("Uspješno ste se odjavili!");
    }

    return (
        <div className="container-fluid bg-secondary position-relative bottom-0 fixed-bottom mt-5" style={{backgroundColor: "#73F28F"}}>
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-4 text-center">
            <h1 className="">OPG Šincek</h1>
            <p>Copyright © OPG ŠIncek 2023  </p>      
            </div>
            <div className="col-4 text-center">
            <p>Contact</p>
            <p>opg@gmail.com</p>
            <p>tel: +385 95 767 4099</p>
            </div>
            <div className="col-4 d-flex text-center flex-column">
                <p>Početna</p>
                <p>O nama</p>
                <p>Kontakt</p>
                <p>Ponuda</p>
                <p>Košarica</p>
                <p href="/AdminLogin" onClick={handleAdminClick}>Admin login</p>
                {token && <p onClick={handleLogoutClick}>Logout</p>}
            </div>
            </div >
        </div>
    )


}