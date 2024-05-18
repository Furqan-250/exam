// import React from "react"
// import { connect } from "react-redux";
// import { Link, Navigate } from "react-router-dom";
// import Alert from "../../../services/alert";
// import Auth from "../../../services/Auth";
// import { getAdminDetails } from "../../../redux/actions/loginAction";
// import "./AddSubject.css"
// import axios from "axios";
// import apis from "../../../services/Apis";

// class AddSubject extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name : ""
//     }
//   }

//   nameInputHandler = (event)=>{
//     this.setState({
//       ...this.state,
//       name : event.target.value
//     });
//   }

//   handleSubmit= (event) => {
//     event.preventDefault();

//     console.log(this.state);
//     axios.post(apis.BASE + apis.ADD_SUBJECT, {
//       name : this.state.name
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
//         <h2>Add Subject</h2>
//         <div>
//           <label> Name </label>
//           <input type='Text' value={this.state.name} onChange={this.nameInputHandler} required/>
//         </div>

//         <button type="submit"> Add Subject</button>
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
// })(AddSubject);

// import React from "react";
// import { connect } from "react-redux";
// import { Link, Navigate } from "react-router-dom";
// import Alert from "../../../services/alert";
// import Auth from "../../../services/Auth";
// import { getAdminDetails } from "../../../redux/actions/loginAction";
// import axios from "axios";
// import apis from "../../../services/Apis";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import LinkUI from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2", // black
//     },
//   },
// });

// class AddSubject extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//     };
//   }

//   nameInputHandler = (event) => {
//     this.setState({
//       ...this.state,
//       name: event.target.value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     axios
//       .post(
//         apis.BASE + apis.ADD_SUBJECT,
//         {
//           name: this.state.name,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${Auth.retriveToken()}`,
//           },
//         }
//       )
//       .then((response) => {
//         if (response.data.success) {
//           Alert("info", "Success", response.data.message);
//         } else {
//           Alert("error", "Failed", response.data.message);
//         }
//       });
//   };

//   render() {
//     if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
//       return <Navigate to="/" />;
//     } else if (!this.props.user.isLoggedIn) {
//       this.props.getAdminDetails();
//       return <div></div>;
//     }
//     return (
//       <ThemeProvider theme={theme}>
//         <Container component="main" maxWidth="xs">
//           {/* <CssBaseline /> */}
//           <Box
//             sx={{
//               marginTop: 8,
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//             }}
//           >
//             <Typography component="h1" variant="h5">
//               Add Subject
//             </Typography>
//             <Box
//               component="form"
//               onSubmit={this.handleSubmit}
//               noValidate
//               sx={{ mt: 3 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="name"
//                 label="Name"
//                 name="name"
//                 autoFocus
//                 value={this.state.name}
//                 onChange={this.nameInputHandler}
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Add Subject
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <LinkUI href="/home" variant="body2">
//                     Back to Home
//                   </LinkUI>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </ThemeProvider>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   user: state.user,
// });

// export default connect(mapStateToProps, {
//   getAdminDetails,
// })(AddSubject);

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import Alert from "../../../services/alert";
import Auth from "../../../services/Auth";
import { getAdminDetails } from "../../../redux/actions/loginAction";
import axios from "axios";
import apis from "../../../services/Apis";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import LinkUI from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // black
    },
  },
});

const AddSubject = ({ user, getAdminDetails }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
      // Redirect to login page if not authenticated
      return <Navigate to="/" />;
    } else if (!user.isLoggedIn) {
      // Fetch admin details if not available
      getAdminDetails();
    }
  }, [user.isLoggedIn]);

  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        apis.BASE + apis.ADD_SUBJECT,
        {
          name: name,
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
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Subject
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              value={name}
              onChange={nameInputHandler}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Subject
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
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, {
  getAdminDetails,
})(AddSubject);
