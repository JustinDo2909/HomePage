import React from 'react'
import { Box, Button, Link, Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import error from '../Payment/error3.jpg'
const PaymentFail = () => {
  const navigate = useNavigate();
  const handelHomePage = () => {
    navigate("/");
  }

  const handleService = () => {
    navigate("/Service/valuation/valuation-form");
  }

  return (
    <Box className="wrapperrrrr" >
      <Paper>

        <Typography sx={{ pt: '30px', pl: '45%' }}><img src={error} style={{ width: '20%' }} /></Typography>
        <Typography variant='h4' sx={{ fontWeight: 600, textAlign: 'center ', pt: '30px' }}>Payment Failed!</Typography>
        <Typography pb={'60px'} pt={'20px'} pl={'16%'} textAlign={'center'} width={'80%'}>Hey there. We tried to charge your card but,
          something went wrong. Please update your
          payment method below to continue
        </Typography>
        <Box display={'flex'} gap={5} justifyContent={'center'} pb={7}>
       <Typography><Link href="/">Back to home page</Link></Typography> 
       <Typography><Link href="/Service/ServiceList">Go to ServiceList</Link></Typography> 
        </Box>
      </Paper>
    </Box>
  )
}

export default PaymentFail