import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";


function Show() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getStudent = async () => {
      const res = await fetch("http://localhost:5000/student");
      const getdata = await res.json();
      setData(getdata);
      console.log(getdata);
    };

    getStudent();
  },[]);


  return (
    <React.Fragment>
      <Container>
        <div className="row">
          <div className="col-sm-8 text-success">
            <h5 className="p-3 fw-bold text-white">
              Fetch Data from MYSQL Database in Reactjs
            </h5>
          
            <table className="table table-bordered text-white">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Id </th>
                  <th>Age</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {data.map((getstud, i) => (
                  <tr key={i}>
                    <td>{getstud[0]}</td>
                    <td> {getstud[1]}</td>
                    <td> {getstud[2]}</td>
                    {/* <td><button href="" className="btn btn-success"> View </button> </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>      
      </Container>
    </React.Fragment>
  );
}

export default Show;