// import { withStyles } from "@material-ui/core/styles";
// import React from "react";
// import { connect } from "react-redux";
// import { Link, Navigate } from "react-router-dom";
// import {
//   logoutUser,
//   getAdminDetails,
// } from "../../../redux/actions/loginAction";
// import { getDashboardCount } from "../../../redux/actions/dashboardDetails";
// import Auth from "../../../services/Auth";
// import { HomepageHeader } from "../../basic/header/header";
// import logoImg from "../../basic/Homepage/main.jpg";
// import { MainCard } from "../Card/card";
// import TeacherImg from "../teacher.png";
// import StudentImg from "../student.jfif";
// import SubjectImg from "../subject.jfif";
// import TeacherTable from "../teacherTable/teacherTable";
// import SubjectTable from "../subjectTable/subjectTable";
// import StudentTable from "../studentTable/studentTable";
// import Sidebar from "../sidebar/sidebar";

// const useStyles = (theme) => ({
//   logout_btn: {
//     marginLeft: "80%",
//   },
//   headerMargin: {
//     marginTop: 63,
//   },
//   inlineblock: {
//     display: "inline-block",
//   },
//   linkbtn: {
//     color: "black",
//   },
// });

// class DashboardMain extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.expand = "none";
//   }

//   logout(obj) {
//     obj.props.logoutUser();
//     obj.forceUpdate();
//   }

//   handleTableExapand(type) {
//     console.log("handle table");
//     if (type === this.expand) {
//       this.expand = "none";
//     } else {
//       this.expand = type;
//     }
//     this.forceUpdate();
//   }

//   render() {
//     console.log(this.props.user);
//     if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
//       return <Navigate to="/" />;
//     } else if (!this.props.user.isLoggedIn) {
//       this.props.getAdminDetails();
//       return <div></div>;
//     } else {
//       if (!this.props.dashboardDetails.retrived) {
//         this.props.getDashboardCount();
//       }
//       let x;
//       if (this.expand === "Teacher") {
//         x = <TeacherTable />;
//       } else if (this.expand === "Student") {
//         x = <StudentTable />;
//       } else if (this.expand === "Subject") {
//         x = <SubjectTable />;
//       }
//       return (
//         <div>
//           <HomepageHeader title="Exam Portal" img={logoImg} />
//           <div className={this.props.classes.headerMargin}></div>

//           <div
//             className="main"
//             style={{
//               display: "flex",
//               width: "100%",
//               margin: "0",
//               padding: "0",
//             }}
//           >
//             <div className="lft">
//               <Sidebar />
//             </div>
//             <div className="rght">
//               <MainCard
//                 title="Teacher"
//                 value={this.props.dashboardDetails.teacherActive}
//                 total={
//                   this.props.dashboardDetails.teacherActive +
//                   this.props.dashboardDetails.teacherBlocked
//                 }
//                 image={TeacherImg}
//               />
//               <div className={this.props.classes.inlineblock}>
//                 <button>
//                   <Link to="/addTeacher" className={this.props.classes.linkbtn}>
//                     Add Teacher
//                   </Link>
//                 </button>
//                 <br />
//                 <button onClick={() => this.handleTableExapand("Teacher")}>
//                   Show
//                 </button>
//               </div>
//               <MainCard
//                 title="Student"
//                 value={this.props.dashboardDetails.studentActive}
//                 total={
//                   this.props.dashboardDetails.studentActive +
//                   this.props.dashboardDetails.studentBlocked
//                 }
//                 image={StudentImg}
//               />
//               <button onClick={() => this.handleTableExapand("Student")}>
//                 Show
//               </button>
//               <MainCard
//                 title="Subject"
//                 value={this.props.dashboardDetails.subjectActive}
//                 total={
//                   this.props.dashboardDetails.subjectActive +
//                   this.props.dashboardDetails.subjectBlocked
//                 }
//                 image={SubjectImg}
//               />
//               <div className={this.props.classes.inlineblock}>
//                 <button>
//                   <Link to="/addSubject" className={this.props.classes.linkbtn}>
//                     Add Subject
//                   </Link>
//                 </button>
//                 <br />
//                 <button onClick={() => this.handleTableExapand("Subject")}>
//                   Show
//                 </button>
//               </div>
//               {x}
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// const mapStateToProps = (state) => ({
//   user: state.user,
//   dashboardDetails: state.dashboardDetails,
// });

// export default withStyles(useStyles)(
//   connect(mapStateToProps, {
//     logoutUser,
//     getAdminDetails,
//     getDashboardCount,
//   })(DashboardMain)
// );

// import React from "react";
// import { connect } from "react-redux";
// import { Link, Navigate } from "react-router-dom";
// import {
//   logoutUser,
//   getAdminDetails,
// } from "../../../redux/actions/loginAction";
// import { getDashboardCount } from "../../../redux/actions/dashboardDetails";
// import Auth from "../../../services/Auth";
// import { HomepageHeader } from "../../basic/header/header";
// import logoImg from "../../basic/Homepage/main.jpg";
// import { MainCard } from "../Card/card";
// import TeacherImg from "../teacher.png";
// import StudentImg from "../student.jfif";
// import SubjectImg from "../subject.jfif";
// import TeacherTable from "../teacherTable/teacherTable";
// import SubjectTable from "../subjectTable/subjectTable";
// import StudentTable from "../studentTable/studentTable";
// import Sidebar from "../sidebar/sidebar";
// import { Outlet } from "react-router";
// import CssBaseline from "@mui/material/CssBaseline";

// import { withStyles } from "@material-ui/core/styles";

// const useStyles = (theme) => ({
//   logout_btn: {
//     marginLeft: "80%",
//     // backgroundColor: "red",
//   },
//   headerMargin: {
//     marginTop: 63,
//   },
//   inlineblock: {
//     display: "inline-block",
//   },
//   linkbtn: {
//     color: "black",
//   },
//   cover: {
//     height: "100vh",
//   },
// });

// class DashboardMain extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expandedType: "none",
//     };
//   }

//   logout(obj) {
//     obj.props.logoutUser();
//     obj.forceUpdate();
//   }

//   handleTableExpand(type) {
//     this.setState((prevState) => ({
//       expandedType: prevState.expandedType === type ? "none" : type,
//     }));
//   }

//   render() {
//     const { expandedType } = this.state;
//     const { user, dashboardDetails, classes } = this.props;

//     if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
//       return <Navigate to="/" />;
//     } else if (!user.isLoggedIn) {
//       this.props.getAdminDetails();
//       return <div></div>;
//     } else {
//       if (!dashboardDetails.retrived) {
//         this.props.getDashboardCount();
//       }

//       let expandedComponent;
//       if (expandedType === "Teacher") {
//         expandedComponent = <TeacherTable />;
//       } else if (expandedType === "Student") {
//         expandedComponent = <StudentTable />;
//       } else if (expandedType === "Subject") {
//         expandedComponent = <SubjectTable />;
//       }

//       return (
//         <div className={classes.cover}>
//           <HomepageHeader title="Exam Portal" img={logoImg} />
//           {/* <div className={classes.headerMargin}></div> */}

//           <div
//             className="main"
//             style={{
//               display: "flex",
//               width: "100%",
//               margin: "0",
//               padding: "0",
//             }}
//           >
//             <CssBaseline />
//             <div className="lft">
//               <Sidebar />
//             </div>
//             <div className="rght">
//               <MainCard
//                 title="Teacher"
//                 value={dashboardDetails.teacherActive}
//                 total={
//                   dashboardDetails.teacherActive +
//                   dashboardDetails.teacherBlocked
//                 }
//                 image={TeacherImg}
//               />
//               <div className={classes.inlineblock}>
//                 <button>
//                   <Link to="/home/addTeacher" className={classes.linkbtn}>
//                     Add Teacher
//                   </Link>
//                 </button>
//                 <br />
//                 <button onClick={() => this.handleTableExpand("Teacher")}>
//                   {expandedType === "Teacher" ? "Hide" : "Show"}
//                 </button>
//               </div>
//               <MainCard
//                 title="Student"
//                 value={dashboardDetails.studentActive}
//                 total={
//                   dashboardDetails.studentActive +
//                   dashboardDetails.studentBlocked
//                 }
//                 image={StudentImg}
//               />
//               <button onClick={() => this.handleTableExpand("Student")}>
//                 {expandedType === "Student" ? "Hide" : "Show"}
//               </button>
//               <MainCard
//                 title="Subject"
//                 value={dashboardDetails.subjectActive}
//                 total={
//                   dashboardDetails.subjectActive +
//                   dashboardDetails.subjectBlocked
//                 }
//                 image={SubjectImg}
//               />
//               <div className={classes.inlineblock}>
//                 <button>
//                   <Link to="/home/addSubject" className={classes.linkbtn}>
//                     Add Subject
//                   </Link>
//                 </button>
//                 <br />
//                 <button onClick={() => this.handleTableExpand("Subject")}>
//                   {expandedType === "Subject" ? "Hide" : "Show"}
//                 </button>
//               </div>
//               {expandedComponent}
//               {/* <div style={{ border: "1px solid black" }}>{expandedComponent}</div> */}
//               <div
//                 style={{
//                   display: "flex",
//                   flexGrow: "-moz-initial",
//                   width: "80vw",
//                   marginRight: "rigth side",
//                 }}
//               >
//                 <Outlet />
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
// }

// const mapStateToProps = (state) => ({
//   user: state.user,
//   dashboardDetails: state.dashboardDetails,
// });

// export default withStyles(useStyles)(
//   connect(mapStateToProps, {
//     logoutUser,
//     getAdminDetails,
//     getDashboardCount,
//   })(DashboardMain)
// );

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import {
  logoutUser,
  getAdminDetails,
} from "../../../redux/actions/loginAction";
import { getDashboardCount } from "../../../redux/actions/dashboardDetails";
import Auth from "../../../services/Auth";
import { HomepageHeader } from "../../basic/header/header";
import logoImg from "../../basic/Homepage/main.jpg";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router";

const DashboardMain = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const dashboardDetails = useSelector((state) => state.dashboardDetails);

  if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
    return <Navigate to="/" />;
  } else if (!user.isLoggedIn) {
    dispatch(getAdminDetails());
    return <div></div>;
  } else {
    if (!dashboardDetails.retrived) {
      dispatch(getDashboardCount());
    }

    return (
      <>
        <HomepageHeader title="Exam Portal" img={logoImg} />

        <div
          className="main"
          // style={{ display: "flex", width: "100%", margin: "0", padding: "0" }}
          style={mainStyle}
        >
          <div
            // style={{
            //   // background: "green",
            //   width: "15%",
            //   display: "flex",
            //   flexDirection: "column",
            // }}
            style={sidebarStyle}
          >
            <Sidebar />
          </div>

          <div
            // style={{  width: "85%" }}
            style={contentStyle}
          >
            <Outlet />
          </div>
        </div>
      </>
    );
  }
};

const mainStyle = {
  display: "flex",
  width: "100%",
  margin: "0",
  padding: "0",
};

const sidebarStyle = {
  width: "15%",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  height: "100vh",
};

const contentStyle = {
  width: "85%",
  padding: "20px",
  overflowY: "auto",
  height: "100vh",
};
export default DashboardMain;
