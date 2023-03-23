import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Mask Group 3/Mask Group 3.png';
import img2 from '../assets/Mask Group 4/Mask Group 4.png';
import CovidImg from '../assets/covid/bb833j4o.png'; 
import NavbarHome from "../components/NavbarHome.jsx"
import { FaSearch } from 'react-icons/fa';
 
function Home() {
  return (
    <div className='main'>
    <NavbarHome/>
    <div className='carousel-top' />
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='carousel-bottom' />
    <div className='middle'>
    <div className='search'>
        <input />
        <FaSearch className='fa' />
    </div>
    <div className="text">
      <h2>To robustly drive transformation in the ICT Sector, strengthening ownership and Skills development in South Africa</h2>
    </div>
    <div className='covidimage'>
      <img src={CovidImg} alt="covid" />
    </div>
    </div>

    <div className='main-3'></div>
    <div className='box-1'>
      <h3>WHO WE ARE</h3>
      <p>The B-BBEE ICT Sector Council was appointed by Minister on 24 September 2015. Their first priority was to align the B-BBEE ICT Sector Code with the Code of Good Practice 2013, whose primary objective was to strengthen transformation requirements in so far as natural black people are concerned.</p>
    </div>
    <div className='box-2'>
      <h3>WHAT WE DO</h3>
      <p>The main responsibility of Council is to develop and monitor implementation of the sector code including but not limited to be the custodian of the B-BBEE ICT Sector Code of South Africa. From September 2017, the Council will require support, financial and other resources to run a fully-fledged office</p>
    </div>
    <div className='box-3'>
      <h3>EMPOWERMENT</h3>
      <p>Under the previous apartheid system, a plethora of policies and legislation was promulgated with the sole objective of denying black people, including black women, access to and control of South Africa's economic productive resources and skills based purely on race and gender considerations.</p>
    </div>
    </div>
  );
}

export default Home;