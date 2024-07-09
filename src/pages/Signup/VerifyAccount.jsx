import React, { useEffect, useState } from 'react'
import { Link } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { verifyAccount } from '../../utils/ApiFunction'

const VerifyAccount = () => {
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false)

    
    useEffect(() => {
        const VerifyAccount = async () => {
          const code = searchParams.get('code');
          console.log("Verification code:", code); // Debugging line
          if (code) {
            try {
              const response = await verifyAccount(code);
              if (response && response.status === 200) {
                setSuccess(true);
              }
            } catch (error) {
              console.error("Verification failed:", error); // Log any errors
            }
          }
        setLoading(false);

        };
    
        VerifyAccount();
      }, [searchParams]);

      return (
        <div className="wrapperrrrr">
          {loading ? (
            <p>Loading...</p>
          ) : success ? (
            <>
              <h1>Verify Account Successfully</h1>
              <div>
                <Link to="/login">Back to Login</Link>
              </div>
              <div>
                <Link to="/">Back to Home page</Link>
              </div>
            </>
          ) : (
            <>
              <h1>Verify Account Fail</h1>
              <div>
                <Link to="/">Back to Home page</Link>
              </div>
            </>
          )}
        </div>
      );
    }

export default VerifyAccount