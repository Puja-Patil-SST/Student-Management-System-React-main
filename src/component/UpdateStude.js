// import React from 'react'
// import { useState } from 'react'

// export default function UpdateStude() {
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     let item = { name, age };
//     console.warn("item", item)
    
//     fetch("http://localhost:5000/student/${id}", {
//       method: 'PUT',
//       headers:{
//         'Accept':'application/json',
//         'Content-Type':'application/json'
//       },
//       body:JSON.stringify(item)
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.warn(resp)
//         getUsers()
//       })
//     })
  
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />{" "}
//         <br />
//         <br />
//         <input
//           type="text"
//           value={id}
          
//         />{" "}
//         <br />
//         <br />
//         <input
//           type="text"
//           value={age}
//           onChange={(e) => {
//             setAge(e.target.value);
//           }}
//         />{" "}
//         <br />
//         <br />
//         <button onClick={updateUser}>Update User</button>
//       </div>
//     </div>
//   );
// }

