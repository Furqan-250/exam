import React from "react";
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

class AddClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      section: "",
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
    // const { password, confirmPassword } = this.state;
    // if (password !== confirmPassword) {
    //   Alert("error", "Invalid Input", "Confirm Password does not match");
    // } else {
    axios
      .post(
        apis.BASE + apis.ADD_CLASS,
        {
          name: `${this.state.class} ${this.state.section}`,
          // class: this.state.class,
          // section: this.state.section,
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
        console.log("response", response);
        console.log("Data", response.data);
      });
    // }
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
            <Typography component="h1" variant="h4">
              Add Class
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
                    name="class"
                    required
                    fullWidth
                    id="class"
                    label="Class"
                    autoFocus
                    value={this.state.class}
                    onChange={this.handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="section"
                    label="Section"
                    name="section"
                    autoComplete="family-name"
                    value={this.state.section}
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
                Add Class
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
})(AddClass);
