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
  const { orderdDtl,delAddress } = useContext(ProdContext);
  const navigate = useNavigate();
  const steps = ["Items", "Select Address", "Confirm Order"];
  console.log(delAddress);
  const handleplaceOrder = () => {
    handleClick();
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
    setTimeout(navigate("/"), "200000");
  };

  return (
    <>
      <Box
        sx={{
          width: "63.5%",
          margin: "auto",
          marginTop: 5,
          border: 2,
          borderColor: "#edeff6",
          padding: 2,
        }}
      >
        <Stepper activeStep={2} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box sx={{ width: "65%", margin: "auto", marginTop: 2 }}>
        <Grid2 container spacing={2}>
          <Grid2 xs={6} md={8} sx={{ border: 2, borderColor: "#edeff6" }}>
            <Typography variant="h5">
              <b>{orderdDtl.prodName}</b>
            </Typography>
            <Typography variant="caption">
              Quantity: <b>{orderdDtl.qty}</b>
            </Typography>
            <br />
            <Typography variant="caption">
              Category:{" "}
              <b style={{ textTransform: "uppercase" }}>
                {orderdDtl.category}
              </b>
            </Typography>
            <br />
            <br />
            <Typography variant="caption">{orderdDtl.desc}</Typography>
            <br />

            <Typography variant="h6" sx={{ mt: 5, color: "red" }}>
              Total Price: {orderdDtl.price}
            </Typography>
          </Grid2>

          <Grid2 xs={6} md={4} sx={{ border: 2, borderColor: "#edeff6" }}>
            <Typography variant="h5">
              <b>Address Details :</b>
            </Typography>
            <Typography variant="caption">
              {delAddress.address} {delAddress.addType}
            </Typography>
            <br />
            <Typography variant="caption">
              Contact Number:<b style={{ textTransform: "uppercase" }}>
                {delAddress.ContactNo}
              </b>
            </Typography><br />
            <Typography variant="caption">
              {delAddress.city}, {delAddress.State}
            </Typography><br />
            <Typography variant="caption">
              {delAddress.zipcode}
            </Typography>
          </Grid2>
        </Grid2>
        <div
          style={{
            width: "100%",
            margin: "auto",
            marginTop: 50,
            textAlign: "center",
          }}
        >
          <Button
            variant="contained"
            width="50"
            onClick={handleplaceOrder}
            sx={{ bgcolor: "#3f51b5" }}
          >
            PLACE ORDER
          </Button>
        </div>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
            vertical="top"
            horizontal="right"
          >
            Order Placed Successfully !
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default OrderDtls;
