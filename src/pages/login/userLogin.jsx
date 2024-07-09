import React, { useState, useEffect } from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import './userLogin.scss';
import { loginGoogleAccount, loginUser, validateToken } from '../../utils/ApiFunction';
import { useAuth } from '../../component/Auth/AuthProvider';
import Alert from 'react-bootstrap/Alert';

const UserLogin = () => {
    const [error, setError] = useState("");
    const [login, setLogin] = useState({
      email: "",
      password: "",
    });
  
  
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
      }
      
      setTimeout(() => {
        setError("");
      }, 4000);
    };

    const handleGoogleLogin = async() => {
      window.location.href = 'http://localhost:8081/DiamondShop/oauth2/authorization/google';
    }
    return (
        <div className='wrapperr'>
            <form className='login-form' onSubmit={handleSubmit}>
            {error &&  (<Alert key='danger' variant='danger'>
                            {error}
                    </Alert>)}
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
