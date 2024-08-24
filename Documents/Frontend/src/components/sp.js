import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./sp.css";

const SP = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/user/signup', {
                email: email,
                name: name,
                password: password
            });
            console.log(response.data); 
            const userId = response.data.data._id; 
            console.log(userId);
            sessionStorage.setItem('userId', userId); 
            toast.success('Sign up successful!');
        } catch (error) {
            console.error('Error signing up:', error);
            toast.error('Sign up failed!');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="form-wrap">
                <div className="tabs">
                    <h3 className="signup-tab">SignUp</h3>
                </div>

                <div className="tabs-content">
                    <div id="signup-tab-content" className="active">
                        <form className="signup-form" onSubmit={handleSignUp}>
                            <input type="email" className="input" id="user_email" autoComplete="off" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" className="input" id="user_name" autoComplete="off" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="password" className="input" id="user_pass" autoComplete="off" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="submit" className="button" value="Sign Up" />
                        </form>
                        <div className="help-text">
                            <p>By signing up, you agree to our</p>
                            <p><a href="#">Terms of service</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SP;
