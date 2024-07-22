import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import { verifyAccount } from '../../utils/ApiFunction';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
      p={3}
    >
      {loading ? (
        <CircularProgress />
      ) : success ? (
        <Box textAlign="center">
          <CheckCircleOutlineIcon color="success" sx={{ fontSize: 80 }} />
          <Typography variant="h4" gutterBottom>
            Verify Account Successfully
          </Typography>
          <Box display={'flex'} justifyContent={'center'} gap={'10px'}>

            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/login"
              sx={{ mt: 2 }}
            >
              Back to Login
            </Button>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/"
              sx={{ mt: 2 }}
            >
              Back to Home Page
            </Button>
          </Box>

        </Box>
      ) : (
        <Box textAlign="center">
          <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
          <Typography variant="h4" gutterBottom>
            Verify Account Fail
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            component={RouterLink}
            to="/"
            sx={{ mt: 2 }}
          >
            Back to Home Page
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default VerifyAccount;
