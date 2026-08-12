import React from 'react';
import TodoApp from './components/TodoApp';
import Calculator from './components/Calculator';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="container">
      <div>
        <TodoApp />
        <Calculator />
        <SearchFilter />
      </div>
    </div>
  );
}

export default App;