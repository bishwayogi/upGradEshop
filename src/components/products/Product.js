import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert, Box, ButtonGroup, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Snackbar } from "@mui/material";
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
    navigate("/AddProducts",{state:{title:'Modify'}});
  }

  const handleProdDelete=()=>{
    // if(window.confirm("Are you sure wants to delete the product?")){
    //   handleClick();
    // }
    handleClick();
  }

  const [open, setOpen] = useState(false);
  const [openmsg, setopenmsg] = useState(false);

  const handleClick = () => {
    setOpen(true);   
  };

  const handleOk = (event) => {
    setOpen(false);
    setopenmsg(true);
  };

  const handleCancel = (event) => {
    setOpen(false);
  };

  const handleFinalMsg = (event) => {
    setopenmsg(false);
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
      <Snackbar open={openmsg} autoHideDuration={6000} onClose={handleFinalMsg}>
        <Alert
          onClose={handleFinalMsg}
          severity="success"
          variant="filled"
          sx={{ width: '100%'}}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          Product is deleted Successfully!
        </Alert>
      </Snackbar>

      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         Confirm deletion of product!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure wants to delete the product?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleOk} autoFocus variant="contained"
                color="primary">
            ok
          </Button>
          <Button variant='outlined' onClick={handleCancel}>Cancel</Button>
         
        </DialogActions>
      </Dialog>
      
    </Box>
  );
};

export default Product;
