import Navbar from "./components/Navbar";
import PageTransition from "./components/animationComponents/PageTransition";
import SideSequence from "./components/animationComponents/SideSequence";
import Footer from "./components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ONama() {
  return (
    <div>
      <Navbar />
      <PageTransition>
        <div className="container">
          <SideSequence delay={0.5}>
            <Row className="d-flex justify-content-between align-items-center">
              <Col md={5}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tempus augue consequat
                  ante donec arcu in. Ullamcorper ut id at elementum diam
                  facilisis tellus risus. Neque id facilisis duis sit duis. Nunc
                  ac sapien mauris vivamus. Blandit habitasse laoreet sed
                  magnis.
                </p>
              </Col>
              <Col md={5}>
                <p className="fs-1 fw-bold">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </Col>
            </Row>
          </SideSequence>

          <hr></hr>
          <SideSequence delay={0.7}>
            <Row className="d-flex flex-column justify-content-center align-items-center text-center">
              <Col md={8} className="mb-3">
                <p className="fs-1 fw-bold" style={{ color: "#73F28F" }}>
                  Lorem ipsum dolor
                </p>
              </Col>
              <Col md={7}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tempus augue consequat
                  ante donec arcu in. Ullamcorper ut id at elementum diam
                  facilisis tellus risus. Neque id facilisis duis sit duis. Nunc
                  ac sapien mauris vivamus. Blandit habitasse laoreet sed
                  magnis.
                </p>
              </Col>
            </Row>
          </SideSequence>
          <hr></hr>
          <SideSequence delay={0.9}>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={4}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tempus augue consequat
                  ante donec arcu in.
                </p>
              </Col>
              </Row>

              <Row
                md={7}
                className="d-flex justify-content-around align-items-center text-center"
              >
                <Col md={2}>
                  <img
                    src="3.jpeg"
                    alt="plant"
                    className="img-fluid"
                    width={"100%"}
                  />
                </Col>
                <Col md={8} className="d-flex">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Tempus augue
                    consequat ante donec arcu in.
                  </p>
                </Col>
              </Row>
          </SideSequence>
        <hr></hr>
          <SideSequence delay={1.3}>
            <Row className="d-flex justify-content-between align-items-center">
              <Col md={5}>
                <p className="fs-1 fw-bold">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </Col>
              <Col md={5}>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Tempus augue consequat
                  ante donec arcu in. Ullamcorper ut id at elementum diam
                  facilisis tellus risus. Neque id facilisis duis sit duis. Nunc
                  ac sapien mauris vivamus. Blandit habitasse laoreet sed
                  magnis.
                </p>
              </Col>
            </Row>
          </SideSequence>
        </div>
      </PageTransition>
      <Footer />
    </div>
  );
}
