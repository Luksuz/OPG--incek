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
            <Row className="d-flex justify-content-between align-items-center fs-2 ">
              <Col md={5}>
                <p className="fs-1 fw-bold  green-shadow">
                Naš obrt "<span style={{color: "#73F28F"}}>Sadnice Šincek</span>", koji smo osnovali 2002. godine, bavi se uzgojem ukrasnog drveća i grmlja
                </p>
              </Col>
              <Col md={5}>
                <p className="fs-2  green-shadow">
                Naših 10 hektara zemlje iskoristili smo za uzgoj bogatog asortimana od oko 300 različitih vrsta i varijeteta biljaka. 
                </p>
              </Col>
            </Row>
          </SideSequence>

          <hr></hr>
          <SideSequence delay={0.7}>
            <Row className="d-flex flex-column justify-content-center align-items-center text-center">
              <Col md={8} className="mb-3">
                <p className="fs-1 fw-bold  green-shadow" style={{ color: "#73F28F" }}>
                  Radimo s ljubavlju
                </p>
              </Col>
              <Row className="d-flex align-items-center">
              <Col md={6}>
              <img src="sadeidrugi.jpeg" className="img-fluid" alt="sade i drugi"/>
              </Col>
              <Col md={6}>
                <p className="fs-2  green-shadow">
                Sa 5 zaposlenih, naš mali tim se posvećuje kultiviranju raznolikog bilja, uključujući listopadno drveće, četinjače i cvatuće grmlje. Posebno smo ponosni na našu selekciju božićnih drvaca, kao što su Nordmannova jela i plavi bor, koje odgajamo s posebnom pažnjom i ljubavlju.
                </p>
              </Col>
              </Row>
            </Row>
          </SideSequence>
          <hr></hr>
          <SideSequence delay={0.9}>
            <Row className="d-flex justify-content-center align-items-center">
              <Col md={4}>
                <p className="fs-2  green-shadow">
                Među proizvodima su istaknuti listopadne i zimzelene vrste, uključujući široku paletu božićnih drvaca.
                </p>
              </Col>
              </Row>

              <Row
                md={7}
                className="d-flex justify-content-around align-items-center text-center"
              >
                <Col md={3}>
                  <img
                    src="3.jpeg"
                    alt="plant"
                    className="img-fluid"
                    width={"100%"}
                  />
                </Col>
                <Col md={8} className="d-flex">
                  <p className="fs-2  green-shadow">
                  Sa više od dva desetljeća iskustva, Vrtne sadnice Šinček postale su pouzdan izvor za kvalitetne sadnice u regiji, održavajući visoke standarde kvalitete i usluge.
                  </p>
                </Col>
              </Row>
          </SideSequence>
        <hr></hr>
          <SideSequence delay={1.3}>
            <Row className="d-flex justify-content-between align-items-center">
              <Col md={5}>
                <p className="fs-1 fw-bold  green-shadow">
                Naručite Sada a mi ćemo vam dostaviti
                </p>
              </Col>
              <Col md={5}>
                <p className="fs-2 green-shadow">
                Naručivanje s naše web stranice je brzo i jednostavno. Izaberite iz našeg bogatog kataloga ukrasnog drveća i bilja, a mi ćemo se pobrinuti da vaša narudžba bude sigurno zapakirana i dostavljena na vaš prag. Sve narudžbe su potvrđene trenutačnim emailom.Uživajte u ljepoti prirode s Vrtnim <span style={{color: "#73F28F"}}>sadnicama Šincek</span>!
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
