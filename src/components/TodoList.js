import React from 'react';
import PropTypes from 'prop-types';
import Todo from './ToDo';

const TodoList = ({todos, toggleTodo}) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );

  TodoList.propTypes = {
    todos: PropTypes.arrayOF(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };
};

export default TodoList;