import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Header from './Header';

function AddProperty() {
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const token = sessionStorage.getItem('token');
    let userId = localStorage.getItem('userId'); // Assuming you store user ID in sessionStorage

    try {
      const response = await axios.post(
        'http://localhost:3000/properties/add-property',
        {
          address,
          price,
          description,
          images, // Keep images as a single string
          contactInfo,
          user: userId // Include the user ID
        }
      ).then(result=>{
        Swal.fire({
          title: 'Success!',
          text: 'Property added successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setAddress('');
        setPrice('');
        setDescription('');
        setImages('');
        setContactInfo('');

      }).catch(err=>{
        Swal.fire({
          title: 'Error!',
          text: 'Failed to add property. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
      // Reset form fields after successful submission
    } catch (error) {

      console.error('There was an error adding the property!', error);
    }
  };

  return (
    <>
      <Header/>
      <div className="container border mb-3 p-4" style={{marginTop:'100px'}}>
        <h2>Add Property</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="images" className="form-label">Images (comma-separated URLs)</label>
            <input
              type="text"
              className="form-control"
              id="images"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contactInfo" className="form-label">Contact Info</label>
            <input
              type="text"
              className="form-control"
              id="contactInfo"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Add Property</button>
        </form>
      </div>
    </>
  );
}

export default AddProperty;
