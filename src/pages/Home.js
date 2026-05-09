import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const Home = () => {
  const { tasks, removeTask, toggleTask } = useContext(TaskContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Minhas Tarefas</h1>
      <Link to="/add-task">
        <button style={{ marginBottom: '20px' }}>Adicionar Nova Tarefa</button>
      </Link>

      {tasks.length === 0 && (
        <p>Você ainda não adicionou nenhuma tarefa.</p>
      )}

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: '10px' }}>
            <span 
              onClick={() => toggleTask(task.id)}
              style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {task.title}
            </span>
            <button onClick={() => removeTask(task.id)} style={{ marginLeft: '10px' }}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;