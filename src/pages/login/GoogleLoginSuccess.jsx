import React, { useEffect, useState } from 'react'
import { loginGoogleAccount } from '../../utils/ApiFunction'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../component/Auth/AuthProvider';
import { Box, CircularProgress } from '@mui/material';
const GoogleLoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
    useEffect(() =>{
      const code = searchParams.get('code');
      const loginGoogleSuccess = async() => {
        setLoading(true)
        try {
          const response = await loginGoogleAccount(code);
        if(response.status === 200){
          auth.handleLogin(response.data);
          navigate("/");
        }else{
          navigate("/login", { state: { error: 'Login fail with google account' } });
        }
        } catch (error) {
          navigate("/login", { state: { error: 'Login fail with google account' } });
        }finally{
          setLoading(false)
        }
      }
      loginGoogleSuccess();
    },[])
  return (
    <Box >
        {loading && (    
            <Box mt={20} mb={38} textAlign={'center'}>
               <CircularProgress size={50} color="primary" />
                    <Box mt={2}>
                      <h3>LOADING. . .</h3>
                    </Box>
            </Box>        
        )}
    </Box>
  )
}

export default GoogleLoginSuccess