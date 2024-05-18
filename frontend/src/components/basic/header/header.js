// import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import LogoutButton from "../logout/logout";
// import {
//   createTheme,
//   makeStyles,
//   ThemeProvider,
// } from "@material-ui/core/styles";
// import "./header.css";

// const useStyles = makeStyles({
//   logoimg: {
//     margin: 0,
//     padding: 0,
//     height: 50,
//   },
//   name: {
//     margin: 20,
//     color: "#07cfda",
//   },
//   logoutBtn: {
//     marginLeft: "auto", // Align logout button to the right
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#00000077",
//     },
//   },
// });

// export const HomepageHeader = (props) => {
//   const classes = useStyles();
//   return (

//       <ThemeProvider theme={theme}>
//         <AppBar position="static">
//           <Toolbar>
//             <img src={props.img} alt="Logo" className={classes.logoimg} />
//             <div className={classes.name}>{props.title}</div>
//             <div className={classes.logoutBtn}>
//               <LogoutButton />
//             </div>
//           </Toolbar>
//         </AppBar>
//       </ThemeProvider>

//   );
// };

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import LogoutButton from "../logout/logout";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles({
  logoimg: {
    margin: 0,
    padding: 0,
    height: 50,
  },
  name: {
    margin: 20,
    color: "#07cfda",
  },
  logoutBtn: {
    marginLeft: "auto", // Align logout button to the right
  },
});

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#00000077",
//     },
//   },
// });

export const HomepageHeader = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider style={{ color: "#00000077" }}>
      <AppBar position="static">
        <Toolbar>
          <img src={props.img} alt="Logo" className={classes.logoimg} />
          <div className={classes.name}>{props.title}</div>
          <div className={classes.logoutBtn}>
            <LogoutButton />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
