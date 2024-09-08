import React, { useState } from 'react';
import styles from './ToDoItem.module.css';

const ToDoItem = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  const [isEdit, setisEdit] = useState(false);
  const [EditTxt, setEditTxt] = useState(todo.text);

  const HandleEdit = (e) => {
    setEditTxt(e.target.value);
  };

  const handleEditSubmit = () => {
    onEdit(todo.id, EditTxt);
    setisEdit(false);
  };

  return (
    <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      {isEdit ? (
        <div className={styles.editContainer}>
          <input 
            type="text" 
            value={EditTxt} 
            onChange={HandleEdit} 
            className={styles.editInput}
          />
          <button onClick={handleEditSubmit} className={styles.saveButton}>Save</button>
        </div>
      ) : (
        <div className={styles.todoText}>
          {todo.text}
          <div className={styles.actions}>
            <button onClick={() => onToggleComplete(todo.id)} className={styles.actionButton}>
              {todo.completed ? 'UndoTask' : 'Complete'}
            </button>
            <button onClick={() => onDelete(todo.id)} className={styles.actionButton}>Delete</button>
            <button onClick={() => setisEdit(true)} className={styles.actionButton}>Edit</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default ToDoItem;
