import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import Home from './pages/Home';
import AddTask from './pages/AddTask';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </Router>
    </TaskProvider>
  );
}

export default App;