// import { connect } from "react-redux";
// import React from "react";
// import {
//   getSubjectDetails,
//   SubjectToggleStatus,
// } from "../../../redux/actions/subjectDetails";
// import "./subjectTable.css";

// class SubjectTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   handleStatusChange(status, id) {
//     this.props.SubjectToggleStatus(status, id, this.props.getSubjectDetails);
//   }

//   buttonTextBasedOnStatus(status) {
//     if (status === true) {
//       return "block";
//     } else {
//       return "unblock";
//     }
//   }

//   render() {
//     if (this.props.subjects.retrived === false) {
//       this.props.getSubjectDetails();
//       return <div>Collecting data</div>;
//     }

//     return (
//       <div className="main">
//         <h2 className="title">Subjects</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.subjects.list.map((val, key) => {
//               return (
//                 <tr key={key}>
//                   <td>{val.subject}</td>
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
//   subjects: state.subjects,
// });

// export default connect(mapStateToProps, {
//   getSubjectDetails,
//   SubjectToggleStatus,
// })(SubjectTable);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getSubjectDetails,
  SubjectToggleStatus,
} from "../../../redux/actions/subjectDetails";
import "./subjectTable.css";

const SubjectTable = ({ subjects, getSubjectDetails, SubjectToggleStatus }) => {
  useEffect(() => {
    if (!subjects.retrieved) {
      getSubjectDetails();
    }
  }, [subjects.retrieved]);

  const handleStatusChange = (status, id) => {
    SubjectToggleStatus(status, id, getSubjectDetails);
  };

  const buttonTextBasedOnStatus = (status) => {
    return status ? "block" : "unblock";
  };
  console.log("sub", subjects);

  return (
    <div className="main">
      <h2 className="title">Subjects</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {subjects.list.map((val, key) => (
            <tr key={key}>
              <td>{val.subject}</td>
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
  subjects: state.subjects,
});

export default connect(mapStateToProps, {
  getSubjectDetails,
  SubjectToggleStatus,
})(SubjectTable);
