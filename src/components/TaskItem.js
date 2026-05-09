import React from 'react';

const TaskItem = ({ task, onRemove, onToggle }) => {
  return (
    <li style={{ 
      marginBottom: '10px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      maxWidth: '400px' 
    }}>
      <span 
        onClick={() => onToggle(task.id)}
        style={{ 
          textDecoration: task.completed ? 'line-through' : 'none', 
          cursor: 'pointer',
          flex: 1
        }}
      >
        {task.title}
      </span>
      <button 
        onClick={() => onRemove(task.id)} 
        style={{ marginLeft: '10px', cursor: 'pointer' }}
      >
        Excluir
      </button>
    </li>
  );
};

export default TaskItem;