import React, { Component } from 'react';

import Task from '../Task';

import './TaskList.css';

function TaskList({ todos, onDeleted, onToggleCompleted, addItem }) {
  const elements = todos.map((item) => {
    return (
      <li key={item.id}>
        <Task
          {...item}
          onDeleted={() => onDeleted(item.id)}
          onToggleCompleted={() => onToggleCompleted(item.id)}
          addItem={addItem}
        />
      </li>
    );
  });

  return <ul className="todo-list">{elements}</ul>;
}

export default TaskList;
