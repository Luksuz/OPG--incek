import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import PlantCard from "./components/plantCard";
import plantData from "./plantsInfo";
import anime from "animejs";

export default function Ponuda() {

  useEffect(() => {
    anime({
      targets: '.card',
      translateX: [-1500, 0],
      duration: 1000,
      easing: 'easeOutExpo',
      delay: anime.stagger(500),
    });
  }, [])

  const mappedPlantData = plantData.map((plant, index) => {
    return (
      <div className="col-6 col-lg-4 mb-2">
        <PlantCard
          key={index}
          imageUrl={plant.imageUrl}
          name={plant.name}
          price={plant.price}
          description={plant.description}
        />
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="container d-flex justify-content-center">
        <div className="row">
          <h1>Ponuda</h1>
          <hr />
          {mappedPlantData}
        </div>
      </div>
    </div>
  );
}
