import React, {useState} from "react";

export default function PlantCard({imageUrl, name, price, description}) {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
    <div className="card shadow-lg" style={{width: "18rem"}} onClick={handleOpen}>
      <img src={imageUrl} className="card-img-top img-fluid" alt={name}></img>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text">
          {description}
        </p>
        <hr />
        <p className="card-text">{price}</p>
      </div>
    </div>


{/* Modal */}
{show &&
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{name + " - Narudžba"}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {description}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
}
</>
  );
}
