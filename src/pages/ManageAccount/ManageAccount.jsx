import React, { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import { getCustomerById, updateAccount } from "../../utils/ApiFunction";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Snackbar,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const ManageAccount = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [user, setUser] = useState({
    id: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    location: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getCustomer = async () => {
      const data = await getCustomerById();
      if (data !== null) {
        setUser({
          id: data.id,
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          phone_number: data.phone_number,
          location: data.location,
        });
      }
    };
    getCustomer();
  }, [navigate]);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
  
  //  // Validate First Name
  //  if (!/\w+\s+\w+/.test(user.first_name.trim())) {
  //   newErrors.first_name = "First Name must contain at least one word";
  // }

  // // Validate Last Name
  // if (!/\w+/.test(user.last_name)) {
  //   newErrors.last_name = "Last Name must contain at least one word";
  // }

  // // Validate Location
  // if (!/\w+/.test(user.location)) {
  //   newErrors.location = "Location must contain at least one word";
  // }
  
    // Validate Phone Number
    const phoneRegex = /^[0][0-9]{9}$/;
    if (!phoneRegex.test(user.phone_number.trim())) {
      newErrors.phone_number = "Phone number must start with 0 and have 10 digits";
    }
  
    // Set errors state
    setErrors(newErrors);
  
    // Return true if no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await updateAccount(user);
        if (response.status === 200) {
          alert("update account successfully!");
          window.location.reload();
        }
      } catch (error) {
        setError("This email is already exist!");
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleCancelClick = () => {
    window.location.reload();
  };

  return (
    <Container maxWidth="sm" className="wrapperrr">
      <Typography variant="h3" gutterBottom>
        Your Profile
      </Typography>
      <Box
        sx={{
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 1,
          boxShadow: 1,
        }}
      >
        {error && <Alert severity="error">{error}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            id="email"
            name="email"
            label="Email"
            value={user.email}
            fullWidth
            required
            margin="normal"
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1 }} />,
              readOnly: true,
            }}
          />
          <TextField
            id="first_name"
            name="first_name"
            label="First Name"
            variant="outlined"
            value={user.first_name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.first_name}
            helperText={errors.first_name}
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            id="last_name"
            name="last_name"
            label="Last Name"
            variant="outlined"
            value={user.last_name}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.last_name}
            helperText={errors.last_name}
            InputProps={{
              startAdornment: <PersonIcon sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            id="location"
            name="location"
            label="Location"
            variant="outlined"
            value={user.location}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.location}
            helperText={errors.location}
            InputProps={{
              startAdornment: <LocationOnIcon sx={{ mr: 1 }} />,
            }}
          />
          <TextField
            id="phone_number"
            name="phone_number"
            label="Phone"
            variant="outlined"
            value={user.phone_number}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            required
            error={!!errors.phone_number}
            helperText={errors.phone_number}
            InputProps={{
              startAdornment: <PhoneIcon sx={{ mr: 1 }} />,
            }}
          />
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              startIcon={<SaveIcon />}
              sx={{ mr: 2 }}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<CancelIcon />}
              onClick={handleCancelClick}
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </Container>
  );
};

export default ManageAccount;
