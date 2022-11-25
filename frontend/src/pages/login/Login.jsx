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
import React, { useEffect, useState } from "react";
import { LockClockOutlined } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import useLoginState from "../../store/todoLogin";
import axios from "axios";
import { LOGIN_AUTH } from "../../constant/api";
import { Toast } from '../../components/reusable/Toast'


const Login = () => {

    const { isLoggedIn, setIsLoggedIn, setLoggedAs, setUserId } = useLoginState();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

    const HandleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };
        await axios.post(
            LOGIN_AUTH, user, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                setUserId(response.data.user.id);
                setIsLoggedIn(true);
                setLoggedAs(response.data.user.role);
                localStorage.setItem("tokenId", response.data.tokenId);
            })
            .catch((err) => {
                Toast.fire({
                    icon: 'error',
                    title: 'Something Went Wrong'
                })
            });
    };

    useEffect(() => {
        if (isLoggedIn) {
            Toast.fire({
                icon: 'success',
                title: 'Login Successful'
            })
            navigate("/dashboard");
        }
    }, [isLoggedIn, navigate]);




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
                        <form onSubmit={(e) => HandleSubmit(e)} >
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setPassword(e.target.value)}
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