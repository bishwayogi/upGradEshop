import React, { useContext, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import logo from "../../assets/Image/login.png";
import "../../assets/Style/style.css";
import { Link, useNavigate } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { AuthContext } from "../../common/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);
  const { isLoggedIn, isAdmin, login,setAddress } = useContext(AuthContext);

  const loginData = [
    {
      username: "yogi",
      password: "yogi123456",
      isadmin: true,
      address: [
        {
          name: "Yogesh",
          ContactNo: "2200154",
          addType: "Home",
          address: "Mumbai",
          State: "Maharashtra",
          city: "Mumbai",
          zipcode: "4000008",
        }, {
            name: "Yogesh",
            ContactNo: "2200154",
            addType: "Office",
            address: "Mumbai",
            State: "Maharashtra",
            city: "Mumbai",
            zipcode: "4000008",
          },
      ],
    },
    {
      username: "priya",
      password: "priya123456",
      isadmin: false,
      address: [
        {
          name: "Priya",
          ContactNo: "2200154",
          addType: "Home",
          address: "Pune",
          State: "Maharashtra",
          city: "Mumbai",
          zipcode: "4000008",
        },
      ],
    },
  ];
  const errors = [];
  const validateForm = () => {
    if (!Username) {
      errors.Username = "Username is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    setError(errors);
    return errors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      const flagAdmin = loginData.filter(function (e) {
        return (
          e.username === Username &&
          e.password === password &&
          e.isadmin === true
        );
      });
      const flag = loginData.filter(function (e) {
        return (e.username === Username && e.password === password)
      });

      loginData.map((e)=>{
        (e.username === Username && e.password === password)?setAddress(e.address):setAddress([]);     
      });
      //console.log(flagAdmin.length);
      if (flagAdmin.length === 1) {
        localStorage.setItem("isAdmin", true);
        localStorage.setItem("isLogin", true);
        login(true, true);
        navigate("/ProductsList");
      } else {
        if (flag.length === 1) {
          localStorage.setItem("isAdmin", false);
          localStorage.setItem("isLogin", true);
          navigate("/ProductsList");
          login(true, false,[]);
        }
      }
    } else {
      setError(validationErrors);
    }
  };
  return (
    <Grid2
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <div className="signup">
        <img className="imglogo" src={logo} alt=""></img>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textShadow: 1 }}
        >
          Login
        </Typography>        
        <div className="signup-body">
          <form onSubmit={handleLogin}>
            <div>
              <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                size="small"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLogin}
                fullWidth
                sx={{ bgcolor: "#3f51b5" }}
              >
                Login
              </Button>
            </div>
          </form>
          <p>
            Don't have an account? <Link to="/Signup">Sign Up</Link>
            <br />
            <br />
            Copyright ⓒ <Link to="/Home">UpGrade</Link> 2021
          </p>         
        </div>
      </div>
    </Grid2>
  );
};

export default Login;
