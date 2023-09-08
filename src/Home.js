import Navbar from "./components/Navbar";
import Carousel from "react-bootstrap/Carousel";
import { motion, useScroll } from "framer-motion";

function Home() {

  return (
    <>
      <Navbar />
      <motion.div
        className="d-flex flex-column align-items-center"
        initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <img style={{}} className="img-fluid" src="./opg-house.jpg"></img>

        <div className="col-10 col-lg-6 mt-3">
          <p className="display-1">Galerija</p>
          <Carousel fade>
            <Carousel.Item>
              <img src="./1.jpeg" className="img-fluid rounded rounded-5" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="./1.jpeg" className="img-fluid rounded rounded-5" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="./2.jpeg" className="img-fluid rounded rounded-5" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="./3.jpeg" className="img-fluid rounded rounded-5" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="./4.jpeg" className="img-fluid rounded rounded-5" />
            </Carousel.Item>
          </Carousel>
        </div>
      </motion.div>
    </>
  );
}

export default Home;
