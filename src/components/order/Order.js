import { Box, Button, Grid, Step, StepLabel, Stepper } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext } from "react";
import { AuthContext } from "../../common/AuthContext";
import AddAddress from "./AddAddress";


const Order = () => {
  const steps = ["Item", "Select Address", "Confirm Order"];

  
  return (
    <Box sx={{ width: "90%", margin: "auto", marginTop: 10 }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ margin: "auto", marginTop: 10 }}
      >
        Select Address :{" "}
        <select
          style={{
            width: "250px",
            padding: "8px",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
        >
          <option value="select">Mumbai</option>
        </select>
      </Grid2>
      <Grid2 container direction="row" alignItems="center">
        <AddAddress title={"Add Address"} />
      </Grid2>
      <div style={{ width: "90%", margin: "auto", marginTop: 0,textAlign:'center'}}>
      <Button
					className="login__button"
					variant="contained"
					color="primary"
					sx={{bgcolor:"#3f51b5",margin:2}}
				>
					Back
				</Button>
        <Button
					className="login__button"
					variant="contained"
					color="primary"
					sx={{bgcolor:"#3f51b5"}}
				>
					Next
				</Button>
      </div>
    </Box>
  );
};

export default Order;
