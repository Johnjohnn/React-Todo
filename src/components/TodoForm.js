import React from "react" ;


class TodoForm extends React.Component {
// constructor with state 
constructor(){
   super();
   this.state = {
       task: ""
   };
 }

 handleChanges = e => {
 // update state with each keystroke 
   this.setState({ task: e.target.value})

 };

// class property to submit form 
subitTask = e => {
  e.preventDefault();
  this.props.addTask(this.state.task);
  this.setState({ task: ""});


};

render() {
  return (
      <form onSubmit={this.submitTask}> 
        <input 
        type="text"
        name="task"
        value={this.state.task}
        onChange={this.handleChanges}
        />
        <button>Add Task</button>
    </form>
  );

  }
}
export default TodoForm;

























