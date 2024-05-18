import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../../redux/actions/loginAction";

class LogoutButton extends React.Component {
  logout() {
    this.props.logoutUser();
  }

  render() {
    return (
      <button onClick={this.logout.bind(this)} style={{backgroundColor:'rgb(25, 135, 214)',borderRadius:'10px',padding:'5px',border:'none'}}>Logout</button>
    );
  }
}

export default connect(null, { logoutUser })(LogoutButton);
