import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditStudentNew from "./EditStudentNew";

function ShowNew(props) {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([]);
  console.log(process.env.REACT_APP_DISPLAY);

  useEffect(() => {
    const getStudent = async () => {
      // Create environment variable for accessing api
      const res = await fetch(process.env.REACT_APP_DISPLAY);
      const getdata = await res.json();
      setData(getdata);
      console.log(getdata);
    };
    getStudent();
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <h1 className="text-center mb-5">Student Details</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Id</th>
              <th scope="col">Age</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((getstud, i) => (
              <tr key={i}>
                {edit ? (
                  <input placeholder="enter name" />
                ) : (
                  <td>{getstud[0]}</td>
                )}
                <td> {getstud[1]}</td>
                <td> {getstud[2]}</td>
                {/* <td
                  className="text-decoration-none text-center"
                  onClick={() => setEdit(true)}
                >
                  <Link to={"/edit/" + i} id={i.id}>
                    ✎
                  </Link>
                </td> */}
                <td
                  className="text-decoration-none text-center"
                  onClick={() => {
                    setEdit(true);
                    <EditStudentNew studId={getstud[1]} />;
                  }}
                >
                  <Link to={"/edit/" + i}>✎</Link>
                </td>
                <td
                  className="text-center cursor"
                  onClick={() => {
                    const res = props.deleteStudent(getstud[1]);
                  }}
                >
                  🗑
                </td>

                {/* <td><button href="" className="btn btn-success"> View </button> </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default ShowNew;
