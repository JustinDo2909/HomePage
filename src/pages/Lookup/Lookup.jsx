import React, { useState } from "react";
import { Box, TextField, Typography, Button, Grid } from "@mui/material";
import data from "./fakeData.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logo from "../Home/image/logot.png";
import facet1 from "../Home/image/Facet_part1.jpg";
import facet2 from "../Home/image/Facet_part2.jpg";

const Lookup = () => {
  const currentDate = new Date();
  const [idCef, setIdCef] = useState("");
  const [certificate, setCertificate] = useState(null);

  // Format date
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  const handleSearch = () => {
    const result = data.find((item) => item.id === parseInt(idCef));

    if (result) {
      setCertificate(result);
      openCertificateInNewTab(result);
      window.location.reload();
    } else {
      toast.error(`Certificate with ID ${idCef} not found.`, {
        autoClose: 3000,
      });
    }
  };

  const openCertificateInNewTab = (certificate) => {
    const newWindow = window.open("", "_about");
    newWindow.document.write(`
            <html>
            <head>
                <title>Certificate Report</title>
                <style>
                    body {
                        padding: 20px;
                    }
                    
                    .title {
                        display: flex;
                        width: 100%;
                        justify-content: center;
                        align-content: center;
                    }
    
                    .logo {
                        flex: 1;
                        width: 50px;
                    }
    
                    .logo img {
                        width: 200px;
                    }
    
                    .titleName {
                        flex: 1;
                        text-align: center;
                    }
    
                    .nullBlock {
                        flex: 1;
                    }
    
                    .bodyy {
                        display: flex;
                        justify-content: space-around;
                        align-items: flex-start;
                        margin-top: 10px;
                        gap: 40px;
                    }
    
                    .detail p {
                        text-align: justify;
                    }
    
                    .S-prop > p {
                        width: 100%;
                        color: antiquewhite;
                        font-size: 14px;
                        font-weight: bold;
                        font-family: Arial, Helvetica, sans-serif;
                        background-color: rgb(9, 70, 123);
                        margin: 0;
                    }
    
                    .S-prop > div:not(.middle-report div) {
                        border: 2px solid rgb(9, 70, 123);
                        padding: 10px;
                        font-family: Arial, Helvetica, sans-serif;
                    }
    
                    .S-prop > div span:not(.comment) {
                        float: right;
                    }
    
                    .props,
                    .characters {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
    
                    .thead > th {
                        align-items: center;
                    }
    
                    .left-report {
                        flex: 1;
                    }
    
                    .middle-report {
                        flex: 1;
                    }
    
                    .right-report {
                        flex: 1;
                    }
    
                    .right-report th {
                        width: 20%;
                    }
    
                    .right-report table {
                        width: 100%;
                    }
    
                    .right-report tr > td:not(.empty-th, .empty-td) {
                        text-align: center;
                        border: 2px solid rgb(9, 70, 123);
                        border-collapse: collapse;
                    }
                    .header-cef{
                       display : flex
                    }
                    .img{
                    width: 30%
                    }
                    .content{
                    margin-Left: 185px;
                      margin-top: 10px;
                       text-align: center;
                    }
                     
                </style>
            </head>
            <body>
                   <div class ='header-cef'>
                    <img class='img' style={{width: '30%'}} src=${logo}/>
                    <div class='content' >
                        <h1 textAlign={'center'} variant='h4'> Shine Report</h1>
                        <h3 textAlign={'center'} variant='h6'> ${certificate.id}</h3>
                    </div>
                </div>
                <div class="bodyy">
                    <div class="left-report">
                        <div class="S-prop">
                            <p>SHINE NATURAL DIAMOND ORIGIN REPORT</p>
                            <div class="detail">
                                <p>${formattedDate}</p>
                                <p>SHINE Report Number <span>${certificate.id}</span></p>
                                <p>Shape and Cutting Style <span>${certificate.Shape}</span></p>
                                <p>Measurements <span>${certificate.Measurements}</span></p>
                            </div>
                        </div>
                        <div class="S-prop">
                            <p>GRADING RESULT</p>
                            <div class="detail">
                                <p>Carar Weight <span>${certificate.CaratWeight}</span></p>
                                <p>Color Grade <span>${certificate.ColorGrade}</span></p>
                                <p>Clarity Grade <span>${certificate.ClarityGrade}</span></p>
                                <p>Cut Grade <span>${certificate.CutGrade}</span></p>
                            </div>
                        </div>
                        <div class="S-prop">
                            <p>ADDITIONAL GRADING INFORMATION</p>
                            <div class="detail">
                                <p>Polish <span>${certificate.Polish}</span></p>
                                <p>Symmetry <span>${certificate.Symmetry}</span></p>
                                <p>Fluorescence <span>${certificate.Fluorescence}</span></p>
                                <p>Inscription(s) <span>SHINE ${certificate.id}</span></p>
                                <p><span class="comment" style="font-weight: bold;">Comments:</span> *SAMPLE**SAMPLE**SAMPLE**SAMPLE*</p>
                                <p>Additional pinpoints are not shown</p>
                            </div>
                        </div>
                        <div class="S-prop">
                            <p>ORIGIN RESULT</p>
                            <div class="detail">
                                <p>Country of Origin: <span>South Africa</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="middle-report">
                        <div class="S-prop">
                            <p>PROPORTIONS</p>
                            <div class="props">
                                <img class="alt-diamond" src=${facet1} alt="" />
                            </div>
                        </div>
                        <div class="S-prop">
                            <p>CLARITY CHARACTERISTICS</p>
                            <div class="characters">
                                <img class="alt-diamond" src=${facet2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="right-report">
                        <div class="S-prop">
                            <p>GRADING SCALES</p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>SHINE COLOR SCALE</th>
                                        <th class="empty-th"></th>
                                        <th>SHINE CLARITY SCALE</th>
                                        <th class="empty-th"></th>
                                        <th>GIA CUT SCALE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>D</td>
                                        <td class="empty-td" rowspan="23"></td>
                                        <td rowspan="3">FLAWLESS</td>
                                        <td class="empty-td" rowspan="23"></td>
                                        <td rowspan="4">EXCELLENT</td>
                                    </tr>
                                    <tr>
                                        <td>E</td>
                                    </tr>
                                    <tr>
                                        <td>F</td>
                                    </tr>
                                    <tr>
                                        <td>G</td>
                                        <td rowspan="2">INTERNALLY FLAWLESS</td>
                                    </tr>
                                    <tr>
                                        <td>H</td>
                                        <td rowspan="5">VERY GOOD</td>
                                    </tr>
                                    <tr>
                                        <td>I</td>
                                        <td rowspan="2">VVS1</td>
                                    </tr>
                                    <tr>
                                        <td>J</td>
                                    </tr>
                                    <tr>
                                        <td>K</td>
                                        <td rowspan="2">VVS2</td>
                                    </tr>
                                    <tr>
                                        <td>L</td>
                                    </tr>
                                    <tr>
                                        <td>M</td>
                                        <td rowspan="2">VS1</td>
                                        <td rowspan="5">GOOD</td>
                                    </tr>
                                    <tr>
                                        <td>N</td>
                                    </tr>
                                    <tr>
                                        <td>O</td>
                                        <td rowspan="2">VS2</td>
                                    </tr>
                                    <tr>
                                        <td>P</td>
                                    </tr>
                                    <tr>
                                        <td>Q</td>
                                        <td rowspan="2">SI1</td>
                                    </tr>
                                    <tr>
                                        <td>R</td>
                                        <td rowspan="5">FAIR</td>
                                    </tr>
                                    <tr>
                                        <td>S</td>
                                        <td rowspan="2">SI2</td>
                                    </tr>
                                    <tr>
                                        <td>T</td>
                                    </tr>
                                    <tr>
                                        <td>U</td>
                                        <td rowspan="2">I1</td>
                                    </tr>
                                    <tr>
                                        <td>Y</td>
                                    </tr>
                                    <tr>
                                        <td>W</td>
                                        <td rowspan="2">I2</td>
                                        <td rowspan="4">POOR</td>
                                    </tr>
                                    <tr>
                                        <td>X</td>
                                    </tr>
                                    <tr>
                                        <td>Y</td>
                                        <td rowspan="2">I3</td>
                                    </tr>
                                    <tr>
                                        <td>Z</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);
    newWindow.document.close();
  };

  return (
    <Box className='wrapper-lookup'  sx={{ textAlign: "center", mt: "10%" }}>
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
      <Grid className="search-lookup" container justifyContent="center" sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            label="Enter Diamond ID"
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
