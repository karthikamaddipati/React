import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './themeContext';
import { Counter } from './counter';
import Dashboard from './contextDashboard';
import TicTacToe from './tictactoe';
import Calculator from './calculator';
import Todo from './todo';
import './App.css';
import TaskManager from './TaskManager';


const Home = () => (
  <div>
    <h1>Ineuron Assignment</h1>
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/tictactoe">Tic Tac Toe</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
      <li>
        <Link to="/task-manager">Task Manager</Link>
      </li>
    </ul>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ThemeProvider><Dashboard /></ThemeProvider>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/task-manager" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
