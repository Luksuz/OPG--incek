

export default function Footer() {
    return (
        <div className="container-fluid bg-secondary position-relative fixed-bottom mt-5" style={{backgroundColor: "#73F28F"}}>
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
            </div>
            </div >
        </div>
    )


}