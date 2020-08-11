import React from "react";

const list = props => {
  return (
    <div
      className={`list${props.list.completed ? " done" : ""}`}
      onClick={() => props.toggleDoList(props.list.id)}
    >
      <p>{props.list.name}</p>
    </div>
  );
};

export default list;
