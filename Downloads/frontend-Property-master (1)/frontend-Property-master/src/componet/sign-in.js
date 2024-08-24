import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
export default function SignIn() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
            if (!validateEmail(value)) {
                setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
            } else {
                setErrors((prev) => ({ ...prev, email: '' }));
            }
        } else if (name === 'password') {
            setPassword(value);
            if (value.length < 6) {
                setErrors((prev) => ({ ...prev, password: 'Password must be at least 6 characters' }));
            } else {
                setErrors((prev) => ({ ...prev, password: '' }));
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check for any remaining errors
        if (errors.email || errors.password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fix the errors before submitting!',
            });
            return;
        }
        axios.post('http://localhost:3000/user/signin', { name, email, password })
            .then(response => {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Account created successfully!',
                });
                localStorage.setItem("user",JSON.stringify(response.data.user));
                console.log('User created:', response.data);
                navigate("/")
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.response?.data?.msg || 'Something went wrong. Please try again.',
                });
                console.log('Error:', error);
            });
    };

    return (
        <section className="d-flex justify-content-center align-content-center w-100">
            <div className="form-container mt-5">
                <p className="title">Create account</p>
                <p className="sub-title">Let's get started with your 30 days free trial</p>
                <form className="form" onSubmit={handleSubmit}>
                    <input 
                        type="email" 
                        className="input" 
                        placeholder="Email" 
                        name="email"
                        value={email} 
                        onChange={handleChange} 
                    />
                    {errors.email && <p className="m-0 text-danger error-text">{errors.email}</p>}
                    
                    <input 
                        type="password" 
                        className="input" 
                        placeholder="Password" 
                        name="password"
                        value={password} 
                        onChange={handleChange} 
                    />
                    {errors.password && <p className="m-0 text-danger error-text">{errors.password}</p>}
                    
                    <button className="form-btn">Login account</button>
                </form>
                <p className="sign-up-label">
                    Do not have account<span className="sign-up-link"><Link to="/sign-up">
                    Sign up</Link> </span>
                </p>
            </div>
        </section>
    );
}
