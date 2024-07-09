import React, { useEffect, useState } from 'react'
import { loginGoogleAccount } from '../../utils/ApiFunction'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../component/Auth/AuthProvider';
const GoogleLoginSuccess = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const auth = useAuth();
    useEffect(() =>{
      const code = searchParams.get('code');
      const loginGoogleSuccess = async() => {
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
        }
      }
      loginGoogleSuccess();
    },[])
  return (
    <div className='wrapperr'>
        <h1>Loading ...</h1>
    </div>
  )
}

export default GoogleLoginSuccess