import React, { Component } from 'react';

import ToDoAppList from './Components/ToDoAppList';
import AddNewTasks from './Components/AddNewTasks';

class App extends Component {
    constructor(){
        super();
        this.state = {
            tasksList: []
        }
    }

    componentWillMount(){

        let tasks = localStorage.getItem('storedTasks');
        if (tasks){
            this.setState({
                tasksList: JSON.parse(tasks)
            })
        }
        //
        // this.setState({
        //     tasksList: ['Get the job done', 'Do that again', 'Repeat']
        // })
    }

    updatedList(text){
        let updatedTasks = this.state.tasksList;
        updatedTasks.push(text);
        this.setState({tasksList: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    removeTask(text){
        let updatedTasks = this.state.tasksList;
        updatedTasks.splice(updatedTasks.indexOf(text), 1);
        this.setState({tasksList: updatedTasks});
        this.updateLocalStorage(updatedTasks);
    }

    updateLocalStorage(updatedTasks){
        console.log('task updated');
        localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
    }

  render() {

    return (
      <div className="App">
          <h3>ToDo App</h3>
          <AddNewTasks updatedList={this.updatedList.bind(this)}  />
          <ToDoAppList tasks={this.state.tasksList} remove={this.removeTask.bind(this)}/>
      </div>
    );
  }
}

export default App;
