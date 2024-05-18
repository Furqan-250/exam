import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/basic/Homepage/Homepage";
import DashboardMain from "./components/Dashboard/Main/dashboardMain";
import StudentRegister from "./components/StudentRegister/StudentRegisterPage/studentRegister";
import AddTeacher from "./components/Dashboard/AddTeacher/AddTeacher";
import AddSubject from "./components/Dashboard/AddSubject/AddSubject";
import Dashboard from "./components/Dashboard/Main/Dashboard";
import Classes from "./components/Dashboard/AddClasses/Classes";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/home" element={<DashboardMain />}>
          <Route index element={<Dashboard />} />
          <Route path="/home/register" element={<StudentRegister />} />
          <Route path="/home/addTeacher" element={<AddTeacher />} />
          <Route path="/home/addSubject" element={<AddSubject />} />
          <Route path="/home/addClasses" element={<Classes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
