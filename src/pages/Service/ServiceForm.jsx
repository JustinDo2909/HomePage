import React, { useState, useEffect } from "react";
import { Form } from "antd";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllServices, getCustomerById } from "../../utils/ApiFunction";
import EditIcon from '@mui/icons-material/Edit'
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

// Style constants
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const ServiceForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [serviceSelected, setServiceSelected] = useState([]);
  // const [payMentSelected, setPayMentSelected] = useState("");
  const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Lấy danh sách dịch vụ
        const serviceResponse = await getAllServices();
        if (serviceResponse.status === 200) {
          setServices(serviceResponse.data);
        }
  
        // // Sau khi lấy danh sách dịch vụ xong, lấy thông tin khách hàng
        const customerData = await getCustomerById();
        if (customerData !== null) {
          setUser({
            id: customerData.id,
            email: customerData.email,
            first_name: customerData.first_name,
            last_name: customerData.last_name,
            phone_number: customerData.phone_number,
            location: customerData.location,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, []);

  const onFinish = () => {
    const currentDate = new Date();
    const selected = new Date(selectedDate);
    // Clear time portion for comparison(Make sure user can choose a current date)
    currentDate.setHours(0, 0, 0, 0);
    selected.setHours(0, 0, 0, 0);
    // Check if the selected date is in the past
    if (selected < currentDate) {
      setErrorMessage("Selected date cannot be in the past.");
      return;
    }
    const serviceSelect = serviceSelected.reduce((value, service, index) => {
      return index === 0 ? service : value + "," + service;
    }, "");
    localStorage.setItem("selectedDate", selectedDate);
    localStorage.setItem("serviceSelected", serviceSelect);
    // localStorage.setItem("paymentMethod", payMentSelected);

    navigate("/Payment-checkout");
  };

  const handleDateChange = (e) => {
    const chosenDate = new Date(e.target.value);
    const today = new Date();
    // Set hours to 0 to compare only the date part
    today.setHours(0, 0, 0, 0);

    if (chosenDate >= today) {
      setSelectedDate(e.target.value);
    } else {
      alert('Please select a date that is today or in the future.');
    }
  };

  const handleServiceChange = (event) => {
    const { value } = event.target;
    setServiceSelected(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box className="wrapperrr" mt = {9}>
      <Typography variant="h4">Send Form For Us</Typography>
      <Box display={'flex'} justifyContent={'center'} gap={2} mt = {2}>

        <Typography color={'gray'}>*Your Information Must Be Same With Your Account

        </Typography>
        <Button
          onClick={e => navigate('/account')}
          variant="outlined"
          size="small"
          startIcon={<EditIcon />}
          sx={{ fontSize: '11px', borderColor: '#56758d', color: '#56758d' }}
        >
          Edit
        </Button>
      </Box>

      <Form
        {...formItemLayout}
        className="form-valuation"
        onFinish={onFinish}
        style={{
          maxWidth: 500,
          marginLeft: "34%",
        }}
      >
        <Box
          sx={{
            bgcolor: "background.paper",
            p: 2,
            borderRadius: 1,
            boxShadow: 1,
            mb: 5

          }}
        > 
          <FormControl fullWidth>
            <TextField
              label="Email"
              value={user.email }
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="First Name"
              value={user.first_name}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Last Name"
              value={user.last_name}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Phone Number"
              value={user.phone_number}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Address"
              value={user.location}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Preferred Appraisal Date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              fullWidth
              margin="normal"
              type="date"
              required
              error={!!errorMessage}
              helperText={errorMessage}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>


          <FormControl fullWidth>
            <InputLabel id="demo-multiple-chip-label">Service</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={serviceSelected}
              onChange={(event) => handleServiceChange(event)} // Pass event directly
              input={<OutlinedInput id="select-multiple-chip" label="Service" />}
              required
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Typography key={value}>{value}</Typography>
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {services.map((service) => (
                <MenuItem key={service.id} value={service.name}>
                  {service.name} - {service.money}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        
          <Box
            marginTop={2}

            display="flex"
            justifyContent="center"
          >
            <Button variant="contained" type="primary" htmlType="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Form>
    </Box>
  );
};

export default ServiceForm;
