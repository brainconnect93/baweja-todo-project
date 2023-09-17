import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoContainer from './components/TodoContainer';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the API and update the state.
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  // Implement functions to handle task actions (add, toggle, delete).

  return (
    <div className="App">
		  <TodoContainer tasks={tasks}/>
    </div>
  );
};

export default App;
