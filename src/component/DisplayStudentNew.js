import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';
 
function DisplayStudentNew() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const getStudent = async ()=>{
            const res = await fetch("http://127.0.0.1:5000/student");
            const getData = await res.json();
            setData(getData);
            console.log(getData)
        }
        getStudent();
    },[]);
 
    // constructor(props) {
    //     super(props)   
    //     this.state = {
    //         records: []
    //     }
         
    // }
 
    // componentDidMount() {
    //     fetch('http://localhost:5000/student')
    //         .then(response => response.json())
    //         .then(records => {
    //             this.setState({
    //                 records: records
    //             })
    //             console.log("this.state", this.state.records)
    //         })
    //         .catch(error => console.log(error))
    // }
 
    // // renderListing() {
    //     let recordList = []
    //     this.state.records.map((record, i) => {
    //         return recordList.push(<li>{this.state.records[i]}</li>)
    //     })
        
    //     console.log(recordList)
    //     return recordList;
    // }
 
    
        return (<table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>name</th>
                    <th>id</th>
                    <th>age</th>
                </tr>
            </thead>
 
            <tbody>
                {this.state.records.map(record =>
                    <tr>
                        <td>{record.name}</td>
                        <td>{record.id}</td>
                        <td>{record.age}</td>
                    </tr>
                )}
            </tbody>
        </table>);
    
}
 
export default DisplayStudentNew;