import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './dummy.css';

function DummyProperty() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch properties data when component mounts
    axios.get('http://localhost:3000/properties/viewProperties')
      .then(result => {
        console.log(result.data);
        setProperties(result.data);
      })
      .catch(err => {
        console.error('Error fetching properties:', err);
      });
  }, []);

  const addContact = (agentId) => {
    navigate('/contact', { state: { agentId } });
  };

  return (
    <div className="container-lg mt-5 p-4 mb-5 bg-light rounded">
      <h2 className="mb-4">Available Properties</h2>
      <div className="row">
        {properties.length === 0 ? (
          <div className="col-12 text-center">
            <p>No properties available at the moment.</p>
          </div>
        ) : (
          properties.map(property => (
            <div className="col-md-4 mb-4" key={property._id}>
              <div className="card property-card">
                <img
                  src={property.images.split(',')[0]} // Display the first image
                  className="card-img-top"
                  alt={property.address || 'Property Image'}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.address}</h5>
                  <p className="card-text price-text">Price: Rs. {property.price}</p>
                  <p className="card-text description">
                    <strong>Description:</strong> {property.description}
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary" onClick={() => addContact(property._id)}>Contact</button>
                  <button className="btn btn-secondary">Add to Favorite</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default DummyProperty;
