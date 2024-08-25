import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dummy.css';

function DummyProperty() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch properties data when component mounts
    axios.get('http://localhost:3000/properties/viewProperties')
      .then(result => {
        setProperties(result.data);
      })
      .catch(err => {
        console.error('Error fetching properties:', err);
      });
  }, []);

  const addContact = (agentId) => {
    navigate('/contact', { state: { agentId } });
  };

  const markAsFavorite = async (propertyId) => {
    try {
      const token = localStorage.getItem('userId') || sessionStorage.getItem('userId');
      if (!token) {
        alert('You need to be logged in to mark a property as favorite.');
        navigate('/login'); // Optionally navigate to login if not authenticated
        return;
      }

      const response = await axios.post(
        `http://localhost:3000/properties/favorite/${propertyId}`,
        {},
        {
          headers: {
            'userId': token 
          }
        }
      );
      
      if (response.status === 200) {
        alert('Property added to favorites!');
      }
    } catch (error) {
      console.error('Error marking property as favorite:', error);
      alert('Failed to mark property as favorite. Please try again.');
    }
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
              <div className="card shadow-sm border-light">
                <img
                  src={property.images.split(',')[0]} // Display the first image
                  className="card-img-top"
                  alt={property.address || 'Property Image'}
                  style={{ objectFit: 'cover', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.address}</h5>
                  <p className="card-text price-text">Price: Rs. {property.price}</p>
                  <p className="card-text">
                    <strong>Description:</strong> {property.description.length > 200
                      ? `${property.description.slice(0, 200)}...`
                      : property.description
                    }
                  </p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-primary" onClick={() => addContact(property._id)}>Contact</button>
                  <button className="btn btn-secondary" onClick={() => markAsFavorite(property._id)}>Add to Favorite</button>
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
