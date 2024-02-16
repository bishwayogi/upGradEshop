import { Box, Button, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext, useState } from "react";
import './Order.css';
import { ProdContext } from "../../common/ProductContext";
import { useNavigate } from "react-router-dom";

const ProductSummary = () => {

 // const { prodName,imgUrl, catagory,Description,Price } = route.params;
  const [totalQuentity,settotalQuentity]=useState(1);
  const {productItem,getorderdDtl} = useContext(ProdContext);
  const navigate = useNavigate();

  const handleplaceOrder=()=>{ 
    getorderdDtl({
      prodName:productItem.prodName,
      qty:totalQuentity,
      category:productItem.catagory,
      desc:productItem.Description ,
      price:totalQuentity * productItem.price    
    });  
    navigate("/Order");
  }
  return (
    <Box sx={{ width: "75%",margin:'auto',marginTop:10}}>
      <Grid2
        container
        direction="row"
        alignItems="center"
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid2 xs={5}>
            <img className="imgProductDtl" src={productItem.imgUrl}></img>
        </Grid2>
        <Grid2 xs={7}>
          <Typography variant="h5">{productItem.prodName}</Typography>
          <Typography variant="h6" sx={{textTransform:'uppercase'}}>{productItem.catagory}</Typography>
          <Typography variant="h6">{productItem.Description}</Typography>
          <Typography variant="h6">
          <b style={{ margin: "auto", marginRight: "0" }}>
              ₹ {productItem.price*totalQuentity}
            </b>
          </Typography>
          <TextField
                label="Enter Quentity"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={totalQuentity}
                onChange={(e) => settotalQuentity(e.target.value)}
            />
               <Button
                variant="contained"
                width="50"
                onClick={handleplaceOrder}                
                sx={{bgcolor:"#3f51b5"}}
            >
               PLACE ORDER
            </Button>
        </Grid2>
      </Grid2>
      </Box>
  );
};

export default ProductSummary;
