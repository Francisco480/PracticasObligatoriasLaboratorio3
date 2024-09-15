import React from 'react';
import PropTypes from 'prop-types';

function TaskList({ tasks, toggleCompleteTask, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="list-group-item d-flex justify-content-between align-items-center"
          style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'gray' : 'black',
          }}
        >
          <span className="mr-2">{task.name} {task.id}</span>
          <div>
            <button
              onClick={() => toggleCompleteTask(task.id)}
              className={`btn ${task.completed ? 'btn-secondary' : 'btn-primary'} btn-sm mr-2`}
            >
              {task.completed ? 'Reactivar' : 'Completar'}
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="btn btn-danger btn-sm"
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    toggleCompleteTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };

export default TaskList;
