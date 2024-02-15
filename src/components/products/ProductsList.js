import React, { useContext, useEffect } from "react";
import styled from "@mui/system/styled";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Product from "./Product";


const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));


const ProductsList = () => {

  const Products = [
    {
      productid: 1,
      prodName: "Apple iPhone 15",
      catagory: "electronic",
      Description:
        "Apple iPhone 15 mobile was launched on 12th September 2023. The phone comes with a 60 Hz refresh rate 6.10-inch touchscreen display offering a resolution of 1179x2556 pixels at a pixel density of 460 pixels per inch (ppi).",
      price: 100000,
      uploadDate: "",
      imgUrl: require("../../assets/Image/Apple15.jpg"),
      Quantity:5,
      Manufacturer:"Apple",
    },
    {
      productid: 2,
      prodName: "Samsung 55 Inches 4K TV",
      catagory: "electronic",
      Description:
        "4K Ultra HD (3840 x 2160) |Refresh Rate : 50 Hertz, 3 HDMI ports to connect set top box | 1 USB ports to connect hard drives or other USB devices |Wi-fi | Bluetooth, 20W Output- 2CH | Powerful Speakers with Q-Symphony",
      price: 64000,
      uploadDate: "",
      imgUrl: require("../../assets/Image/SamsungQled.jpg"),
      Quantity:10,
      Manufacturer:"Samsung",
    },
    {
      productid: 3,
      prodName: "Van Heusen Men T-Shirt",
      catagory: "apparel",
      Description:
        "The t-shirt is framed with a Crew Neck Short Sleeves: The t-shirt is designed with short sleeves.Zipper Detail On Chest: The zipper detail adds a contrasting flair to the t-shirt.",
      price: 50000,
      uploadDate: "",
      imgUrl: require("../../assets/Image/Vtshirt.jpg"),
      Quantity:15,
      Manufacturer:"Van Heusen",
    },
    {
      productid: 4,
      prodName: "Vivo V29 5G",
      catagory: "electronic",
      Description:
        "Explore an exciting range of features on this ultra slim smartphone that features a 3D curved display. Available with smart aura light, this phone provides bright light even in low light environments.",
      price: 32999,
      uploadDate: "",
      imgUrl: require("../../assets/Image/VivoPhone.jpg"),
      Quantity:1,
      Manufacturer:"Vivo",
    },
    {
      productid: 5,
      prodName: "NIVEA Men Cream",
      catagory: "personalcare",
      Description:
        "NIVEA Men Crème, Dark Spot Reduction, Non Greasy Moisturizer, Cream with UV Protect, 75 ml & Nivea Deep Impact Freshness Deodorant for Men, 150 milliliters",
      price: 750,
      uploadDate: "",
      imgUrl: require("../../assets/Image/NIVEAMenCream750.jpg"),
      Quantity:70,
      Manufacturer:"NIVEA",
    },
  ];
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  let [prodList, setprodList] = useState(Products);
  useEffect(() => {
    let flag = localStorage.getItem("isLogin");
    if (flag === "false") {
      navigate("/Login");
    }
    let flagisadmin = localStorage.getItem("isAdmin");
    if (flagisadmin === "true") {
      setIsAdmin(true);
    }
  });
  const [alignment, setAlignment] = useState("web");
  const [filterotp, setfilterotp] = useState("all");
  const [sortotp, setsortotp] = useState("0");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setfilterotp(event.currentTarget.value);
  };

  const handleSortOptChange = (event) => {
    setsortotp(event.currentTarget.value);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Grid2
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={11}
      >
        <Item>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="all">All</ToggleButton>
            <ToggleButton value="apparel">APPAREL</ToggleButton>
            <ToggleButton value="electronic">ELECTRONIC</ToggleButton>
            <ToggleButton value="personalcare">PERSONAL CARE</ToggleButton>
          </ToggleButtonGroup>
        </Item>
      </Grid2>
      <div id="prodlist">
      <Grid2 container direction="row" sx={{ ml: 10 }}>
        Sort By:{" "}
        <select
          onChange={handleSortOptChange}
          style={{
            width: "250px",
            padding: "8px",
            borderRadius: "5px",
            marginLeft: "5px",
          }}
        >
          <option value={"0"}>Select......</option>
          <option value={"0"}>Default</option>
          <option value={"high"}>Price:High to Low</option>
          <option value={"low"}>Price:Low to High</option>
          {/* <option value={"new"}>Newest</option> */}
        </select>
      </Grid2>
      
      <Grid2 container direction="row" sx={{ margin: 2 }}>
        {filterotp === "all" && sortotp == "0"
          ? prodList.map((item) => {
              return <Product prod={item} key={item.productid}></Product>;
            })
          : sortotp === "high" && filterotp == "all"
          ? prodList
              .sort(function (a, b) {
                return b.price - a.price;
              })
              .map((item) => {
                return <Product prod={item} key={item.productid}></Product>;
              })
          : sortotp === "high" && filterotp != "all"
          ? prodList
              .filter(function (i, n) {
                return i.catagory === filterotp;
              })
              .sort(function (a, b) {
                return b.price - a.price;
              })
              .map((item) => {
                return <Product prod={item} key={item.productid}></Product>;
              })
          : sortotp === "low" && filterotp === "all"
          ? prodList
              .sort(function (a, b) {
                return a.price - b.price;
              })
              .map((item) => {
                return <Product prod={item} key={item.productid}></Product>;
              })
          : sortotp === "low" && filterotp !== "all"
          ? prodList
              .filter(function (i, n) {
                return i.catagory === filterotp;
              })
              .sort(function (a, b) {
                return a.price - b.price;
              })
              .map((item) => {
                return <Product prod={item} key={item.productid}></Product>;
              })
          : filterotp !== "" || filterotp !== "all"
          ? prodList
              .filter(function (i, n) {
                return i.catagory === filterotp;
              })
              .map((item) => {
                return <Product prod={item} key={item.productid}></Product>;
              })
          : prodList.map((item) => {
              return <Product prod={item} key={item.productid}></Product>;
            })}
      </Grid2></div>
    </Box>
  );
};

export default ProductsList;
