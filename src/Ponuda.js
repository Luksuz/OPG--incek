import React from "react";
import Navbar from "./components/Navbar";
import PlantCard from "./components/plantCard";
import plantData from "./plantsInfo";
import PageTransition from "./components/animationComponents/PageTransition";
import Footer from "./components/Footer";
import Col from "react-bootstrap/Col";

export default function Ponuda() {
  const mappedPlantData = plantData.map((plant, index) => {
    return (
      <Col
        xs={12}
        sm={6}
        md={4}
        lg={4}
        xl={3}
        className="mb-2"
        key={index}
      >
        <PlantCard
          imageUrl={plant.imageUrl}
          name={plant.name}
          price={plant.price}
          description={plant.description}
        />
      </Col>
    );
  });

  return (
    <div>
      <Navbar />
      <PageTransition>
      <div
        className="container d-flex justify-content-center align-items-center"
        
      >
        <div className="row">
          <h1>Ponuda</h1>
          <hr />
          {mappedPlantData}
        </div>
      </div>
      </PageTransition>
      <Footer />
    </div>
  );
}
