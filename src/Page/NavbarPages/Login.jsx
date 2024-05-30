import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React from "react";
import signn from "../../images/signin.png";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
            <div className="right-login shadow-sm w-100">
              <h2 className="text-center mb-4 text-white">SIGN IN</h2>
              <div className="login-form">
                <div className="email mb-3">
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    sx={{ backgroundColor: "white", borderRadius: "10px" }}
                    InputProps={{
                      sx: {
                        borderRadius: "10px",
                      },
                    }}
                  />
                </div>
                <div className="Message mb-3">
                  <FormControl sx={{ width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                    
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                      sx={{ backgroundColor: "white", borderRadius: "10px" }}
                      InputProps={{
                        sx: {
                          borderRadius: "10px",
                        },
                      }}
                    />
                  </FormControl>
                </div>
                <Button
                  className="purple-btn"
                  variant="contained"
                  fullWidth
                  sx={{ padding: "12px" }}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center">
            <img className="img-fluid" src={signn} alt="contact" />
          </div>
        </div>
      </div>
    </div>
  );
};
