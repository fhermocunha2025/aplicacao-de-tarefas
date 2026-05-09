import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import TaskItem from '../components/TaskItem'; // Importando o novo componente

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

      <ul style={{ padding: 0, listStyle: 'none' }}>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onRemove={removeTask} 
            onToggle={toggleTask} 
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;