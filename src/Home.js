import Navbar from "./components/Navbar";
import Carousel from "react-bootstrap/Carousel";


function Home() {
  return (
    <>
    <Navbar />
    <div className="d-flex flex-column align-items-center">
      <img style={{}} className="img-fluid" src="./opg-house.jpg"></img>

      <div className="col-10 col-lg-6 mt-3">
        <p className="display-1">Galerija</p>
        <Carousel fade>
          <Carousel.Item>
            <img
              src="./1.jpeg"
              className="img-fluid rounded rounded-5"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./1.jpeg"
              className="img-fluid rounded rounded-5"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./2.jpeg"
              className="img-fluid rounded rounded-5"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./3.jpeg"
              className="img-fluid rounded rounded-5"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="./4.jpeg"
              className="img-fluid rounded rounded-5"
            />
            
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    </>
  );
}

export default Home;
