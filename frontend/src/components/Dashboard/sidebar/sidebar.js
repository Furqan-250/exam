// import React from "react";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const style = {
//     sidebar: {
//       display: "flex",
//       flexDirection: "column",
//       width: "200px",
//       backgroundColor: "white",
//       height: "100vh",
//       padding: "10px",
//       height: "89.96vh",
//       backgroundColor: "#1987d6",
//     },
//     row: {
//       display: "flex",
//       justifyContent: "space-between",
//       padding: "0px ",
//       color: "#f1fffc",
//       flexDirection: "column",
//       gap: "20px",
//     },
//     row_h4: {
//       padding: "0 7%",
//       width: "100%",
//       color: "#f1fffc",
//       //   whiteSpace: "nowrap",
//     },
//     logo_container: {
//       width: "150px" /* Set width */,
//       height: "150px" /* Set height */,
//       borderRadius: "50%" /* Make it circular */,
//       overflow: "hidden" /* Hide overflow */,
//       //   border: "2px solid #000" /* Optional: Add border */,
//     },
//     logo_image: {
//       width: "100%" /* Make image fill its container */,
//       height: "auto" /* Maintain aspect ratio */,
//     },
//     active_link: {
//       fontWeight: "bold",
//       color: "black",
//     },
//   };
//   return (
//     <>
//       <div style={style.sidebar}>
//         <div style={style.logo_container}>
//           <img
//             style={style.logo_image}
//             src="https://scontent.fisb6-2.fna.fbcdn.net/v/t39.30808-6/286727969_110625515006632_4797778485517110269_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=___XbS0n5_MAb7RlURF&_nc_ht=scontent.fisb6-2.fna&oh=00_AfAP4UAQrjnxmfhHKVKCxozjACXXBPc4cuA-IbWP0vhpWA&oe=662EB6B5"
//           ></img>
//         </div>
//         <ul
//           style={{
//             listStyleType: "none",
//             padding: 0,
//             margin: 0,
//             textDecoration: "none",
//             color: "inherit",
//           }}
//         >
//           <div style={style.row}>
//             <li style={{ listStyleType: "none", padding: 0, margin: 0 }}>
//               <NavLink
//                 to="/home"
//                 activeClassName="active-link"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <i class="fa-brands fa-bitbucket"></i>
//                 <span style={style.row_h4}>Admin Dashboard</span>
//               </NavLink>
//             </li>
//           </div>

//           <div style={style.row}>
//             <li>
//               <NavLink
//                 to="/addTeacher"
//                 activeClassName="active_link"
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <i class="fa-solid fa-user"></i>{" "}
//                 <span style={style.row_h4}>Teacher</span>
//               </NavLink>
//             </li>
//           </div>

//           <div style={style.row}>
//             <li>
//               <NavLink to="/#">
//                 <i class="fa-regular fa-bookmark"></i>{" "}
//                 <span style={style.row_h4}>Classes</span>
//               </NavLink>
//             </li>
//           </div>

//           <div style={style.row}>
//             <li>
//               <NavLink to="/#">
//                 <i class="fa-solid fa-book"></i>{" "}
//                 <span style={style.row_h4}>Subjects</span>
//               </NavLink>
//             </li>
//           </div>

//           <div style={style.row}>
//             <li>
//               <NavLink to="/#">
//                 <i class="fa-solid fa-user"></i>{" "}
//                 <span style={style.row_h4}>Students</span>
//               </NavLink>
//             </li>
//           </div>

//           <div style={style.row}>
//             <li>
//               <NavLink to="/#">
//                 <i class="fa-solid fa-calendar"></i>{" "}
//                 <span style={style.row_h4}>Exam Scheduling</span>
//               </NavLink>
//             </li>
//           </div>

//           <div style={style.row}>
//             <li>
//               <NavLink to="/#">
//                 <i class="fa-solid fa-chart-line"></i>{" "}
//                 <span style={style.row_h4}>Reports</span>
//               </NavLink>
//             </li>
//           </div>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpg";
// console.log(logo);

const Sidebar = () => {
  const style = {
    sidebar: {
      display: "flex",
      flexDirection: "column",
      width: "200px",
      //   backgroundColor: "white",
      height: "100vh",
      padding: "10px",
      //   height: "89.96vh",
      backgroundColor: "#1987d6",
      overflow: "auto",
      // flex:6
    },
    logo_container: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      overflow: "hidden",
    },
    logo_image: {
      width: "100%",
      height: "auto",
    },
    active: {
      fontWeight: "bold",
      color: "black",
      border: "2px solid black",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      color: "#f1fffc",
      flexDirection: "column",
      gap: "20px",
    },
    row_h4: {
      padding: "0 7%",
      width: "100%",
      color: "#f1fffc",
    },
  };

  return (
    <div style={style.sidebar}>
      <div style={style.logo_container}>
        <img style={style.logo_image} src={logo} alt="logo"></img>
      </div>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <li style={style.row}>
          <NavLink
            to="/home"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fa-brands fa-bitbucket"></i>
            <span style={style.row_h4}>Admin Dashboard</span>
          </NavLink>
        </li>
        <li style={style.row}>
          <NavLink
            to="/home/addTeacher"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fa-solid fa-user"></i>{" "}
            <span style={style.row_h4}>Teacher</span>
          </NavLink>
        </li>
        <li style={style.row}>
          <NavLink
            to="/home/addClasses"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fa-solid fa-book"></i>{" "}
            <span style={style.row_h4}>Classes</span>
          </NavLink>
        </li>
        <li style={style.row}>
          <NavLink
            to="/home/addSubject"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            <span style={style.row_h4}>Add Subject</span>
          </NavLink>
        </li>

        <li style={style.row}>
          <NavLink
            to="/#"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fa-solid fa-user"></i>{" "}
            <span style={style.row_h4}>Students</span>
          </NavLink>
        </li>
        <li style={style.row}>
          <NavLink
            to="/#"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fa-solid fa-calendar"></i>{" "}
            <span style={style.row_h4}>Exam Scheduling</span>
          </NavLink>
        </li>
        <li style={style.row}>
          <NavLink
            to="/#"
            activeClassName="active"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <i className="fa-solid fa-chart-line"></i>{" "}
            <span style={style.row_h4}>Reports</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
