import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import propertyData from './Property.json'; // Import the JSON file
import "./dummy.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function DummyProperty() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Set properties data when component mounts
    axios.get("http://localhost:3000/properties/viewProperties").then(result=>{
      console.log(result.data);
      setProperties(result.data)
    }).catch(err=>{
      console.log(err);
    });
    // setProperties(propertyData);
  }, []);
  const addContact=(agentId)=>{
    alert(agentId)
    navigate('/contact',{state:agentId})
  }

  return (
    <div className="container-lg mt-5 p-4 mb-5 bg-white rounded">
      <h2>Property</h2>
      <div className="row">
        {properties?.map((property) => (
          <div className="col-md-4" key={property._id}>
            <div className="card mb-4" id="property-box">
              
              <img
                src={property.images} // Assuming the first image is used as the thumbnail
                className="card-img-top"
                alt="no image found"
                style={{width:'400px',height:'300px',padding:'10px'}}
              />
              <div className="card-body">
                <h5 className="card-title"><strong>Address:</strong>   {property.address}</h5>
                <p className="card-text price-text">Price: Rs. {property.price}</p>
                <p className=""><span>Descrition:</span> {property.description.slice(0,200)}</p>
                <button className="btn btn-primary m-2" onClick={()=>addContact(property._id)}>Contact</button>
                <button className="btn btn-secondary m-2">Add to favorite</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DummyProperty;
