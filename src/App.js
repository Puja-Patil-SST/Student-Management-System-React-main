import Alert from "./component/Alert";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Home from "./component/Home";
import EditStudentNew from "./component/EditStudentNew";
import { AddNewStudent } from "./component/AddNewStudent";
import ShowNew from "./component/ShowNew";

const axios = require("axios");
const cookies = new Cookies();

function App() {
  console.log(process.env.REACT_APP_VERSION);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  var c = [];
  if (cookies.get("data")) {
    c = cookies.get("data");
  } else {
    cookies.set("data", [], { path: "/" });
  }

  const [students, setStudents] = useState(c);
  const newStudent = (student) => {
    let prev = students;
    prev.push(student);
    setStudents(prev);
    cookies.remove("data", { path: "/" });
    cookies.set("data", prev, { path: "/" });
    showAlert("Student added successfully", "success");
  };

  const deleteStudent = async (id) => {
    let check = window.confirm("Are you sure you want to delete this student?");
    console.log(id);
    const response = await fetch(`http://localhost:5000/del_student/${id}`, {
      method: "DELETE",
    });
    console.log(response);
    window.location.reload();
  };

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/add"
            element={
              <AddNewStudent showAlert={showAlert} newStudent={newStudent} />
            }
          />
          {/* <Route path="/display" element={<DisplayStudentNew showAlert={showAlert} deleteStudent={deleteStudent} students={students} />}/> */}
          <Route
            path="/display"
            element={
              <ShowNew
                showAlert={showAlert}
                deleteStudent={deleteStudent}
                students={students}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditStudentNew
                students={students}
                showAlert={showAlert}
                setStudents={setStudents}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
