import Navbar from "./components/Navbar";
import PageTransition from "./components/animationComponents/PageTransition";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import Footer from "./components/Footer";
import "./styles.css";
import "./home.css";

function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
        <div className="d-flex flex-column aalign-items-center position-relative">
        <img
            style={{}}
            className="img-fluid w-100"
            src="./kucica.jpeg"
            alt="opg-house"
          />
          <Row className="d-flex justify-content-center align-items-center text-center mx-3">
            <Col md={6}>
              <p style={{fontFamily: "fantasy"}} className="hero-section">
                {" "}
                OPG Šincek: Gdje sunce susreće zemlju, a plodovi prirode donose osvježenje ljeta.
              </p>
            </Col>
            <Col md={6} className="">
              <Button className="mt-3 green-button" href="/ONama">
                Saznajte više
              </Button>
            </Col>
          </Row>
        

          {/*<Col lg={8} md={8} sm={10} xs={11} className="mt-3">
            <p className="display-1 text-center">Galerija</p>
            <div className="my__carousel_main">
              <Carousel className="position-relative" fade>
                
                <Carousel.Item>
                  <img
                    src="sadnice.jpeg"
                    className="img-fluid rounded rounded-5"
                    alt="image5"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="sadeidrugi.jpeg"
                    className="img-fluid rounded rounded-5"
                    alt="image1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="cempres.jpeg"
                    className="img-fluid rounded rounded-5"
                    alt="image2"
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
          </Row>*/}
        </div>
      </PageTransition>
      <Footer />
    </>
  );
}

export default Home;
