import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Todo from './components/Todo';

function App() {
  const [activeTab, setActiveTab] = useState('counter');

  return (
    <div className="App">
      <Header />
      <nav className="nav-tabs">
        <button
          className={activeTab === 'counter' ? 'active' : ''}
          onClick={() => setActiveTab('counter')}
        >
          Counter
        </button>
        <button
          className={activeTab === 'todo' ? 'active' : ''}
          onClick={() => setActiveTab('todo')}
        >
          Todo List
        </button>
      </nav>
      <main className="content">
        {activeTab === 'counter' && <Counter />}
        {activeTab === 'todo' && <Todo />}
      </main>
    </div>
  );
}

export default App;
