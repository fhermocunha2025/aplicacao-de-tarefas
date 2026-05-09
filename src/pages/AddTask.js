import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      navigate('/'); 
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Adicionar Nova Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite a tarefa..."
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={{ padding: '10px', width: '250px' }}
        />
        <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>
          Salvar Tarefa
        </button>
      </form>
      <br />
      <button onClick={() => navigate('/')}>Voltar</button>
    </div>
  );
};

export default AddTask;