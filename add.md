import { useState } from "react"

export const AddNewStudent = () => {
const [student, setStudent] = useState({
name: "",
id: 0,
age: 0
})
const handleChange = (e) => {
const name = e.target.name;
const value = e.target.value;
setStudent({...student, [name]: value})
}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("student", student)
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} name="name" id="" placeholder="name" />
                <input type="number" onChange={handleChange} name="id" id="" placeholder="id" />
                <input type="number" onChange={handleChange} name="age" id="" placeholder="age" />
                <input type="submit"/>
            </form>
        </>
    )

}
