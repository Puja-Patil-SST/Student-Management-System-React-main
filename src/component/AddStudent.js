import axios from 'axios';
import React, { Component } from 'react'


export default class AddStudent extends Component {
    
    constructor() {
        super();
        this.state = {
            name: '',
            roll_no: '',
            age: '',
        }
        document.title = "Add Student";
      }
    handleSubmit = (e) => {
        e.preventDefault();
        let { name, roll_no, age } = this.state;

        if(!/^[a-zA-Z]+$/.test(name)) {
            this.setState({
                name: ''
            })
            this.props.showAlert('Name should be only alphabets', 'danger');
            return;
        }
        // if(!/^[a-zA-Z]+$/.test(lname)) {
        //     this.setState({
        //         lname: ''
        //     })
        //     this.props.showAlert('Last name should be only alphabets', 'danger');
        //     return;
        // }
        // if(!/^[1-9][0-9]{9}$/.test(phone)) {
        //     this.setState({
        //         phone: ''
        //     })
        //     this.props.showAlert('Phone number should be only numbers and contain 10 digit', 'danger');
        //     return;
        // }
        if(!/^[0-9]+$/.test(roll_no)) {
            this.setState({
                roll_no: ''
            })
            this.props.showAlert('Roll_no should be only numbers', 'danger');
            return;
        }
        if(!/^[0-9]+$/.test(age)) {
            this.setState({
                age: ''
            })
            this.props.showAlert('Age should be only numbers', 'danger');
            return;
        }
        let student = {
            name,
            roll_no,
            age
        }
        this.props.newStudent(student);
        this.setState({
            name: '',
            roll_no: '',
            age: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.roll_no]: e.target.value,
            [e.target.age] :  e.target.value
        })
    }
    // handleClick=async()=>{
    //     await axios.post("http://localhost:5000/add_student",this.setState)
        

    // }
      
  render() {
    return (
        <div className="container">
            <h1 className='text-center mb-5'>Add Student Details</h1>
            <form className="row g-3" onSubmit={this.handleSubmit}>
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} id="validationDefault01" required/>
                </div>
                {/* <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" name="lname" value={this.state.lname} onChange={this.handleChange} id="validationDefault02" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationPhone" className="form-label">Phone No.</label>
                    <div className="input-group has-validation">
                        <span className="input-group-text text-white" id="inputGroupPrepend3">+91</span>
                        <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} id="validationPhone" required/>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} id="validationAddress" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} id="validationEmail" required/>
                </div>*/}
                <div className="col-md-3"> 
                    <label htmlFor="validationDefaultroll_no" className="form-label">Roll_no</label>
                    <input type="text" className="form-control" name="roll_no" value={this.state.roll_no} onChange={this.handleChange} id="validationDefaultroll_no"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-md-3"> 
                    <label htmlFor="validationDefaultAge" className="form-label">Age</label>
                    <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.handleChange} id="validationDefaultAge"  aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-12">
                    <button className="btn btn-success" type="submit">Submit</button>
                </div>
            </form>
        </div>
      )
  }
}
