import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Paper, List, ListItem, ListItemText, Divider, Alert, Grid, Avatar, Container, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createPayment, getAllServices, getCustomerById, placeOrderDiamond } from '../../utils/ApiFunction';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import paypal from '../Service/img/PayPal_Logo.jpg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit'

const Checkout = () => {
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({
    selectedDate: "",
    serviceSelected: [],
    paymentMethod: ""
  });
  const [open, setOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [services, setServices] = useState([]);
  const [error, setError] = useState('');
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

  const getMoneyByService = (name) => {
    const serviceSelect = services.filter(service => service.name === name);
    return serviceSelect.length > 0 ? serviceSelect[0].money : 0;
  };

  useEffect(() => {
    const getCustomer = async () => {
      const data = await getCustomerById();
      if (data) {
        setUser({
          fullname: `${data.first_name} ${data.last_name}`,
          email: data.email,
          phone_number: data.phone_number,
          location: data.location
        });
      }
    };  

    const Services = async () => {
      try {
        const response = await getAllServices();
        if (response.status === 200) {
          setServices(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    Services();
    const date = localStorage.getItem("selectedDate");
    const serviceSelect = localStorage.getItem("serviceSelected");
    // const paymentMethod = localStorage.getItem("paymentMethod");
    const serviceSelected = serviceSelect.split(",");

    setCart({
      selectedDate: date,
      serviceSelected: serviceSelected,
      paymentMethod: paymentMethod
    });
    getCustomer();
  }, [paymentMethod]);

  useEffect(() => {
    const calculateTotal = () => {
      return cart.serviceSelected.reduce((total, service) => {
        return total + getMoneyByService(service);
      }, 0);
    };

    setTotal(calculateTotal());
  }, [cart.serviceSelected, services]);

  const handleBookingClick = async () => {
    console.log(paymentMethod)
    try {
      const response = await placeOrderDiamond(cart);
      if (response.status === 200) {
        localStorage.removeItem('serviceSelected');
        // localStorage.removeItem('paymentMethod');
        localStorage.removeItem('selectedDate');
        setOpen(true);
      } else {
        setError("Sorry, some problem happen with your order please try again!");
      }
    } catch (error) {
      setError("Sorry, some problem happen with your order please try again!");
    }
    setTimeout(() => {
      setError("");
    }, 6000);
  };

  const handlePayClick = async () => {
    console.log(paymentMethod)

    try {
      const response = await createPayment(total);
      if (response.status === 200) {
        window.location.href = response.data;
      } else {
        setError("Sorry, some problem happen with your order please try again!");
      }
    } catch (error) {
      setError("Sorry, some problem happen with your order please try again!");
    }
    setTimeout(() => {
      setError("");
    }, 6000);
  };

  const handleClickDialog = () => {
    setOpen(false);
    navigate("/");
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    // localStorage.setItem("paymentMethod", event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ padding: 4, mt: '100px' }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, backgroundColor: 'white', color: 'black' }}>
        <ToastContainer />
        <Box className="header-checkout" sx={{ textAlign: 'center', marginBottom: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#56758d' }}>RECEIPT</Typography>
          <Typography variant="subtitle1" sx={{ color: 'black' }}>Please check your receipt</Typography>
        </Box>

        {error && (<Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>)}

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar sx={{ marginRight: 2 }}>
                <AccountCircleIcon />
              </Avatar>
              <Box>
                <Typography variant="h6" sx={{ color: '#56758d' }}>Customer Information</Typography>
                <Button
                  onClick={e => navigate('/account')}
                  variant="outlined"
                  size="small"
                  startIcon={<EditIcon />}
                  sx={{ fontSize: '11px', marginTop: '4px', borderColor: '#56758d', color: '#56758d' }}
                >
                  Edit
                </Button>
              </Box>
            </Box>
            <Typography>Name: {user.fullname}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Phone Number: {user.phone_number}</Typography>
            <Typography>Address: {user.location}</Typography>
            <Typography>Preferred Appraisal Date: {cart.selectedDate}</Typography>
            {/* <Link to={"/account"}>Change your information</Link> */}
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h6" sx={{ color: '#56758d' }}>Services</Typography>
              {cart.serviceSelected.length > 0 ? (
                <List>
                  {cart.serviceSelected.map((service, index) => (
                    <ListItem key={index} divider sx={{ borderBottom: '1px solid #444' }}>
                      <ListItemText primary={service} />
                      <Typography variant="body2">${getMoneyByService(service)}</Typography>
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography>No services selected.</Typography>
              )}
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h6" sx={{ color: '#56758d' }}>Payment Method</Typography>
          {/* <Typography>
            {cart.paymentMethod === 'PAYPAL' ? (
              <img src={paypal} alt="PayPal Logo" style={{ width: 70, height: 20 }} />
            ) : (
              <strong>CASH</strong>
            )}
          </Typography> */}
          
            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-labelledby="payment-method-radio-group-label"
                name="paymentMethod"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
              >
                <FormControlLabel
                  value="CASH"
                  control={<Radio />}
                  label="Cash"
                />
                <FormControlLabel
                  value="PAYPAL"
                  control={<Radio />}
                  label={
                    <Box display="flex" alignItems="center">
                      <img
                        src={paypal}
                        alt="PayPal"
                        height="20"
                        style={{ marginRight: 5 }}
                      />
                    </Box>
                  }
                />
              </RadioGroup>
            </FormControl>
        </Box>

        <Divider style={{ margin: '20px 0', backgroundColor: '#444' }} />

        <Box mt={4}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>Total: ${total.toFixed(2)}</Typography>
        </Box>

        <Box mt={4} display="flex" justifyContent="center">
          {cart.paymentMethod === "CASH" ? (
            <Button onClick={handleBookingClick} variant="contained" >
              BOOKING NOW
            </Button>
          ) : (
            <Button onClick={handlePayClick} variant="contained">
              PAY NOW
            </Button>
          )}
          {/* <Button variant='contained' onClick={paymentMethod === 'CASH' ? handleBookingClick : handlePayClick}>
              Booking Now
          </Button> */}
        </Box>
      </Paper>

      <Dialog open={open} onClose={handleClickDialog}>
        <DialogTitle>Booking successfully</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Booking created successfully!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Checkout;
