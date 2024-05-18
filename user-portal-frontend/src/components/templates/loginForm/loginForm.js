import React from "react";
import TextField from "@material-ui/core/TextField";
import "./loginForm.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { loginRequestAction } from "../../../redux/actions/loginAction";
import { connect } from "react-redux";

const useStyles = () => ({
  inputfield: {
    display: "block",
    margin: "20px",
  },
  loginbtn: {
    margin: "0px 0px",
    width: "50%",
  },
  imgWrapper: {},
  image: {
    width: "150px",
    borderRadius: "50%",
    padding: "0",
  },
  
});

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  emailInputHandler = (event) => {
    this.setState({
      ...this.state,
      email: event.target.value,
    });
  };

  passwordInputHandler = (event) => {
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginRequestAction(this.state);
  }

  render() {
    return (
      <form
        className="form-class"
        onSubmit={(event) => this.handleSubmit(event)}
        style={{
          backgroundImage: `url("https://www.veeforu.com/wp-content/uploads/2022/09/Blue-wedding-invitation-card-background-hd.-1024x576.jpg")`,
        }}
      >
        <div className={this.props.classes.imgWrapper}>
          <img
            src="https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/286727969_110625515006632_4797778485517110269_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=___XbS0n5_MAb7RlURF&_nc_ht=scontent.fisb6-2.fna&oh=00_AfAP4UAQrjnxmfhHKVKCxozjACXXBPc4cuA-IbWP0vhpWA&oe=662EB6B5"
            className={this.props.classes.image}
          />
          <h3 className={this.props.classes.img}>Examination System</h3>
          <p className={this.props.classes.img}>I.M.C.G F-6/2 Islamabad</p>
        </div>
        <h3 style={{ fontWeight: "500" }}>Teacher Login</h3>
        <TextField
          variant="outlined"
          size="small"
          color="primary"
          className={this.props.classes.inputfield}
          label="Email"
          placeholder="enter email"
          type="email"
          error_text=""
          value={this.state.email}
          onChange={(event) => this.emailInputHandler(event)}
          required
        />

        <TextField
          variant="outlined"
          size="small"
          color="primary"
          label="Password"
          className={this.props.classes.inputfield}
          placeholder="enter password"
          type="password"
          error_text=""
          value={this.state.password}
          onChange={(event) => this.passwordInputHandler(event)}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={this.props.classes.loginbtn}
        >
          Login
        </Button>
      </form>
    );
  }
}

const mapStatetoProps = (state) => ({
  state: state.user,
});

export default withStyles(useStyles)(
  connect(mapStatetoProps, {
    loginRequestAction,
  })(LoginForm)
);
