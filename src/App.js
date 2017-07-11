import React, { Component } from 'react';
import './App.css';
import {initialData} from './data/toDoInitial';
import ToDoList from './components/ToDoList';
import AddItem from './components/AddItem';

class App extends Component {
  constructor(props){
    super(props);
    let toDos = localStorage.getItem('todos'); //convert string into an array
    if(toDos){
      this.state = {
        toDos: toDos.split(',')
      };
    }else{
      localStorage.setItem('todos', initialData.toString()); //convert array into a string
      this.state = {
        toDos: initialData
      };
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(itemToDelete){
    let toDoArray = this.state.toDos;
    let newToDos = toDoArray.filter(function(todo){
      return todo !== itemToDelete;
    });
    this.setState({
      toDos: newToDos
    }, () => localStorage.setItem('todos', newToDos.toString()));
  }

  componentWillUnmount(){ //for unmounting so it is still in local storage
    localStorage.setItem('todos', this.state.toDos);
  }

  addItem(newToDo){ //adding items to to do list
    let newToDos = this.state.toDos;
    newToDos.push(newToDo);
    this.setState({
      toDos: newToDos
    }, () => localStorage.setItem('todos', newToDos.toString()));
  }

  render() {
    return (
      <div className="App">
        <h1>To Do: </h1>
        <AddItem addItem = {this.addItem}/>
        <ToDoList toDos = {this.state.toDos} deleteItem = {this.deleteItem}/>
      </div>
    );
  }
}

export default App;
