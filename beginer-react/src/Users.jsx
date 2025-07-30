import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>User Count : {users.length}</h1>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
};

export default Users;
