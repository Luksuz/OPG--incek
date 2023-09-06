

export default function PlantCard({imageUrl, name, price, description}) {
  return (
    <div class="card shadow-lg" style={{width: "18rem"}}>
      <img src={imageUrl} class="card-img-top img-fluid" alt={name}></img>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <hr />
        <p class="card-text">
          {description}
        </p>
        <hr />
        <p class="card-text">{price}</p>
      </div>
    </div>
  );
}
