import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import PlantCard from "./components/plantCard";
import PageTransition from "./components/animationComponents/PageTransition";
import Footer from "./components/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Ponuda() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    fetch("https://eipf2exv0c.execute-api.us-east-1.amazonaws.com/sincek/images")
      .then((res) => res.json())
      .then((data) => {
        setPlantData(data);
      });
  }, []);


  return (
    <div>
      <Navbar />
      <PageTransition>
      <div
        className="container d-flex justify-content-center align-items-center"
        
      >
        <Row>
          <h1>Ponuda</h1>
          <hr />
          {plantData &&
          plantData.map((plant, index) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
                className="mb-2 d-flex flex-column justify-content-center align-items-center"
                key={index}
              >
                <PlantCard
                  imageUrl={plant.image}
                  name={plant.name}
                  price={plant.price}
                  description={plant.description}
                />
              </Col>
            );
          })}
        </Row>
      </div>
      </PageTransition>
      <Footer />
    </div>
  );
}
