// import React from "react"
// import { connect } from "react-redux";
// import { Link, Navigate } from "react-router-dom";
// import Alert from "../../../services/alert";
// import Auth from "../../../services/Auth";
// import { getAdminDetails } from "../../../redux/actions/loginAction";
// import "./AddTeacher.css"
// import axios from "axios";
// import apis from "../../../services/Apis";

// class AddTeacher extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name : "",
//       email : "",
//       password : "",
//       confirmpassword : ""
//     }
//   }

//   nameInputHandler = (event)=>{
//     this.setState({
//       ...this.state,
//       name : event.target.value
//     });
//   }

//   emailInputHandler = (event)=> {
//     this.setState({
//       ...this.state,
//       email : event.target.value
//     })
//   }

//   passwordInputHandler = (event)=> {
//     this.setState({
//       ...this.state,
//       password : event.target.value
//     })
//   }

//   confirmInputHandler = (event)=> {
//     this.setState({
//       ...this.state,
//       confirmpassword : event.target.value
//     })
//   }

//   handleSubmit= (event) => {
//     event.preventDefault();
//     if(this.state.confirmpassword !== this.state.password) {
//       Alert('error','Invalid Input','Confirm Password does not match')
//     }
//     console.log(this.state);
//     axios.post(apis.BASE + apis.ADD_TEACHER, {
//       username : this.state.name,
//       email : this.state.email,
//       password : this.state.password
//     },{
//       headers:{
//         'Authorization':`Bearer ${Auth.retriveToken()}`
//       }
//     }).then(response => {
//       console.log(response.data);
//       if(response.data.success) {
//         Alert('info','Success',response.data.message);
//       } else {
//         Alert('error','Failed',response.data.message);
//       }
//     })
//   }

//   render(){
//     if(!Auth.retriveToken() || Auth.retriveToken()==='undefined'){
//       return (<Navigate to='/'/>);
//     } else if(!this.props.user.isLoggedIn) {
//       this.props.getAdminDetails();
//       return (<div></div>)
//     }
//     return (

//       <form onSubmit={this.handleSubmit} className="form-class">
//         <h2>Add Teacher</h2>
//         <div>
//           <label> Name </label>
//           <input type='Text' value={this.state.name} onChange={this.nameInputHandler} required/>
//         </div>
//         <div>
//           <label> Email </label>
//           <input type='email' value={this.state.email} onChange={this.emailInputHandler} required/>
//         </div>
//         <div>
//           <label> Password </label>
//           <input type='password' value={this.state.password} onChange={this.passwordInputHandler} required/>
//         </div>
//         <div>
//           <label> Confirm Password </label>
//           <input type='password' value={this.state.confirmpassword} onChange={this.confirmInputHandler} required/>
//         </div>
//         <button type="submit"> Add Teacher</button>
//         <br/>
//         <button> <Link className="linkbtn" to='/home'>back</Link></button>
//       </form>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   user:state.user
// });

// export default connect(mapStateToProps,{
//   getAdminDetails
// })(AddTeacher);

import React from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Alert from "../../../services/alert";
import Auth from "../../../services/Auth";
import { getAdminDetails } from "../../../redux/actions/loginAction";
import axios from "axios";
import apis from "../../../services/Apis";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import LinkUI from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // black
    },
    // background: {
    //   default: "#FFFFFF", // white
    // },
    // text: {
    //   // primary: '#000000', // black
    //   secondary: "#FFFFFF", // white
    // },
  },
});

class AddTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      Alert("error", "Invalid Input", "Confirm Password does not match");
    } else {
      axios
        .post(
          apis.BASE + apis.ADD_TEACHER,
          {
            username: `${this.state.firstName} ${this.state.lastName}`,
            email: this.state.email,
            password: this.state.password,
          },
          {
            headers: {
              Authorization: `Bearer ${Auth.retriveToken()}`,
            },
          }
        )
        .then((response) => {
          if (response.data.success) {
            Alert("info", "Success", response.data.message);
          } else {
            Alert("error", "Failed", response.data.message);
          }
        });
    }
  };

  render() {
    if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
      return <Navigate to="/" />;
    } else if (!this.props.user.isLoggedIn) {
      this.props.getAdminDetails();
      return <div></div>;
    }
    return (
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          variant="contained"
          color="primary"
        >
          {/* <CssBaseline /> */}
          <Box
            sx={{
              marginTop: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add Teacher
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={this.handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    value={this.state.confirmPassword}
                    onChange={this.handleInputChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Teacher
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <LinkUI href="/home" variant="body2">
                    Back to Home
                  </LinkUI>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  getAdminDetails,
})(AddTeacher);
