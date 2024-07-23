import React, { useState, useEffect } from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './userLogin.scss';
import { loginGoogleAccount, loginUser, validateToken } from '../../utils/ApiFunction';
import { useAuth } from '../../component/Auth/AuthProvider';
import Alert from 'react-bootstrap/Alert';
import { Box, CircularProgress, Typography } from '@mui/material';

const UserLogin = () => {
    const [error, setError] = useState("");
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
  
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();
    const redirectUrl = location.state?.path || "/";
    const errorLogin = location.state?.error;
    
    useEffect(() => {
      const checkToken = async () => {
        const localStorageToken = localStorage.getItem("token");
        if (localStorageToken) {
          const result = await validateToken();
          if (result !== null && result.status === 200) {
            navigate("/");
          }
        }
      };
      if(errorLogin !== null || errorLogin.length ===0){
        setError(errorLogin);
      }
      checkToken();
    }, []);
  
    const handleInputChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true)
      try {
        const result = await loginUser(login);
  
      if (result.status === 200) {
        auth.handleLogin(result.data);
        navigate(redirectUrl, { replace: true });
      } else {
        setError(
          "Invalid email or password. Please try again."
        );
      }
      } catch (error) {
        setError(
          "Invalid email or password. Please try again."
        );
      }finally{
        setLoading(false)
      }
      
      setTimeout(() => {
        setError("");
      }, 4000);
    };

    const handleGoogleLogin = async() => {
      // window.location.href = 'http://localhost:8081/DiamondShop/oauth2/authorization/google';
      window.location.href = 'https://diamond-shop-0fba6488d8a2.herokuapp.com/DiamondShop/oauth2/authorization/google';
    }
    if (loading) {
      return (
        <Box mt={20} mb={38} textAlign={'center'}>
           <CircularProgress size={50} color="primary" />
                <Box mt={2}>
                  <h3>LOADING. . .</h3>
                </Box>
        </Box>
      );
    }
    return (
        <div className='wrapperr'>
            <form className='login-form' onSubmit={handleSubmit}>
            {error &&  (<Alert key='danger' variant='danger'>
                            {error}
                    </Alert>)}
                    <Typography sx={{mb: 4}} variant='h4'>Login</Typography>
                <div className='form-group' >
                    <label htmlFor='email' className='text-start'>Email</label>
                    <input 
                        className='form-control'
                        type='email' 
                        id='email' 
                        name='email' 
                        value={login.email}
                        onChange={handleInputChange}
                        required 
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password' className='text-start'>Password</label>
                    <input 
                        className='form-control'
                        type='password' 
                        id='password' 
                        name='password'
                        value={login.password}
                        onChange={handleInputChange}
                        minLength={5}
                        required 
                    />
                </div>             
                <button type='submit' className='login-button'>
                    Login
                </button>
                <div>
                <a href='/forgot-password' className='' style={{ textDecoration: 'none' }}>Forgot Password ?</a>
                </div>
            </form>
            
            <div className='alternative-login'>
                <p>Or login with</p>
                <button className='google-login' onClick={handleGoogleLogin}>
                    <GoogleOutlined /> Google
                </button>
            </div>
            <div>
                <a href='/signup' className='' style={{ textDecoration: 'none' }}>Create new account</a>
                </div>
        </div>
    );
};

export default UserLogin;
