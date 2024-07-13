import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Paper,
  Modal,
  IconButton,
  Pagination,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import palpayLogo from "../Service/img/PayPal_Logo.jpg";
import cashLogo from "./cashh.jpg";
import CertificateHTML from "./CertificateHTML";
import { getAllRequest, getCertificateById } from "../../utils/ApiFunction";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckIcon from "@mui/icons-material/Check";

const steps = ["WAIT", "NEW", "PROCESSING", "PROCESSED", "DONE"];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}/${month}/${year}`;
};

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [totalRequest, setTotalRequest] = useState(0);
  const [totalDone, setTotalDone] = useState(0);
  const [totalCompletedSteps, setTotalCompletedSteps] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [valuation, setValuation] = useState('');
  const itemsPerPage = 3;

  useEffect(() => {
    getAllRequest().then((result) => {
      setOrders(result.data);
      setFilteredOrders(result.data);
      setTotalRequest(result.data.length);
      const doneRequests = result.data.filter(
        (order) => order.status === "DONE"
      );
      setTotalDone(doneRequests.length);
      const completedSteps = result.data.filter(
        (order) => order.status === "PROCESSED"
      );
      setTotalCompletedSteps(completedSteps.length);
    });
  }, []);

  const handleShowDetails = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedOrder(null);
    setValuation(null)
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const sortByDone = () => {
    const doneList = orders.filter((request) => request.status === "DONE");
    setFilteredOrders(doneList);
  };

  const sortByTotal = () => {
    setFilteredOrders(orders);
  };

  const sortByProcess = () => {
    const processList = orders.filter((order) => order.status === "PROCESSED");
    setFilteredOrders(processList);
  };


  const handleShowCertificate = async (certificate_id) => {
    const result = await getCertificateById(certificate_id);

    if (result && result.data) {
      openCertificateInNewTab(result.data);
    } else {
      console.log(`Certificate with ID not found.`);
    }
  };


  const handleShowPrice = async (certificate_id) => {
    const result = await getCertificateById(certificate_id);

    if (result && result.data) {
      setValuation(result)
      setModalOpen(true)
    } else {
      console.log(`not found.`);
    }
  }

  const openCertificateInNewTab = (certificate) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(CertificateHTML(certificate));
    newWindow.document.close();
  };

  const indexOfLastOrder = currentPage * itemsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );

  return (
    <Box sx={{ backgroundColor: "#dcdcdc66" }}>
      <Box className="wrapperrr" sx={{ mt: 10, height: "80vh" }}>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" color={'#254a4b'}>Request Tracking</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            mb: 2,
            borderBottom: "2px solid #eee",
          }}
        >
          <Button
            onClick={sortByTotal}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <NotificationsNoneIcon />
            <Typography sx={{ ml: 1 }}>Total ({totalRequest})</Typography>
          </Button>
          <Button
            onClick={sortByProcess}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <WorkOutlineIcon />
            <Typography sx={{ ml: 1 }}>
              Process ({totalCompletedSteps})
            </Typography>
          </Button>
          <Button
            onClick={sortByDone}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CheckIcon />
            <Typography sx={{ ml: 1 }}>Done ({totalDone})</Typography>
          </Button>
        </Box>
        <TableContainer component={Paper} sx={{ mb: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#dcdcdc66" }}>
                <TableCell
                  sx={{ color: "#11375e", fontSize: "20px " }}
                  align="center"
                >
                  No
                </TableCell>
                <TableCell
                  sx={{ color: "#11375e", fontSize: "20px " }}
                  align="center"
                >
                  Date
                </TableCell>
                <TableCell
                  sx={{ color: "#11375e", fontSize: "20px " }}
                  align="center"
                >
                  Service
                </TableCell>
                <TableCell
                  sx={{ color: "#11375e", fontSize: "20px " }}
                  align="center"
                >
                  Payment
                </TableCell>
                <TableCell
                  sx={{ color: "#11375e", fontSize: "20px " }}
                  align="center"
                >
                  Payment Status
                </TableCell>
                <TableCell
                  sx={{ color: "#11375e", fontSize: "20px " }}
                  align="center"
                >
                  Request Status
                </TableCell>
                <TableCell
                  sx={{ color: "#11375e", fontSize: "20px " }}
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentOrders.map((request, index) => (
                <TableRow key={request.id}>
                  <TableCell sx={{ color: "gray" }} align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ color: "#11375e" }} align="center">
                    {formatDate(request.created_date)}
                  </TableCell>
                  <TableCell sx={{ color: "gray" }} align="center">
                    {request.service_names.replace(/([a-z])([A-Z])/g, "$1, $2")}
                  </TableCell>
                  <TableCell align="center">
                    {request.payment_method === "PAYPAL" ? (
                      <img
                        style={{ width: "60px" }}
                        src={palpayLogo}
                        alt="PayPal"
                      />
                    ) : (
                      <img
                        style={{ width: "50px", height: "40px" }}
                        src={cashLogo}
                        alt="Cash"
                      />
                    )}
                  </TableCell>
                  <TableCell sx={{ color: "gray" }} align="center">
                    {request.paid ? "Paid" : "Pending"}
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      sx={{
                        backgroundColor:
                          request.status === "DONE"
                            ? "green"
                            : request.status === "BLOCKED"
                              ? "red"
                              : request.status === "WAIT"
                                ? '#4682a1'
                                : request.status === "PROCESSING"
                                  ? '#102e60'
                                  : request.status === "PROCESSED"
                                    ? '#4ab1ac'
                                    : "#00aaff",
                        color: "white",
                        borderRadius: 1,
                        width: "50%",
                        marginLeft: "25%",
                      }}
                    >
                      {request.status}
                    </Typography>
                    {request.status !== "DONE" &&
                      request.status !== "BLOCKED" && (
                        <>
                          <Button onClick={() => handleShowDetails(request)}>
                            Details
                          </Button>
                        </>
                      )}
                  </TableCell>
                  <TableCell sx={{ color: "gray" }} align="center">
                    {request.status === "DONE" && (
                        <>
                          <Typography>
                            <Button
                              onClick={() =>
                                handleShowCertificate(request.certificate_id)
                              }
                            >
                              Certificate
                            </Button>
                          </Typography>
                          <Typography>

                            <Button
                              onClick={() =>
                                handleShowPrice(request.certificate_id)
                              }
                            >
                              Price
                            </Button>
                          </Typography>
                        </>

                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <Box
            sx={{
              width: 600,
              p: 3,
              mx: "auto",
              mt: "10%",
              backgroundColor: "white",
              boxShadow: 24,
              borderRadius: 2,
              position: "relative",
            }}
          >
            <IconButton
              onClick={handleCloseModal}
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              <CloseIcon />
            </IconButton>
            {valuation ? (
              <>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 'bold', mb: 3, color: '#11375e', textAlign: 'center' }}
                >
                  Valuation Report
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
                        <TableCell sx={{ fontWeight: 'bold', color: '#11375e' }}>Min Price</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#11375e' }}>Max Price</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#11375e' }}>Rap Price</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#11375e' }}>Rap Percent</TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#11375e' }}>Price</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 'bold', color: ' #a51442' }}>
                          ${valuation.data.min_price.toLocaleString()}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: ' #009688' }}>
                          ${valuation.data.max_price.toLocaleString()}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#673ab7' }}>
                          ${valuation.data.rap_price.toLocaleString()}
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color:
                          valuation.data.rap_percent > 1 
                          ? 'green' :
                          '#f44336'
                         }}>
                          {valuation.data.rap_percent.toFixed(2)} %
                        </TableCell>
                        <TableCell sx={{ fontWeight: 'bold', color: '#11375e' }}>
                          ${valuation.data.real_price.toLocaleString()}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ) : selectedOrder ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Order Step
                </Typography>
                {selectedOrder.status === "BLOCKED" ? (
                  <Typography color="error">
                    This order is currently blocked.
                  </Typography>
                ) : (
                  <Stepper
                    nonLinear
                    activeStep={steps.indexOf(selectedOrder.status)}
                    alternativeLabel
                  >
                    {steps.map((label, index) => (
                      <Step
                        key={label}
                        completed={index < steps.indexOf(selectedOrder.status)}
                      >
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                )}
                {steps.indexOf(selectedOrder.status) >= steps.length && (
                  <Typography>Order Completed</Typography>
                )}
              </>
            ) : null}
          </Box>
        </Modal>

        <Pagination
          count={Math.ceil(filteredOrders.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        />
      </Box>
    </Box>
  );
};

export default MyOrder;
