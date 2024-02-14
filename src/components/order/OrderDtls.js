import {
    Alert,
  Box,
  Button,
  Snackbar,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useState } from "react";
import { ProdContext } from "../../common/ProductContext";
import { useNavigate } from "react-router-dom";

const OrderDtls = () => {
  const { productItem } = useContext(ProdContext);
  const navigate = useNavigate();
  const steps = ["Item", "Select Address", "Confirm Order"];
  const handleplaceOrder = () => {  
    handleClick();      
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);   
  };

  const handleClose = (event) => {
    setOpen(false);
    setTimeout(navigate("/"),"200000"); 
  };

  return (
    <Box sx={{ width: "90%", margin: "auto", marginTop: 5 }}>
      <Stepper activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid2
        container
        direction="row"
        alignItems="center"
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid2 xs={6}>
          <img className="imgProductDtl" src={productItem.imgUrl}></img>
        </Grid2>
        <Grid2 xs={6}>
          <Typography variant="h5">{productItem.prodName}</Typography>
          <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
            {productItem.catagory}
          </Typography>
          <Typography variant="h6">{productItem.Description}</Typography>
          <Button
            variant="contained"
            width="50"
            onClick={handleplaceOrder}
            sx={{ bgcolor: "#3f51b5" }}
          >
            PLACE ORDER
          </Button>
        </Grid2>
      </Grid2>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
          vertical= 'top'
          horizontal= 'right'
        >
          Order is a Successfully Placed!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default OrderDtls;
