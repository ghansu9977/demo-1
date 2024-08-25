import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dummy.css';

function Favorite() {
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = localStorage.getItem('userId') || sessionStorage.getItem('userId');
                if (!token) {
                    alert('You need to be logged in to view your favorites.');
                    navigate('/login');
                    return;
                }

                const response = await axios.get('http://localhost:3000/properties/viewFavourites', {

                    headers: {
                        'userId': token

                    }
                });

                setFavorites(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching favorites:', error);
                alert('Failed to fetch favorite properties.');
                setLoading(false);
            }
        };

        fetchFavorites();
    }, [navigate]);

    if (loading) {
        return <div className="container mt-5"><p>Loading favorites...</p></div>;
    }

    return (
        <div className="container-lg mt-5 p-4 mb-5 bg-light rounded">
            <h2 className="mb-4">Your Favorite Properties</h2>
            <div className="row">
                {favorites.length === 0 ? (
                    <div className="col-12 text-center">
                        <p>You have no favorite properties.</p>
                    </div>
                ) : (
                    favorites.map(property => (
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
                                    <button className="btn btn-primary" onClick={() => navigate(`/contact`, { state: { agentId: property._id } })}>Contact</button>
                                    <button className="btn btn-secondary" onClick={() => navigate(`/property/${property._id}`)}>View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Favorite;
