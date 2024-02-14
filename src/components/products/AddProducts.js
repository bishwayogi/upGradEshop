import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import "../../assets/Style/style.css";
import logo from "../../assets/Image/login.png";
import { useNavigate } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const AddProducts = (Props) => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [catagory, setcatagory] = useState("");
  const [Manufaturer, setManufaturer] = useState("");
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
      navigate("/Home");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!Name) {
      errors.Name = "Name is required";
    }
    if (!Manufaturer) {
      errors.Manufaturer = "Manufaturer is required";
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
          Add Product
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
                label="Manufaturer *"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={Manufaturer}
                onChange={(e) => setManufaturer(e.target.value)}
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
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Grid2>
  );
};

export default AddProducts;
