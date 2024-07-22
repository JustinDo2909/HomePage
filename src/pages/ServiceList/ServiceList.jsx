import React, { useEffect, useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAllServices } from "../../utils/ApiFunction";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const Services = async () => {
      try {
        const response = await getAllServices();
        if (response.status === 200) {
          setServices(response.data);
          console.log(services);
        }
      } catch (error) {
        console.log(error);
      }
    };
    Services();
  }, []);

  const handleOnClick = (service) => {
    if (service.name === "Diamond Grading Report") {
      navigate(`/Service/Valuation`);
    } else navigate(`/Service/${service.name}`);
  };

  const ServiceCard = ({ service }) => {
    return (
      <Card variant="outlined" sx={{ mb: 2 }}>
        {service.name === "Diamond Grading Report" && (
          <CardMedia
            component="img"
            height="140"
            src={service.photo}
            alt="Valuation"
          />
        )}
        {service.name === "Sculpture" && (
          <CardMedia
            component="img"
            height="140"
            src={service.photo}
            alt="Sculpture"
          />
        )}
        {service.name === "Appraisal" && (
          <CardMedia
            component="img"
            height="140"
            src={service.photo}
            alt="Appraisal"
          />
        )}
        <CardContent>
          <Typography variant="h6" component="div" sx={{ mb: 1 }}>
            {service.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Price:</strong> ${service.money}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            {service.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => handleOnClick(service)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <Container sx={{ mt: 14, mb: 14 }}>
      <Typography variant="h4" component="h1" mb={4}>
        List of Services
      </Typography>
      <Grid container spacing={7}>
        {services.map((service) => (
          <Grid item sm={6} key={service.id}>
            <ServiceCard service={service} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServiceList;
