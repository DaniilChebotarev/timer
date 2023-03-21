import React, { Component } from 'react';

import './App.css';

import Timer from '../Timer/Timer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [],
    filter: 'all', // all, active, completed
  };

  createTodoItem(label, minute, second) {
    return {
      label,
      completed: false,
      id: this.maxId++,
      date: new Date(),
      minute,
      second,
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.filter((el) => el.id !== id);

      return {
        todoData: idx,
      };
    });
  };

  addItem = (text, minute, second) => {
    const newItem = this.createTodoItem(text, minute, second);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  onToggleProperty = (arr, id, propName) => {
    return arr.map((el) => (el.id === id ? { ...el, [propName]: !el[propName] } : el));
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => ({
      todoData: this.onToggleProperty(todoData, id, 'completed'),
    }));
  };

  filterTask(items, filter) {
    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.completed);
      case 'completed':
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  clearCompleted = () => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((item) => !item.completed);

      return {
        todoData: newTodoData,
      };
    });
  };

  render() {
    const { todoData, filter } = this.state;
    const itemsLeft = todoData.filter((el) => el.completed).length;
    const visibleItems = this.filterTask(todoData, filter);
    const todoCount = todoData.length - itemsLeft;

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onItemAdded={this.addItem} />
        </header>
        <section className="main">
          <TaskList todos={visibleItems} onDeleted={this.deleteItem} onToggleCompleted={this.onToggleCompleted} />
          <Footer
            filter={filter}
            todoCount={todoCount}
            onFilterChange={this.onFilterChange}
            onClear={this.clearCompleted}
          />
        </section>
      </section>
    );
  }
}
