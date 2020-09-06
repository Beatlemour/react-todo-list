import React, { useEffect, useState } from "react";
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Typography from "@material-ui/core/Typography";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos([todo, ...todos])
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h2">
        React Todo App
      </Typography>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} ></TodoList>
    </div>
  );
}

export default App;