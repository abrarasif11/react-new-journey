import { useEffect, useState } from "react"

const Users = () => {
   const [users,setUsers] = useState([]);
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
   },[])
  return (
    <div>
        <h1>User Count : {users.length}</h1>
    </div>
  )
}

export default Users
