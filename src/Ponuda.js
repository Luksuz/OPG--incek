import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import PlantCard from "./components/plantCard";
import PageTransition from "./components/animationComponents/PageTransition";
import Footer from "./components/Footer";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import BlankCard from "./components/blankCard";
import { getImages } from "./APIUtils/imageAPIs";

export default function Ponuda() {
  const [plantData, setPlantData] = useState([]);
  const [token, setToken] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("sincek_token");
    setToken(token);
    // async function 
    getImages().then((data) => {
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
          plantData.map((plant) => {
            return (
              <Col
                xs={12}
                sm={6}
                md={4}
                lg={4}
                xl={3}
                className="mb-2 d-flex flex-column justify-content-center align-items-center"
                key={plant.id}
              >
                <PlantCard
                  imageId={plant.id}
                  imageUrl={plant.image}
                  name={plant.name}
                  price={plant.price}
                  description={plant.description}
                  token={token}
                />
              </Col>
            );
          })}
          {token &&
          <Col
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={3}
          className="mb-2 d-flex flex-column justify-content-center align-items-center"
          >
          <BlankCard />
          </Col>}
        </Row>
      </div>
      </PageTransition>
      <Footer />
    </div>
  );
}
