import React from "react";

const Todo = ({ learn, isDone }) => {
  return (
    <li>
      {isDone ? "Finished " : "Work "} = {learn}
    </li>
  );
};

export default Todo;
