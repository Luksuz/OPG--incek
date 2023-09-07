import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import PlantCard from "./components/plantCard";
import plantData from "./plantsInfo";
import { motion } from "framer-motion";

export default function Ponuda() {
  const mappedPlantData = plantData.map((plant, index) => {
    return (
      <div
        className="col-6 col-lg-4 mb-2"
        initial={{ width: 0 }}
        animate={{ width: "100%", transition: { duration: 0.3 } }}
        exit={{ x: window.innerWidth }}
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
    <motion.div>
      <Navbar />
      <div
        className="container d-flex justify-content-center"
        initial={{ width: 0 }}
        animate={{ width: "100%", transition: { duration: 0.3 } }}
        exit={{ x: window.innerWidth }}
      >
        <div className="row">
          <h1>Ponuda</h1>
          <hr />
          {mappedPlantData}
        </div>
      </div>
    </motion.div>
  );
}
