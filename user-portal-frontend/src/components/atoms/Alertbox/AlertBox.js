// import React from 'react';
// import Alert from '@material-ui/lab/Alert';
// import AlertTitle from '@material-ui/lab/AlertTitle';
// import { connect } from 'react-redux';
// import { clearAlert } from '../../../redux/actions/alertAction';

// class AlertBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//   }

//   render() {
//     if(this.props.alertDetails.isAlert) {
//       return(
//         <Alert severity={this.props.alertDetails.type} onClose={this.props.clearAlert}>
//            <AlertTitle>{this.props.alertDetails.title}</AlertTitle>
//         {this.props.alertDetails.message}
//         </Alert>)
//     }
//     else {

//       return(<div></div>)
//     }
//   }
// }

// const mapStatetoProps = state => ({
//   alertDetails : state.alertDetails
// })

// export default connect(mapStatetoProps,{
//   clearAlert
// })(AlertBox);

import React from "react";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import { useDispatch, useSelector } from "react-redux";
import { clearAlert } from "../../../redux/actions/alertAction";

const AlertBox = () => {
  const dispatch = useDispatch();
  const alertDetails = useSelector((state) => state.alertDetails);

  if (!alertDetails.isAlert) {
    return <div></div>;
  }

  return (
    <Alert severity={alertDetails.type} onClose={() => dispatch(clearAlert())}>
      <AlertTitle>{alertDetails.title}</AlertTitle>
      {alertDetails.message}
    </Alert>
  );
};

export default AlertBox;
