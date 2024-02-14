import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Box, ButtonGroup, IconButton, Snackbar } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import "./Productslist.css";
import { useNavigate } from "react-router-dom";
import { ProdContext } from "../../common/ProductContext";

const Product = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const {productItem,getProduct } = useContext(ProdContext);
  const navigate = useNavigate();
  useEffect(() => {
    let flagisadmin = localStorage.getItem("isAdmin");
    if (flagisadmin === "true") {
      setIsAdmin(true);
    }
  });
  const handleBuyProd = () => {
    getProduct(props.prod);
    navigate("/ProductSummary");
  };

  const handleProdEdit=()=>{
    navigate("/AddProducts");
  }

  const handleProdDelete=()=>{
    if(window.confirm("Are you sure wants to delete the product?")){
      handleClick();
    }
  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);   
  };

  const handleClose = (event) => {
    setOpen(false);
    navigate("/"); 
  };

  const path = "";
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{ maxWidth: 320, margin: 0.85, padding: 1 }}
        key={props.prod.productid}
        variant="outlined"
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={props.prod.imgUrl}
          className="prodimg"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.prod.prodName}{" "}
            <b style={{ margin: "auto", marginRight: "0" }}>
              ₹ {props.prod.price}
            </b>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.prod.Description}
          </Typography>
        </CardContent>
        <CardActions>
          <div className="btnbottom">
            <Button
              size="small"
              variant="contained"
              sx={{ bgcolor: "#3f51b5" }}
              onClick={handleBuyProd}
            >
              Buy
            </Button>
            {isAdmin && (
              <ButtonGroup
                aria-label="outlined primary button group"
                sx={{ margin: "auto", marginRight: 0, float: "right" }}
              >
                <IconButton onClick={handleProdEdit}>
                  <Edit />
                </IconButton>
                <IconButton onClick={handleProdDelete}>
                  <Delete />
                </IconButton>
              </ButtonGroup>
            )}
          </div>
        </CardActions>
      </Card>
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

export default Product;
