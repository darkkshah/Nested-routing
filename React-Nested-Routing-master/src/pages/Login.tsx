import { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type userModel = {
  email: string;
  password: string;
};

export default function Login() {
  const [model, setModel] = useState<userModel>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // let fillModel = (key, val) => {
  //   model[key] = val;
  //   setModel(...model);
  // };

  let loginUser = () => {
    console.log(model);
    navigate(`/dashboard`, { state: model });
  };

  return (
    <>
      <Box className="bg-dark">
        <Box
          sx={{ height: "100vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <Paper className="p-3">
            <Box className="p-3 text-center">
              <Typography className="fw-bold">Login</Typography>
            </Box>
            <Box className="p-3">
              <TextField
                onChange={(e) => setModel({ ...model, email: e.target.value })}
                variant="standard"
                type="email"
                label="Email"
              />
            </Box>
            <Box className="p-3">
              <TextField
                onChange={(e) =>
                  setModel({ ...model, password: e.target.value })
                }
                variant="standard"
                type="password"
                label="Password"
              />
            </Box>
            <Box className="p-3">
              <Button onClick={loginUser} fullWidth={true} variant="contained">
                Login
              </Button>
            </Box>
          </Paper>
        </Box>
        <Box className="p-3 text-center">
          <Typography className="text-white fst-italic"><span className="fw-bold text-danger">NOTE:</span> Enter any Email &  Password to go to the Dashboard</Typography>
        </Box>
      </Box>
    </>
  );
}
