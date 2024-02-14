import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, ButtonGroup, IconButton } from "@mui/material";
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
  const hendleBuyProd = () => {
    getProduct(props.prod);
    navigate("/ProductSummary");
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
              onClick={hendleBuyProd}
            >
              Buy
            </Button>
            {isAdmin && (
              <ButtonGroup
                aria-label="outlined primary button group"
                sx={{ margin: "auto", marginRight: 0, float: "right" }}
              >
                <IconButton>
                  <Edit />
                </IconButton>
                <IconButton>
                  <Delete />
                </IconButton>
              </ButtonGroup>
            )}
          </div>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Product;
