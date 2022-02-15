import React from 'react';
import './App.scss';

import todos from './api/todos';
import users from './api/users';
import { Todo } from './data/Todo';
import { TodoList } from './components/TodoList/TodoList';

const App: React.FC = () => {
  const createdTodo: Todo[] = todos.map(todo => {
    return {
      ...todo,
      user: users.find(user => (user.id === todo.userId)) || null,
    };
  });

  return (
    <div className="App">
      <h1>Static list of todos</h1>
      <TodoList todoList={createdTodo} />
    </div>
  );
};

export default App;