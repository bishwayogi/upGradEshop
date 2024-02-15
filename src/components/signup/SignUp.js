import React, { useState } from "react";
import { Button, TextField, Typography } from '@mui/material';
import '../../assets/Style/style.css';
import logo from '../../assets/Image/login.png';
import { Link, useNavigate } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const SignUp=()=>{

const navigate = useNavigate();
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [contactNumber, setContactNumber] = useState("");
const [errors, setErrors] = useState({});

const handleSignup = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length === 0) {
      console.log("Signup successful!");
      navigate("/Login"); 
    } else {
      setErrors(validationErrors);
    }
  };

const validateForm = () => {
    const errors = {};
    if (!firstName) {
      errors.firstName = "First Name is required";
    }
    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!email) {
      errors.email = "Email Address is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }    if (!contactNumber) {
      errors.contactNumber = "Contact Number is required";
    }
    return errors;
  };

    return (
		<Grid2
		container
		direction="row"
		justifyContent="center"
		alignItems="center"
		>
        <div className="signup">
            <img className='imglogo' src={logo} alt=''></img>                   
                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1,textShadow:1 }}>                        
                    Sign up</Typography>
                    <div className="signup-body">
			<form onSubmit={handleSignup}>
				<div>
				<TextField
					label="First Name"
					variant="outlined"
					margin="normal"
					fullWidth
					size="small"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<TextField
					label="Last Name"
					variant="outlined"
					margin="normal"
					fullWidth
					size="small"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<TextField
					label="Email"
					variant="outlined"
					margin="normal"
					fullWidth
					size="small"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
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
				<TextField
					label="Confirm Password"
					type="password"
					variant="outlined"
					margin="normal"
					fullWidth
					size="small"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
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
				<Button
					className="login__button"
					variant="contained"
					color="primary"
					onClick={handleSignup}
					fullWidth
					sx={{bgcolor:"#3f51b5"}}
				>
					SIGN UP
				</Button>
				</div>
			</form>
			<p>
				Already have an account? <Link to="/login">Sign in</Link><br/><br/>
				Copyright ⓒ <Link to="/Home">UpGrade</Link> 2021
			</p>         
		</div>
	</div></Grid2>
    )
}

export default SignUp;