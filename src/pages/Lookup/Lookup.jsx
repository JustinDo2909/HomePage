import React, { useState } from "react";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CertificateHTML from "../MyOrder/CertificateHTML";

import logo from "../Home/image/logot.png";
import facet1 from "../Home/image/Facet_part1.jpg";
import facet2 from "../Home/image/Facet_part2.jpg";
import { getCertificateByCode } from "../../utils/ApiFunction";

const Lookup = () => {
  const currentDate = new Date();
  const [idCef, setIdCef] = useState("");

  // Format date
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const handleSearch = async () => {
    const result = await getCertificateByCode(idCef);
    if (result && result.data) {
      openCertificateInNewTab(result.data);
    } else {
      toast.error(`Certificate with ID ${idCef} not found.`, {
        autoClose: 3000,
      });
    }
  };

  const openCertificateInNewTab = (certificate) => {
    const newWindow = window.open("", "_about");
    newWindow.document.write(CertificateHTML(certificate));
    newWindow.document.close();
  };

  return (
    <Box className="wrapper-lookup" sx={{ textAlign: "center", mt: "10%" }}>
      <ToastContainer />
      <Typography className="header-lookup" variant="h3" gutterBottom>
        Welcome to Shine's Diamond Certificate Lookup
      </Typography>
      <Typography variant="body1" gutterBottom>
        Discover the world of certified diamonds with Shine's Diamond
        Certificate Lookup. This tool empowers you to explore detailed
        attributes of diamonds appraised by Shine, simply by entering their
        unique ID.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Whether you're a buyer verifying a diamond's authenticity or an
        appraiser seeking precise information, our intuitive interface ensures a
        seamless experience. Enter the diamond ID below to begin your journey.
      </Typography>
      <Grid
        className="search-lookup"
        container
        justifyContent="center"
        sx={{ mt: 3 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Enter Diamond ID (Ex: SH-9e4827a8f3a8)"
            variant="outlined"
            fullWidth
            value={idCef}
            onChange={(e) => setIdCef(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, mb: 11 }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
  );
};

export default Lookup;
