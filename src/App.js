import React from 'react';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"


const doList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];





class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor(){       // constructor with state 
   super();
   this.state ={
   doList 

     }
 


  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
toggleDoList = taskId => {     // 1: first find the item that you want to toggle . 


console.log (taskId)             // 2: Toggle the done task on todo list  . 


this.setState({
  // build a new state object each time 
doList: this.state.doList.map(list =>{
if (taskId === list.id) {
 return {
   // return the list with compleated task toggled 
 ...list,
   completed: !list.completed
 }
}

return list


    })
  
  
  })
};
// class method to add a task on the List  
addTask = list => {
const newTask ={
task: list,
id: Date.now(),
completed: false

};
this.setState({
doList: [...this.state.doList, newTask]

})

};
clearCompleted = e => {
  e.preventDefault();
  this.setState({
    doList: this.state.doList.filter(list => !list.completed)
  })

};



  render() {
    return (
      <div className="App">
          <div className="header">  
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        </div>
         <TodoList   
         doList={this.state.doList}
         toggleDoList={this.toggleDoList}
         clearCompleted={this.clearCompleted}
         />

      </div>
    );
  }
}
export default App;

