import { useState } from "react";
import axios from "axios";

export const AddNewStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    id: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/add_student", student);
    console.log(student);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-5">Add Student Details</h1>
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
};
