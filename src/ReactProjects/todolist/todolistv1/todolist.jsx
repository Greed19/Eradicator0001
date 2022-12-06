import React from 'react';
import FormInput from './components/FormInput/FormInput';
import styles from './todolist.module.scss';

const TodoList = () => {
  return (
    <main className={styles.todo_container}> 
      <h1 className={styles.todo_container}>Todo List</h1>
        <FormInput/>
      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Studying
            <button>Edit</button>
          </label>
        </li>
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Creating
            <button>Edit</button>
          </label>
        </li>
      </ul>
      <footer>
        <input type="checkbox" />
        <p>You have 0 to do</p>
        <button>delete</button>
      </footer>
    </main>
  )
}

export default TodoList