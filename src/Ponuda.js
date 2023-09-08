import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import PlantCard from "./components/plantCard";
import plantData from "./plantsInfo";
import { motion } from "framer-motion";

export default function Ponuda() {
  const mappedPlantData = plantData.map((plant, index) => {
    return (
      <motion.div
        className="col-6 col-lg-4 mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 1.5 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        key={index}
      >
        <PlantCard
          imageUrl={plant.imageUrl}
          name={plant.name}
          price={plant.price}
          description={plant.description}
        />
      </motion.div>
    );
  });

  return (
    <div>
      <Navbar />
      <motion.div
        className="container d-flex justify-content-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.5, delay: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <div className="row">
          <h1>Ponuda</h1>
          <hr />
          {mappedPlantData}
        </div>
      </motion.div>
    </div>
  );
}
