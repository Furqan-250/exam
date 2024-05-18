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
import { MainCard } from "../Card/card";
import TeacherImg from "../teacher.png";
import StudentImg from "../student.jfif";
import SubjectImg from "../subject.jfif";
import TeacherTable from "../teacherTable/teacherTable";
import SubjectTable from "../subjectTable/subjectTable";
import StudentTable from "../studentTable/studentTable";
import ClassesTable from "../classesTable/classesTable";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import Table from "./Table";

const DashboardMainContainer = styled("div")({
  // Your styles here
});

function Dashboard() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const dashboardDetails = useSelector((state) => state.dashboardDetails);

  const [expandedType, setExpandedType] = useState("none");

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleTableExpand = (type) => {
    setExpandedType((prevType) => (prevType === type ? "none" : type));
  };

  if (!Auth.retriveToken() || Auth.retriveToken() === "undefined") {
    return <Navigate to="/" />;
  } else if (!user.isLoggedIn) {
    dispatch(getAdminDetails());
    return <div></div>;
  } else {
    if (!dashboardDetails.retrived) {
      dispatch(getDashboardCount());
    }

    let expandedComponent;
    if (expandedType === "Teacher") {
      expandedComponent = <TeacherTable />;
    } else if (expandedType === "Student") {
      expandedComponent = <StudentTable />;
    } else if (expandedType === "Subject") {
      expandedComponent = <SubjectTable />;
    } else if (expandedType === "Classes") {
      expandedComponent = <ClassesTable />;
    }

    return (
      <DashboardMainContainer>
        {/* <CssBaseline /> */}
        <div
        //  style={{ display: "flex" }}
        >
          <div
          //   style={{ background: 'red' }}
          >
            <MainCard
              title="Teacher"
              value={dashboardDetails.teacherActive}
              total={
                dashboardDetails.teacherActive + dashboardDetails.teacherBlocked
              }
              image={TeacherImg}
            />
            <div style={{ display: "inline-block" }}>
              <button>
                <Link to="/home/addTeacher">Add Teacher</Link>
              </button>
              <br />
              <button onClick={() => handleTableExpand("Teacher")}>
                {expandedType === "Teacher" ? "Hide" : "Show"}
              </button>
            </div>
            <MainCard
              title="Student"
              value={dashboardDetails.studentActive}
              total={
                dashboardDetails.studentActive + dashboardDetails.studentBlocked
              }
              image={StudentImg}
            />
            <div style={{ display: "inline-block" }}>
              <button onClick={() => handleTableExpand("Student")}>
                {expandedType === "Student" ? "Hide" : "Show"}
              </button>
            </div>
            <MainCard
              title="Subject"
              value={dashboardDetails.subjectActive}
              total={
                dashboardDetails.subjectActive + dashboardDetails.subjectBlocked
              }
              image={SubjectImg}
            />
            <div style={{ display: "inline-block" }}>
              <button>
                <Link to="/home/addSubject">Add Subject</Link>
              </button>
              <br />
              <button onClick={() => handleTableExpand("Subject")}>
                {expandedType === "Subject" ? "Hide" : "Show"}
              </button>
            </div>
            {/* {expandedComponent} */}

            <MainCard
              title="classes"
              value={dashboardDetails.classesActive}
              total={
                dashboardDetails.classesActive + dashboardDetails.classesBlocked
              }
              image={SubjectImg}
            />
            <div style={{ display: "inline-block" }}>
              <button>
                <Link to="/home/addClasses">Add Classes</Link>
              </button>
              <br />
              <button onClick={() => handleTableExpand("Classes")}>
                {expandedType === "Classes" ? "Hide" : "Show"}
              </button>
            </div>
            {expandedComponent}
          </div>
        </div>
        <Table />
      </DashboardMainContainer>
    );
  }
}

export default Dashboard;
