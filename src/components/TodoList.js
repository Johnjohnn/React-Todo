// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import list from "./Todo";

const TodoList = props => {
  // for sorting the list based on whether an item has been purchased or not
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="todo-list">
      {props.dolist.map(list => (
        <list key={list.id} list={list} toggleDoList={props.toggleDoList} />
      ))}
      <button className="clear-btn" onClick={props.clearcompleted}>
        Clear Compleated taks
      </button>
    </div>
  );
};

export default TodoList;