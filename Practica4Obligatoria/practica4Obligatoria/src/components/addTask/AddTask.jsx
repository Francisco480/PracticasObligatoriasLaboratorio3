import { useState} from "react";
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function AddTask({addTask}){
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim()) {
          addTask(taskName); // aca agrego la tarea
          setTaskName(''); // lo vuelvo a poner en blanco como al principio
        }
      };

    return (
        <Form onSubmit={handleSubmit} className="d-flex">
      <Form.Group className="flex-grow-1 mr-2">
        <Form.Control
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Add new task"
        />
      </Form.Group>

      <Button type="submit" className="btn btn-primary">
        Add
      </Button>
    </Form>
    )
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired,
};

export default AddTask;