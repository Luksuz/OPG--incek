import React from "react";
import Navbar from "./components/Navbar";
import PlantCard from "./components/plantCard";
import plantData from "./plantsInfo";
import PageTransition from "./components/animationComponents/PageTransition";

export default function Ponuda() {
  const mappedPlantData = plantData.map((plant, index) => {
    return (
      <div
        className="col-6 col-lg-4 mb-2"
        key={index}
      >
        <PlantCard
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
      <PageTransition>
      <div
        className="container d-flex justify-content-center"
        
      >
        <div className="row">
          <h1>Ponuda</h1>
          <hr />
          {mappedPlantData}
        </div>
      </div>
      </PageTransition>
    </div>
  );
}
