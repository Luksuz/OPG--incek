import Navbar from "./components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import PageTransition from "./components/animationComponents/PageTransition";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Footer from "./components/Footer";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <div className="d-flex flex-column align-items-center">
          <Row className="d-flex justify-content-center align-items-center text-center mx-3">
            <Col md={6}>
              <p className="fs-1 fw-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur Nulla pharetra viverra at
                erat consequat.
              </p>
            </Col>
            <Col md={6} className="">
              <Button className="animated-button" href="/ONama">
                Saznajte više
              </Button>
            </Col>
          </Row>
          <img
            style={{}}
            className="img-fluid"
            src="./opg-house.jpg"
            alt="opg-house"
          ></img>

          <Col lg={8} md={8} sm={10} xs={11} className="mt-3">
            <p className="display-1 text-center">Galerija</p>
            <div className="my__carousel_main">
              <Carousel className="position-relative" fade>
                <div className="position-absolute bottom-0 end-0 z-2">
                  <img
                    src="arrow.png"
                    alt="arrow-left"
                    width={"13%"}
                    style={{ transform: "rotate(180deg)" }}
                  />
                  <img
                    src="arrow.png"
                    alt="arrow-right"
                    width={"13%"}
                    nextIcon
                  />
                </div>
                <Carousel.Item>
                  <img
                    src="./opg-house.jpg"
                    className="img-fluid rounded rounded-5"
                    alt="image5"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./1.jpeg"
                    className="img-fluid rounded rounded-5"
                    alt="image1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./2.jpeg"
                    className="img-fluid rounded rounded-5"
                    alt="image2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./3.jpeg"
                    className="img-fluid rounded rounded-5"
                    alt="image3"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="./4.jpeg"
                    className="img-fluid rounded rounded-5"
                    alt="image4"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
          <Row className="container">
            <Col>
              <p className="fs-1 fw-bold">
                Lorem ipsum dolor sit amet consectetur Nulla pharetra viverra at
                erat consequat
              </p>
            </Col>
          </Row>
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}

export default Home;
