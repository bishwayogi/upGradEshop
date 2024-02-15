import React, { useContext, useEffect, useState } from "react";
import { Alert, Button, Snackbar, TextField, Typography } from "@mui/material";
import "../../assets/Style/style.css";
import logo from "../../assets/Image/login.png";
import { useLocation, useNavigate } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { ProdContext } from "../../common/ProductContext";

const AddProducts = () => {
  const location = useLocation();
  const title=(location.state)!==null?location.state.title:"Add";

  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [catagory, setcatagory] = useState("");
  const [Manufacturer, setManufacturer] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [price, setprice] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [Description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSaveProduct = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length === 0) {
      console.log("Saved successful!");
      setopenmsg(true);
    } else {
      setErrors(validationErrors);
    }
  };

  const {productItem } = useContext(ProdContext);
  useEffect(()=>{
    console.log(location.state);
    if(productItem!==null && location.state!==null){
      setName(productItem.prodName);
      setcatagory(productItem.catagory);
      setimgUrl(productItem.imgUrl);
      setprice(productItem.price);
      setDescription(productItem.Description);
      setManufacturer(productItem.Manufacturer);
      setQuantity(productItem.Quantity);
    }else{
      setName("");
      setcatagory("");
      setimgUrl("");
      setprice("");
      setDescription("");
      setManufacturer("");
      setQuantity("");
    }

  })

  const validateForm = () => {
    const errors = {};
    if (!Name) {
      errors.Name = "Name is required";
    }
    if (!Manufacturer) {
      errors.Manufacturer = "Manufacturer is required";
    }
    if (!catagory) {
      errors.catagory = "Catagory is required";
    }
    if (!price) {
      errors.price = "Price is required";
    }

    return errors;
  };

  const handleOnChange=(e)=>{
	   setcatagory(e.currentTarget.value);
  }


  const [openmsg, setopenmsg] = useState(false);

  const handleFinalMsg = (event) => {
    setopenmsg(false);
    navigate("/"); 
  };

  return (
    <Grid2
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <div className="signup">
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textShadow: 1 }}
        >
          {title} Product
        </Typography>
        <div className="signup-body">
          <form onSubmit={handleSaveProduct}>
            <div>
              <TextField
                label="Name *"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
              <select
                onChange={handleOnChange}
                style={{
                  width: "360px",
                  padding: "8px",
                  borderRadius: "5px",
                  marginLeft: "5px",
                }}
              >
                <option value={"0"}>Select Catagory.......</option>
                <option value={"Apparel"}>Apparel</option>
                <option value={"Electronic"}>Electronic</option>
                <option value={"Footware"}>Footware</option>
                <option value={"PersonalCare"}>Personal Care</option>
              </select>
              <TextField
                label="Manufacturer *"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={Manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
              />
              <TextField
                label="Available Item *"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={Quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <TextField
                label="Price *"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
              <TextField
                label="Image URL"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                InputProps={{
                  readOnly: (location.state)!==null?true:false,
                }}
                value={imgUrl}
                onChange={(e) => setimgUrl(e.target.value)}
              />
              <TextField
                label="Product Description"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveProduct}
                fullWidth
                sx={{ bgcolor: "#3f51b5" }}
              >
                 {(location.state)!==null?location.state.title:"Save"} Product
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Snackbar open={openmsg} autoHideDuration={6000} onClose={handleFinalMsg}>
        <Alert
          onClose={handleFinalMsg}
          severity="success"
          variant="filled"
          sx={{ width: '100%'}}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          Product {Name} is {(location.state)!==null?"Modified":"Saved"} Successfully!
        </Alert>
      </Snackbar>
    </Grid2>
  );
};

export default AddProducts;
