import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
export class Home extends React.Component{
    
   constructor(){
        super();
        
        this.state = { 
          todos: [
            {done: false, title: 'Make the bed', id: (Math.random()*10)},
            {done: false, title: 'Wash my hands', id: (Math.random()*10)},
            {done: false, title: 'Eat', id: (Math.random()*10)},
            {done: false, title: 'Walk the dog', id: (Math.random()*10)}
          ],
          taskInput: ''
        };
    }
    
    handleFormSubmit(e) {
    //console.log("Creating task with title: ",this.state.taskInput);
      e.preventDefault();
      this.setState({
        todos: this.state.todos.concat([{
            title: this.state.taskInput,
            done: false,
            id: (Math.random()*10)
          }])
      });
      this.setState({taskInput: ''});
      return false;
    }
    
    deleteTask(taskId){
        this.setState({
            todos: this.state.todos.filter((task) => task.id!=taskId)
        });
    }

  render() {
    var tasksToRender = this.state.todos.map((task) => {
    return (
        <li key={task.id}>
            <div className="view">
                <label>{task.title}</label>
                <button className="destroy" onClick={() => this.deleteTask(task.id)}></button>
            </div>
        </li>);
    });
                return (
                    <section className="todoapp">
                        <header className="header">
                            <h1>todos</h1>
                            <form onSubmit={this.handleFormSubmit.bind(this)}>
                                <input
                            autoFocus={true}
                          className="new-todo"
                          placeholder="What needs to be done?"
                          value={this.state.taskInput}
                          onChange={(evt) => this.setState({ taskInput: evt.target.value}) }
                />
                            </form>
                        </header>
                        <section className="main">
                            <ul className="todo-list">
                                {tasksToRender}
                            </ul>
                        </section>
                        <footer className="footer">
                            <span className="todo-count">
                                <strong>
                                    {this.state.todos.filter(key => !key.done).length}
                                </strong> item left
                            </span>
                        </footer>
                    </section>
    );
  }
}
