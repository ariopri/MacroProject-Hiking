import {
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment,
    Avatar,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import { LockClockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        pass: "",
        showPass: false,
    });

    const handlePassVisibilty = () => {
        setValues({
            ...values,
            showPass: !values.showPass,
        });
    };

    return (
        <div>
            <Container style={{ width: "500px" }} >
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >

                    <Paper elelvation={2} sx={{ padding: 5 }}>
                        <form >
                            <Grid container direction="column" spacing={2}>
                                <Avatar style={{
                                    // position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    backgroundColor: "red",
                                    width: "90px",
                                    height: "90px",
                                }}><LockClockOutlined /></Avatar>
                                <h2
                                    style={{
                                        marginTop: "-20px",
                                        paddingBottom: "15px",
                                        textAlign: "center",
                                    }}
                                >LOGIN</h2>
                                <Grid item>
                                    <TextField
                                        type="email"
                                        fullWidth
                                        label="Enter your email"
                                        placeholder="Email Address"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        type={values.showPass ? "text" : "password"}
                                        fullWidth
                                        label="Password"
                                        placeholder="Password"
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handlePassVisibilty}
                                                        aria-label="toggle password"
                                                        edge="end"
                                                    >
                                                        {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid item>
                                    <Button type="submit" fullWidth variant="contained">
                                        Sign In
                                    </Button>
                                </Grid>
                                <p style={{ textAlign: "center", marginTop: "20px" }}>Don't have an account? <Link to={"/register"} style={{
                                    textDecoration: "none",
                                    color: "blue",
                                }}>Sign Up</Link></p>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;