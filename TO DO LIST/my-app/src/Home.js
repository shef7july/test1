import React, { useState } from 'react';
import './Home.css';
function Home(){

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
       
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
          />
        <button onClick={addTask}>Add More</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
            <li key={index}>
            {task}
          
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default Home;