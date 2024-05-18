// import { connect } from "react-redux";
// import React from "react";
// import {
//   getClassesDetails,
//   ClassesToggleStatus,
// } from "../../../redux/actions/classesDetails";
// import "./classesTable.css";

// class ClassesTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   handleStatusChange(status, id) {
//     this.props.ClassesToggleStatus(status, id, this.props.getClassesDetails);
//   }

//   buttonTextBasedOnStatus(status) {
//     if (status === true) {
//       return "block";
//     } else {
//       return "unblock";
//     }
//   }

//   render() {
//     if (this.props.classes.retrived === false) {
//       this.props.getClassesDetails();
//       return <div>Collecting data</div>;
//     }

//     return (
//       <div className="main">
//         <h2 className="title">Classes</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.classes.list.map((val, key) => {
//               return (
//                 <tr key={key}>
//                   <td>{val.Classes}</td>
//                   <td>{val.status.toString()}</td>

//                   <td>
//                     <button
//                       onClick={() =>
//                         this.handleStatusChange(val.status, val.id)
//                       }
//                     >
//                       {this.buttonTextBasedOnStatus(val.status)}
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   classes: state.classes,
// });

// export default connect(mapStateToProps, {
//   getClassesDetails,
//   ClassesToggleStatus,
// })(ClassesTable);

import { connect } from "react-redux";
import React, { useEffect } from "react";
import {
  getClassesDetails,
  ClassesToggleStatus,
} from "../../../redux/actions/classesDetails";
import "./classesTable.css";

const ClassesTable = ({ classes, getClassesDetails, ClassesToggleStatus }) => {
  useEffect(() => {
    if (!classes || !classes.retrieved) {
      getClassesDetails();
    }
  }, [classes, getClassesDetails]);

  const handleStatusChange = (status, id) => {
    ClassesToggleStatus(status, id);
  };

  // Add a check to ensure classes is defined before logging
  useEffect(() => {
    if (classes) {
      console.log("table", classes);
    }
  }, [classes]);

  // console.log("table", classes);

  const buttonTextBasedOnStatus = (status) => {
    return status ? "Block" : "Unblock";
  };
  // console.log("sub", getClassesDetails());

  if (!classes) {
    // Handle case when classes is null or undefined
    return null;
  }

  return (
    <div className="main">
      <h2 className="title">Classes</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.list.map((val) => (
            <tr key={val.id}>
              <td>{val.name}</td>
              <td>{val.status.toString()}</td>
              <td>
                <button onClick={() => handleStatusChange(val.status, val.id)}>
                  {buttonTextBasedOnStatus(val.status)}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  classes: state.classes,
});

export default connect(mapStateToProps, {
  getClassesDetails,
  ClassesToggleStatus,
})(ClassesTable);
