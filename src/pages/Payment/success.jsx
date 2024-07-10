import React, { useEffect, useState } from 'react'
import successIcon from './successsss.jpg'
import { Box, Button, Link, Paper, Typography } from '@mui/material'
import { processPayment, getCustomerById } from '../../utils/ApiFunction';
import { useNavigate, useSearchParams } from 'react-router-dom'
import PayPall from '../Service/img/PayPal_Logo.jpg'
const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({
    selectedDate: "",
    serviceSelected: [],
    paymentMethod: ""
  });
  const [request , setRequest] = useState({});
  useEffect(() => {
    const date = localStorage.getItem("selectedDate");
    const serviceSelect = localStorage.getItem("serviceSelected");
    const paymentMethod = localStorage.getItem("paymentMethod");
    const serviceSelected = serviceSelect ? serviceSelect.split(",") : [];
    const getCustomer = async () => {
      const data = await getCustomerById();
      if (data !== null) {
        setUser({
          fullname: `${data.first_name} ${data.last_name}`,
          email: data.email,
          phone_number: data.phone_number,
          location: data.location
        });
      }
      
    };
    getCustomer();
    setCart({
      selectedDate: date,
      serviceSelected: serviceSelected,
      paymentMethod: paymentMethod
    });
  }, []); // Only run once, on mount

  useEffect(() => {
    const executePayment = async () => {
      const paymentId = searchParams.get('paymentId');
      const PayerID = searchParams.get('PayerID');

      if (cart.selectedDate && cart.serviceSelected.length && cart.paymentMethod) { // Check if cart is populated
        const response = await processPayment(paymentId, PayerID, cart);

        if (response && response.status === 200) {
          setRequest(response.data)
          localStorage.removeItem('serviceSelected');
          localStorage.removeItem('paymentMethod');
          localStorage.removeItem('selectedDate');
        }
      }
    };

    executePayment();
  }, [cart]); // Run when cart is updated



  return (

    <Box style={{ marginBottom: '12%' }} className='wrapperrr'>
      <Paper className='wrapper-sucess' sx={{ ml: '30%', width: '40%' }}>

        <Typography sx={{ fontSize: '30px', color: '#3a9e6d', mb: '30px' }}>Payment Successfull!</Typography>
        <img style={{ width: '10%' }} src={successIcon} />
        <Box display={'flex'} sx={{ justifyContent: 'space-between', pl: 7, pr: 7 }} >
          <Box textAlign={'start'}>
            <Typography sx={{pb:'7px', color:'gray'}}>Payment type</Typography>
            <Typography sx={{pb:'7px', color:'gray'}}>Bank</Typography>
            <Typography sx={{pb:'7px', color:'gray'}}>Moblie</Typography>
            <Typography sx={{pb:'7px', color:'gray'}}>Email</Typography>
            <Typography sx={{pb:'7px', color:'gray'}}>FullName</Typography>
            <br />
            <Typography sx={{fontSize:'19px' ,fontWeight:600,color:'gray'}}>Amount Paid</Typography>
            <br />

          </Box>
          <Box textAlign={'end'}>
            <Typography sx={{pb:'7px' ,color :'#504747'}}>Net Banking </Typography>
            <Typography sx={{pb:'7px',color :'#504747'}}><img src={PayPall} style={{width: '60px'}}></img></Typography>
            <Typography sx={{pb:'7px',color :'#504747'}}>{user.fullname}</Typography>
            <Typography sx={{pb:'7px',color :'#504747'}}>{user.email}</Typography>
            <Typography sx={{pb:'7px',color :'#504747'}}>{user.fullname}</Typography>
            <br />
            <Typography sx={{fontWeight:600}}>{request.payment_total} $ </Typography>
            <br />

          </Box>
        </Box>
        <Box display={'flex'} gap={'10px'} justifyContent={'center'} mt={8} pb={5}>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 1bc8758c56abb51553341f0af47389da1834498e
=======
>>>>>>> 001d9d940db5f8a0905e711d55deec7ddde57a5a
          <Button onClick={e => navigate('/')} variant='contained'>CLOSE</Button>
        </Box>
      </Paper>
    </Box>


  )
}
export default Success