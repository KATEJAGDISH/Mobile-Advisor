// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data); // handle success
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div>
            <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Login
            </Button>
        </div>
    );
};

export default Login;
