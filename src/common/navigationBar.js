import React, { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navigationBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { AuthContext } from "./AuthContext";
import { Box, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "35ch",
    },
  },
}));
const NavigationBar = () => {
  const { isLoggedIn, isAdmin, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    console.log(event.currentTarget);
    setAnchorElNav(false);
  };

  useEffect(() => {
    let flag = localStorage.getItem("isLogin");
    if (flag === "true") {
      flag = localStorage.getItem("isAdmin");
      if (flag === "true") {
        login(true, true);
      } else {
        login(true, false);
      }
    }
  });

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.setItem("isAdmin", false);
    localStorage.setItem("isLogin", false);
    logout(false);
    navigate("/login");
  };

  return (
    <div className="header">
      <AppBar position="static" sx={{ bgcolor: "#3f51b5" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: "none" }}>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key={"Home"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link
                        style={{ color: "black" }}
                        className="title"
                        to={"/"}
                      >
                        Home
                      </Link></Typography>
                </MenuItem>
                {isAdmin && (
                  <MenuItem key={"AddProduct"} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{ color: "black" }}
                        className="title"
                        to={"/AddProducts"}
                      >
                        AddProduct
                      </Link>
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
            </Box>
            <ShoppingCartIcon
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </ShoppingCartIcon>
            <h5 className="title">upGrad E-Shop</h5>
            {!isLoggedIn ? (
              <div className="login">
                <Link className="title" to={"/Login"}>
                  Login
                </Link>
                <Link className="title" to={"/SignUp"}>
                  SignUp
                </Link>
              </div>
            ) : (
              <>
                <Search
                  sx={{
                    marginLeft: "-20",
                    display: { xs: "none", md: "none", lg: "flex" },
                  }}
                >
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    justifyContent: "flex-end",
                    margin: "auto",
                    marginRight: 5,
                  }}
                >
                  <Link className="title" to={"/"}>
                    Home
                  </Link>
                  {isAdmin && (
                    <Link className="title" to={"/AddProducts"}>
                      AddProduct
                    </Link>
                  )}
                </Box>
                <Button
                  className="btn"
                  variant="contained"
                  color="inherit"
                  sx={{ bgcolor: "#f50057", m: "4",alignContent:'end' }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}{" "}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
