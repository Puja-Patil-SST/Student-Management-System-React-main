import Alert from "./component/Alert";
import "./App.css";
import { useState } from "react";
import Navbar from "./component/Navbar";
import AddStudent from "./component/AddStudent";
// import DisplayStudent from './component/DisplayStudent';
import DisplayStudentNew from "./component/DisplayStudentNew";
import Show from "./component/Show";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";
import Home from "./component/Home";
import EditStudent from "./component/EditStudent";
import { AddNewStudent } from "./component/AddNewStudent";

const axios = require("axios");
const cookies = new Cookies();

function App() {
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
  const deleteStudent = (id) => {
    let check = window.confirm("Are you sure you want to delete this student?");
    if (check === true) {
      let prev = students;
      prev.splice(id, 1);
      setStudents(prev);
      cookies.remove("data", { path: "/" });
      cookies.set("data", prev, { path: "/" });
      showAlert("success", "Student deleted successfully");
    } else {
      showAlert("Student not deleted", "warning");
    }
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
              <Show
                showAlert={showAlert}
                deleteStudent={deleteStudent}
                students={students}
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditStudent
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

// import axios from "axios";
// import React from "react";
// import './App.css';
// // import { View, Text } from 'react';
// // const axios = require('axios');
// class App extends React.Component {

// 	// Constructor
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}

// 	// ComponentDidMount is used to
// 	// execute the code
// 	async componentDidMount() {
//     try{
//     const data=await axios.get('http://localhost:5000/student')
//       const data1=data.data
// 	  data1.map((items)=>{
// 		this.state.items.push(items)
// 	  })
//       this.state.DataisLoaded=true
//     console.log(this.state.items)
//     }
//     catch(err){
//       console.log(err)
//     }
// // 		axios.get(
// // "http://127.0.0.1:5000")
// // 			.then((res) => res.json())
// // 			.then((json) => {
// // 				this.setState({
// // 					items: json,
// // 					DataisLoaded: true
// // 				});
// // 			})
//       // console.log(this.items);
// 	}
// 	render() {
// 		const val = this.state.items;
// 		console.log(val)
// 		// const { items,DataisLoaded } = this.state;
// 		// if (!this.state.DataisLoaded) return <div>
// 		// 	<h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "App">

// 			<h1> Fetch data from an api in react </h1>
// 			<div>
// 						<p>{val.map((item)=>{console.log(item);return(<li>{item}</li>)})}</p>
// 						<p> items: </p>

// 			</div>

// 		</div>
// 	);
// }
// }

// export default App;
