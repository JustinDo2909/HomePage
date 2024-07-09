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
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";

const ManageAccount = () => {
  const [editMode, setEditMode] = useState(false);
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
  
  // Function to handle form input change
  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleEditClick = () => {
    setEditMode(true);
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
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputProps={{
              startAdornment: <EmailIcon sx={{ mr: 1 }} />,
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
