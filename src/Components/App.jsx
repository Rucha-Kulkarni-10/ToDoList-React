import React, { useState } from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
import styles from './App.module.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, id: Date.now(), completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className={styles.container}>
      <Header title="TaskMaster To-Do List" /> 
      <input 
        type="text" 
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        placeholder="Add a new task" 
        className={styles.input}
      />
      <button onClick={addTodo} className={styles.addButton}>Add</button>
      <ToDoList 
        todos={todos} 
        onToggleComplete={toggleComplete} 
        onDelete={deleteTodo} 
        onEdit={editTodo} 
      />
    </div>
  );
};

export default App;
