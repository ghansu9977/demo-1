import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarCarousel from './Carosal';
import DummyProperty from './dummyProperty';
import Services from './Service';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';

function Header() {
  const [status,setStatus] = useState(false);
  const navigate = useNavigate();

  const handleAddPropertyClick = () => {
    setStatus(true);
    navigate('/AddProperty');
  };

  const handleLoginClick = () => {
    navigate('/register');
  };

  return (<>
    <header className="navbar navbar-expand-lg navbar-light bg-light shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="./logo192.png">
          <h4 className="mb-0">Real<span className="text-primary">State</span></h4>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#top" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Properties</a>
            </li>
          </ul>
          <form className="d-flex ms-auto mb-2 mb-lg-0" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="d-flex ms-2">
            <button className="btn btn-primary me-2" onClick={handleLoginClick} aria-label="Login">Login</button>
            <button className="btn btn-info" onClick={handleAddPropertyClick} aria-label="Add Property">Add Properties</button>
          </div>
        </div>
      </div>
    </header>
    
  </>
  );
}

export default Header;
