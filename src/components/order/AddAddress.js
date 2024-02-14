import React, { useContext, useState } from "react";
import "../../assets/Style/style.css";
import { Box, Button, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { AuthContext } from "../../common/AuthContext";
import { useNavigate } from "react-router-dom";

const AddAddress = (props) => {
  const { address,setAddress } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [landMark, setlandMark] = useState("");
  const [zipcode, setzipcode] = useState("");
  const navigate = useNavigate();

  const handleSaveAddress=()=>{
    setAddress({name:name ,
    ContactNo: contactNumber,
    addType: "Home",
    address: street + landMark,
    State: state,
    city: city,
    zipcode: zipcode});

    console.log(address)
    navigate("/OrderDtls")
  }

  return (
    <Box sx={{ width: "75%", margin: "auto", marginTop: 5 }}>
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="signup">
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textShadow: 1 }}
          >
            {props.title}
          </Typography>
          <div >
            <form onSubmit={handleSaveAddress}>
              <div>
                <TextField
                  label="Name*"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Contact Number"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
                <TextField
                  label="Street*"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
                <TextField
                  label="City*"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <TextField
                  label="State*"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <TextField
                  label="Landmark"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                  value={landMark}
                  onChange={(e) => setlandMark(e.target.value)}
                />
                <TextField
                  label="Zip Code*"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  size="small"
                  value={zipcode}
                  onChange={(e) => setzipcode(e.target.value)}
                />

                <Button
                  className="login__button"
                  variant="contained"
                  color="primary"
                  onClick={handleSaveAddress}
                  fullWidth
                  sx={{ bgcolor: "#3f51b5" }}
                >
                  Save Address
                </Button>
              </div>
            </form>            
          </div>
        </div>
      </Grid2>
    </Box>
  );
}

export default AddAddress;
