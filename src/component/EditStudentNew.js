import React from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookies = new Cookies();

export default function EditStudentNew(props) {
  //   const Navigate = useNavigate();
  document.title = "Edit Student Details";
  console.log("Props", props.id);
  var { id } = useParams();
  id = parseInt(id);
  let a = props.students;
  const [student, setStudent] = useState({
    name: props.name,
    id: props.id,
    age: props.age,
  });
  console.log(student);
  //   const [name, setName] = useState(a[id].name);
  //   // const [lname, setLname] = useState(a[id].lname);
  //   // const [phone, setPhone] = useState(a[id].phone);
  //   // const [address, setAddress] = useState(a[id].address);
  //   const [roll_no, setRoll_No] = useState(a[id].roll_no);
  //   const [age, setAge] = useState(a[id].age);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.patch("http://localhost:5000/update_student", student.name);
    console.log(student);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Edit Student Details</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="validationDefaultid" className="form-label">
            id
          </label>
          <input
            type="text"
            className="form-control"
            name="id"
            onChange={handleChange}
            aria-describedby="inputGroupPrepend2"
            required
          />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationDefaultAge" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            name="age"
            onChange={handleChange}
            aria-describedby="inputGroupPrepend2"
            required
          />
        </div>
        <div className="col-12">
          <button className="btn btn-success" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
