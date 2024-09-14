import { useState } from 'react'
import './App.css'
import AddTask from './components/addTask/AddTask';
import TaskList from './components/taskList/TaskList';

function App() {

  const [tasks, setTasks] = useState([]);

  //Aca la funcion para agregar tareas
  const addTask = (taskName) =>{
    const newTask = {
      id: tasks.length,
      name: taskName,
      completed: false //aca marco que la tarea no esta completada
    };
    setTasks([...tasks, newTask]);
  }

  //Aca hago la funcion para marcar que la tarea esta completada
  const toggleCompleteTask = (taskId) => {
    const updateTasks = tasks.map((task) =>
      task.id === taskId ? {...task, completed: !task.completed} : task
  );
  setTasks(updateTasks);
  }

  // Aca para eliminar una tarea
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };
  

  return (
    <>
      <div>
        <h1>Task List</h1>
        <AddTask addTask={addTask}/>
        <br></br>
        <TaskList tasks = {tasks} toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} />
      </div>
    </>
  )
}

export default App
